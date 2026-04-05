// mobile controls -- virtual joystick on the left, camera drag on the right
// touch with 1 finger on left half = move, touch on right half = rotate camera
// its not perfect but it works, whatever

export interface JoystickState {
    dx: number; // -1 to 1
    dy: number; // -1 to 1
}

export class MobileControls {
    private joystickActive: boolean = false;
    private joystickTouchId: number = -1;
    private joystickOriginX: number = 0;
    private joystickOriginY: number = 0;
    private joystickCurrentX: number = 0;
    private joystickCurrentY: number = 0;
    private readonly JOYSTICK_RADIUS = 55; // pixels

    // camera drag touch (right side of screen)
    private camTouchId: number = -1;
    private camLastX: number = 0;
    private camLastY: number = 0;
    public camDeltaX: number = 0;
    public camDeltaY: number = 0;

    // action callbacks -- pressed by on-screen buttons
    public onProcreate: (() => void) | null = null;
    public onMute: (() => void) | null = null;
    public onChat: (() => void) | null = null;

    // dom elements
    private joystickZone: HTMLElement;
    private joystickKnob: HTMLElement;
    private joystickBase: HTMLElement;

    constructor() {
        this.joystickZone = document.getElementById('joystick-zone')!;
        this.joystickKnob = document.getElementById('joystick-knob')!;
        this.joystickBase = document.getElementById('joystick-base')!;

        this.setupTouchListeners();
    }

    private setupTouchListeners(): void {
        // joystick zone -- left half of screen
        this.joystickZone.addEventListener('touchstart', (e) => {
            e.preventDefault();
            for (const touch of Array.from(e.changedTouches)) {
                if (this.joystickTouchId === -1) {
                    this.joystickTouchId = touch.identifier;
                    this.joystickOriginX = touch.clientX;
                    this.joystickOriginY = touch.clientY;
                    this.joystickCurrentX = touch.clientX;
                    this.joystickCurrentY = touch.clientY;
                    this.joystickActive = true;
                    // show base at touch origin
                    this.joystickBase.style.left = `${touch.clientX - 50}px`;
                    this.joystickBase.style.top = `${touch.clientY - 50}px`;
                    this.joystickBase.style.display = 'block';
                    this.joystickKnob.style.display = 'block';
                }
            }
        }, { passive: false });

        this.joystickZone.addEventListener('touchmove', (e) => {
            e.preventDefault();
            for (const touch of Array.from(e.changedTouches)) {
                if (touch.identifier === this.joystickTouchId) {
                    this.joystickCurrentX = touch.clientX;
                    this.joystickCurrentY = touch.clientY;
                    // clamp knob to radius
                    const dx = touch.clientX - this.joystickOriginX;
                    const dy = touch.clientY - this.joystickOriginY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const clampedDist = Math.min(dist, this.JOYSTICK_RADIUS);
                    const angle = Math.atan2(dy, dx);
                    const knobX = this.joystickOriginX + Math.cos(angle) * clampedDist;
                    const knobY = this.joystickOriginY + Math.sin(angle) * clampedDist;
                    this.joystickKnob.style.left = `${knobX - 22}px`;
                    this.joystickKnob.style.top = `${knobY - 22}px`;
                }
            }
        }, { passive: false });

        const endJoystick = (e: TouchEvent) => {
            for (const touch of Array.from(e.changedTouches)) {
                if (touch.identifier === this.joystickTouchId) {
                    this.joystickTouchId = -1;
                    this.joystickActive = false;
                    this.joystickBase.style.display = 'none';
                    this.joystickKnob.style.display = 'none';
                }
            }
        };
        this.joystickZone.addEventListener('touchend', endJoystick);
        this.joystickZone.addEventListener('touchcancel', endJoystick);

        // right half of screen = camera orbit drag
        const camZone = document.getElementById('cam-zone')!;
        camZone.addEventListener('touchstart', (e) => {
            e.preventDefault();
            for (const touch of Array.from(e.changedTouches)) {
                if (this.camTouchId === -1) {
                    this.camTouchId = touch.identifier;
                    this.camLastX = touch.clientX;
                    this.camLastY = touch.clientY;
                    this.camDeltaX = 0;
                    this.camDeltaY = 0;
                }
            }
        }, { passive: false });

        camZone.addEventListener('touchmove', (e) => {
            e.preventDefault();
            for (const touch of Array.from(e.changedTouches)) {
                if (touch.identifier === this.camTouchId) {
                    this.camDeltaX = touch.clientX - this.camLastX;
                    this.camDeltaY = touch.clientY - this.camLastY;
                    this.camLastX = touch.clientX;
                    this.camLastY = touch.clientY;
                }
            }
        }, { passive: false });

        const endCam = (e: TouchEvent) => {
            for (const touch of Array.from(e.changedTouches)) {
                if (touch.identifier === this.camTouchId) {
                    this.camTouchId = -1;
                    this.camDeltaX = 0;
                    this.camDeltaY = 0;
                }
            }
        };
        camZone.addEventListener('touchend', endCam);
        camZone.addEventListener('touchcancel', endCam);

        // wire up the action buttons
        const btnProcreate = document.getElementById('btn-procreate');
        const btnMute = document.getElementById('btn-mute');
        const btnChat = document.getElementById('btn-chat');
        if (btnProcreate) {
            btnProcreate.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.onProcreate?.();
            }, { passive: false });
        }
        if (btnMute) {
            btnMute.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.onMute?.();
            }, { passive: false });
        }
        if (btnChat) {
            btnChat.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.onChat?.();
            }, { passive: false });
        }
    }

    public getJoystick(): JoystickState {
        if (!this.joystickActive) return { dx: 0, dy: 0 };
        const rawDx = this.joystickCurrentX - this.joystickOriginX;
        const rawDy = this.joystickCurrentY - this.joystickOriginY;
        const dist = Math.sqrt(rawDx * rawDx + rawDy * rawDy);
        if (dist < 5) return { dx: 0, dy: 0 }; // dead zone
        const norm = Math.min(dist, this.JOYSTICK_RADIUS);
        return {
            dx: (rawDx / dist) * (norm / this.JOYSTICK_RADIUS),
            dy: (rawDy / dist) * (norm / this.JOYSTICK_RADIUS)
        };
    }

    public consumeCamDelta(): { dx: number; dy: number } {
        const d = { dx: this.camDeltaX, dy: this.camDeltaY };
        this.camDeltaX = 0;
        this.camDeltaY = 0;
        return d;
    }

    // detect if we're on a touch device -- rough but good enough yolo
    public static isMobile(): boolean {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
}
