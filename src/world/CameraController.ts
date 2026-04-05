import * as THREE from 'three';

export class CameraController {
    private camera: THREE.PerspectiveCamera;
    private targetPosition: THREE.Vector3;
    private targetLookAt: THREE.Vector3;
    
    private isRightMouseDown: boolean = false;
    private lastMouseX: number = 0;
    private lastMouseY: number = 0;
    private mouseDeltaX: number = 0;
    private mouseDeltaY: number = 0;
    
    private orbitDistance: number = 15;
    private orbitHeight: number = 8;
    private orbitAngleX: number = 0;
    private orbitAngleY: number = 0;
    
    private mouseSensitivity: number = 0.005;
    private followSmoothness: number = 0.1;

    constructor(camera: THREE.PerspectiveCamera) {
        this.camera = camera;
        this.targetPosition = new THREE.Vector3(0, 0, 0);
        this.targetLookAt = new THREE.Vector3(0, 0, 0);
        
        this.setupMouseControls();
    }

    private setupMouseControls(): void {
        document.addEventListener('mousedown', (e) => {
            if (e.button === 2) { // right mouse button
                this.isRightMouseDown = true;
                this.lastMouseX = e.clientX;
                this.lastMouseY = e.clientY;
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (this.isRightMouseDown) {
                this.mouseDeltaX = e.clientX - this.lastMouseX;
                this.mouseDeltaY = e.clientY - this.lastMouseY;
                
                this.lastMouseX = e.clientX;
                this.lastMouseY = e.clientY;
                
                // Apply mouse movement to orbit angles (inverted)
                this.orbitAngleY -= this.mouseDeltaX * this.mouseSensitivity;
                this.orbitAngleX -= this.mouseDeltaY * this.mouseSensitivity;
                
                // Clamp vertical rotation to prevent flipping
                this.orbitAngleX = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, this.orbitAngleX));
            }
        });

        document.addEventListener('mouseup', (e) => {
            if (e.button === 2) {
                this.isRightMouseDown = false;
                this.mouseDeltaX = 0;
                this.mouseDeltaY = 0;
            }
        });

        // Prevent context menu on right click
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    public setFollowTarget(targetPosition: THREE.Vector3, lookAtPosition: THREE.Vector3): void {
        this.targetPosition.copy(targetPosition);
        this.targetLookAt.copy(lookAtPosition);
    }

    public setOrbitDistance(distance: number): void {
        this.orbitDistance = distance;
    }

    public applyTouchDelta(dx: number, dy: number): void {
        // same logic as mouse drag but called from mobile controls each frame
        this.orbitAngleY -= dx * this.mouseSensitivity;
        this.orbitAngleX -= dy * this.mouseSensitivity;
        this.orbitAngleX = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, this.orbitAngleX));
    }

    public update(): void {
        // Calculate camera position based on orbit angles and distance
        const cameraX = this.orbitDistance * Math.sin(this.orbitAngleY) * Math.cos(this.orbitAngleX);
        const cameraY = this.orbitDistance * Math.sin(this.orbitAngleX) + this.orbitHeight;
        const cameraZ = this.orbitDistance * Math.cos(this.orbitAngleY) * Math.cos(this.orbitAngleX);

        const desiredPosition = new THREE.Vector3(
            this.targetPosition.x + cameraX,
            this.targetPosition.y + cameraY,
            this.targetPosition.z + cameraZ
        );

        // clamp Y so camera never clips through the ground -- nobody wants to see the void
        desiredPosition.y = Math.max(1.2, desiredPosition.y);

        // Smooth camera movement
        this.camera.position.lerp(desiredPosition, this.followSmoothness);
        
        // Look at target
        this.camera.lookAt(this.targetLookAt);
    }

    public getOrbitAngleY(): number {
        return this.orbitAngleY;
    }

    public resetOrbit(): void {
        this.orbitAngleX = 0;
        this.orbitAngleY = 0;
    }

    public getOrbitDistance(): number {
        return this.orbitDistance;
    }

    public setMouseSensitivity(sensitivity: number): void {
        this.mouseSensitivity = sensitivity;
    }
}
