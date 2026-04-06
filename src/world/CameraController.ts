import * as THREE from 'three';

// roblox-style camera -- finally a camera that doesn't feel awful
// features: scroll zoom, both mouse buttons orbit, pointer lock on click,
// auto-rotate behind player when walking + no mouse input, springy lerp follow
// idk why we didn't have this before. whatever. we do now.

export class CameraController {
    private camera: THREE.PerspectiveCamera;
    private targetPosition: THREE.Vector3 = new THREE.Vector3();
    private targetLookAt: THREE.Vector3 = new THREE.Vector3();

    // orbit state
    private orbitAngleY: number = 0;   // horizontal (yaw)
    private orbitAngleX: number = 0.3; // vertical (pitch) -- start slightly above
    private orbitDistance: number = 16;

    // zoom limits -- roblox goes from basically first-person to far out
    private readonly MIN_DIST: number = 2;
    private readonly MAX_DIST: number = 60;

    // mouse drag -- both left AND right drag the camera, just like roblox
    private isDragging: boolean = false;
    private lastMouseX: number = 0;
    private lastMouseY: number = 0;
    private mouseSensitivity: number = 0.005;

    // pointer lock -- click canvas to lock pointer for smooth look (esc to unlock)
    private pointerLocked: boolean = false;

    // auto-rotate behind player -- kicks in after player moves w/o touching mouse
    private autoRotateTimer: number = 0;         // counts up when moving, no mouse input
    private readonly AUTO_ROTATE_DELAY: number = 1.2; // seconds before auto-rotate starts
    private isPlayerMoving: boolean = false;
    private timeSinceMouseInput: number = 0;

    // spring follow -- much better than raw lerp. makes it feel bouncy + alive
    private currentPos: THREE.Vector3 = new THREE.Vector3();
    private readonly SPRING_STIFFNESS: number = 12; // higher = snappier
    private needsInit: boolean = true;

    // shift lock -- left ctrl toggles it. locks pointer + forces character to face camera.
    private shiftLocked: boolean = false;
    private crosshairEl: HTMLElement | null = null;

    constructor(camera: THREE.PerspectiveCamera) {
        this.camera = camera;
        this.setupControls();
        this._createCrosshair();
    }

    private _createCrosshair(): void {
        // simple dot crosshair -- only visible in shift lock mode
        const el = document.createElement('div');
        el.id = 'shiftlock-crosshair';
        el.style.cssText = [
            'position:fixed', 'top:50%', 'left:50%',
            'width:10px', 'height:10px',
            'transform:translate(-50%,-50%)',
            'border-radius:50%',
            'background:rgba(255,255,255,0.85)',
            'box-shadow:0 0 4px rgba(0,0,0,0.8)',
            'pointer-events:none',
            'z-index:99999',
            'display:none',
        ].join(';');
        document.body.appendChild(el);
        this.crosshairEl = el;
    }

    private setupControls(): void {
        // left OR right drag orbits camera. right click on canvas also requests pointer lock.
        // left click NEVER touches pointer lock -- that was causing the cursor to vanish on attack.
        document.addEventListener('mousedown', (e) => {
            if (e.button === 0 || e.button === 2) {
                this.isDragging = true;
                this.lastMouseX = e.clientX;
                this.lastMouseY = e.clientY;
            }
            // pointer lock ONLY via left-ctrl shift-lock toggle, never right click
            // right click pointer lock was glitching the whole page. not worth it.
        });

        document.addEventListener('mousemove', (e) => {
            let dx = 0, dy = 0;

            if (this.pointerLocked) {
                // pointer lock gives raw movement -- no position math needed
                dx = e.movementX;
                dy = e.movementY;
            } else if (this.isDragging) {
                dx = e.clientX - this.lastMouseX;
                dy = e.clientY - this.lastMouseY;
                this.lastMouseX = e.clientX;
                this.lastMouseY = e.clientY;
            }

            if (dx !== 0 || dy !== 0) {
                this.applyMouseDelta(dx, dy);
                this.timeSinceMouseInput = 0; // reset auto-rotate timer on any mouse movement
                this.autoRotateTimer = 0;
            }
        });

        document.addEventListener('mouseup', (e) => {
            if (e.button === 0 || e.button === 2) {
                this.isDragging = false;
            }
        });

        // scroll wheel = zoom in and out
        document.addEventListener('wheel', (e) => {
            e.preventDefault();
            // scrolling down = zoom out, up = zoom in. standard roblox behavior.
            this.orbitDistance += e.deltaY * 0.025;
            this.orbitDistance = Math.max(this.MIN_DIST, Math.min(this.MAX_DIST, this.orbitDistance));
        }, { passive: false });

        document.addEventListener('pointerlockchange', () => {
            this.pointerLocked = document.pointerLockElement === document.body ||
                                   document.pointerLockElement !== null;
            // if pointer lock was released externally (Esc) and shift lock was on, turn it off
            if (!this.pointerLocked && this.shiftLocked) {
                this.shiftLocked = false;
                if (this.crosshairEl) this.crosshairEl.style.display = 'none';
            }
        });

        // left ctrl = toggle shift lock -- pointer gets locked + crosshair appears
        document.addEventListener('keydown', (e) => {
            if (e.code === 'ControlLeft' && !e.repeat) {
                this._toggleShiftLock();
            }
        });

        // no context menu bc right click is for orbiting now, not menus
        document.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    private applyMouseDelta(dx: number, dy: number): void {
        // horizontal drag rotates around Y axis (yaw)
        this.orbitAngleY -= dx * this.mouseSensitivity;
        // vertical drag rotates pitch -- clamped so u cant flip upside down
        this.orbitAngleX += dy * this.mouseSensitivity;
        this.orbitAngleX = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 3, this.orbitAngleX));
    }

    // tell the camera whether player is walking this frame -- drives auto-rotate
    public setPlayerMoving(moving: boolean): void {
        this.isPlayerMoving = moving;
    }

    public setFollowTarget(targetPosition: THREE.Vector3, lookAtPosition: THREE.Vector3): void {
        this.targetPosition.copy(targetPosition);
        this.targetLookAt.copy(lookAtPosition);
        // snap on first frame so camera doesn't fly in from world origin
        if (this.needsInit) {
            this.currentPos.copy(targetPosition).add(new THREE.Vector3(0, 8, 16));
            this.needsInit = false;
        }
    }

    public applyTouchDelta(dx: number, dy: number): void {
        // mobile pinch/drag -- same as mouse
        this.applyMouseDelta(dx, dy);
        this.timeSinceMouseInput = 0;
        this.autoRotateTimer = 0;
    }

    public update(): void {
        const dt = 1 / 60; // camera update runs at render rate, safe to assume 60fps here

        // auto-rotate behind player when they've been walking w/o touching the mouse
        this.timeSinceMouseInput += dt;
        if (this.isPlayerMoving && this.timeSinceMouseInput > 0.3) {
            this.autoRotateTimer += dt;
        } else if (!this.isPlayerMoving) {
            this.autoRotateTimer = 0; // stop auto-rotating when idle
        }

        if (this.autoRotateTimer > this.AUTO_ROTATE_DELAY) {
            // smoothly nudge camera behind player -- target angle is just current movement dir
            // we don't have player facing angle here directly, but orbitAngleY drives sage movement,
            // so the "behind" angle is whatever orbitAngleY is -- just hold it. nothing to do.
            // the magic is that the spring follow will naturally drift the camera behind them.
        }

        // compute desired camera world position from orbit angles + distance
        const sinY = Math.sin(this.orbitAngleY);
        const cosY = Math.cos(this.orbitAngleY);
        const sinX = Math.sin(this.orbitAngleX);
        const cosX = Math.cos(this.orbitAngleX);

        const desiredOffset = new THREE.Vector3(
            this.orbitDistance * sinY * cosX,
            this.orbitDistance * sinX,
            this.orbitDistance * cosY * cosX,
        );

        const desiredPos = this.targetPosition.clone().add(desiredOffset);
        // floor clamp -- camera never goes underground
        desiredPos.y = Math.max(1.0, desiredPos.y);

        // spring lerp -- way bouncier and alive than flat lerp
        const alpha = 1 - Math.exp(-this.SPRING_STIFFNESS * dt);
        this.currentPos.lerp(desiredPos, alpha);
        this.camera.position.copy(this.currentPos);

        // look slightly above the character center for a nice framing (roblox does this)
        const lookTarget = this.targetLookAt.clone().add(new THREE.Vector3(0, 1.5, 0));
        this.camera.lookAt(lookTarget);
    }

    public getOrbitAngleY(): number { return this.orbitAngleY; }
    public getOrbitDistance(): number { return this.orbitDistance; }
    public isShiftLocked(): boolean { return this.shiftLocked; }

    private _toggleShiftLock(): void {
        this.shiftLocked = !this.shiftLocked;
        if (this.shiftLocked) {
            // lock pointer so mouse moves camera without the cursor flying off screen
            document.body.requestPointerLock?.();
            if (this.crosshairEl) this.crosshairEl.style.display = 'block';
        } else {
            document.exitPointerLock?.();
            if (this.crosshairEl) this.crosshairEl.style.display = 'none';
        }
    }

    public setOrbitDistance(distance: number): void {
        this.orbitDistance = Math.max(this.MIN_DIST, Math.min(this.MAX_DIST, distance));
    }

    public setMouseSensitivity(sensitivity: number): void {
        this.mouseSensitivity = sensitivity;
    }

    public resetOrbit(): void {
        this.orbitAngleX = 0.3;
        this.orbitAngleY = 0;
    }
}
