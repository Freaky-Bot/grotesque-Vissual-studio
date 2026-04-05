import * as THREE from 'three';

// roblox style chat bubbles -- projects 3d world pos to 2d screen coords every frame
// bubbles float above heads and fade out after a while

interface Bubble {
    el: HTMLElement;
    worldPos: THREE.Vector3; // where in 3d world to anchor
    headOffset: number;      // extra y above worldPos (head height varies per char)
    born: number;            // timestamp when created
    duration: number;        // how long to show in ms
}

export class ChatBubbleManager {
    private camera: THREE.PerspectiveCamera;
    private container: HTMLElement;
    private activeBubbles: Bubble[] = [];
    private readonly FADE_MS = 600; // fade out duration

    constructor(camera: THREE.PerspectiveCamera) {
        this.camera = camera;

        // overlay div that sits on top of the canvas, no pointer events so clicks pass through
        this.container = document.createElement('div');
        this.container.id = 'bubble-container';
        this.container.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 150;
        `;
        document.body.appendChild(this.container);
    }

    public showBubble(worldPos: THREE.Vector3, text: string, headOffset: number = 3, duration: number = 4000): void {
        // trim text so bubbles dont go insane wide
        const trimmed = text.length > 80 ? text.substring(0, 77) + '...' : text;

        const el = document.createElement('div');
        el.className = 'chat-bubble';
        el.textContent = trimmed;

        // bubble tail (the lil triangle pointing down)
        const tail = document.createElement('div');
        tail.className = 'chat-bubble-tail';
        el.appendChild(tail);

        this.container.appendChild(el);

        const bubble: Bubble = {
            el,
            worldPos: worldPos.clone(), // snapshot, will be updated by ref each frame if passed as ref
            headOffset,
            born: Date.now(),
            duration
        };

        this.activeBubbles.push(bubble);
    }

    // call this every frame -- updates all bubble screen positions
    public update(): void {
        const now = Date.now();
        const toRemove: Bubble[] = [];

        for (const bubble of this.activeBubbles) {
            const age = now - bubble.born;

            if (age > bubble.duration + this.FADE_MS) {
                toRemove.push(bubble);
                continue;
            }

            // project 3d position to screen -- this is the whole trick
            const pos3d = bubble.worldPos.clone();
            pos3d.y += bubble.headOffset;

            // check if behind camera
            const cameraDir = new THREE.Vector3();
            this.camera.getWorldDirection(cameraDir);
            const toTarget = pos3d.clone().sub(this.camera.position).normalize();
            if (toTarget.dot(cameraDir) < 0) {
                bubble.el.style.display = 'none';
                continue;
            }
            bubble.el.style.display = 'block';

            // project to NDC then to screen pixels
            const ndc = pos3d.clone().project(this.camera);
            const screenX = (ndc.x * 0.5 + 0.5) * window.innerWidth;
            const screenY = (-ndc.y * 0.5 + 0.5) * window.innerHeight;

            // scale bubble based on distance from camera (perspective fake)
            const dist = this.camera.position.distanceTo(pos3d);
            const scaleFactor = Math.max(0.3, Math.min(1.0, 18 / dist));

            // position bubble centered on projected point
            const w = bubble.el.offsetWidth;
            bubble.el.style.left = `${screenX - w / 2}px`;
            bubble.el.style.top = `${screenY - bubble.el.offsetHeight}px`;
            bubble.el.style.transform = `scale(${scaleFactor})`;
            bubble.el.style.transformOrigin = 'bottom center';

            // fade out near end of life
            if (age > bubble.duration) {
                const fadeProgress = (age - bubble.duration) / this.FADE_MS;
                bubble.el.style.opacity = String(1 - fadeProgress);
            } else {
                bubble.el.style.opacity = '1';
            }
        }

        // cleanup dead bubbles
        for (const b of toRemove) {
            this.container.removeChild(b.el);
            this.activeBubbles.splice(this.activeBubbles.indexOf(b), 1);
        }
    }

    // show bubble anchored to a live vector3 ref -- updates position each frame
    // use this for moving characters (most of em)
    public showBubbleLive(worldPosRef: THREE.Vector3, text: string, headOffset: number = 3, duration: number = 4000): void {
        const trimmed = text.length > 80 ? text.substring(0, 77) + '...' : text;

        const el = document.createElement('div');
        el.className = 'chat-bubble';
        el.textContent = trimmed;

        const tail = document.createElement('div');
        tail.className = 'chat-bubble-tail';
        el.appendChild(tail);

        this.container.appendChild(el);

        // store the ACTUAL reference -- bubble will follow the character
        const bubble: Bubble = {
            el,
            worldPos: worldPosRef, // live ref, not clone!
            headOffset,
            born: Date.now(),
            duration
        };

        this.activeBubbles.push(bubble);
    }
}
