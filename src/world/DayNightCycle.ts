import * as THREE from 'three';

// DAY / NIGHT CYCLE -- the sun goes up and the sun goes down and so do my spirits
// full day = 120 real seconds bc I was feeling ambitious
// at night, emos get a power buff. because of course they do.

export class DayNightCycle {
    private time: number = 0.25; // 0=midnight 0.25=sunrise 0.5=noon 0.75=sunset
    private readonly dayLength: number = 120; // seconds per full day

    private sunLight: THREE.DirectionalLight;
    private ambientLight: THREE.AmbientLight;
    private scene: THREE.Scene;
    private wasNight: boolean = false;

    public onNightFall: (() => void) | null = null;
    public onDayBreak: (() => void) | null = null;

    constructor(scene: THREE.Scene, sunLight: THREE.DirectionalLight, ambientLight: THREE.AmbientLight) {
        this.scene = scene;
        this.sunLight = sunLight;
        this.ambientLight = ambientLight;
        this.wasNight = false;
    }

    public update(deltaTime: number): void {
        const wasNightBefore = this.wasNight;

        this.time += deltaTime / this.dayLength;
        if (this.time >= 1) this.time -= 1; // wrap around

        this.wasNight = this.isNight();

        // fire events when transitioning
        if (!wasNightBefore && this.wasNight) {
            this.onNightFall?.();
            console.log('%c🌙 NIGHT HAS FALLEN. EMOS GROW STRONGER.', 'color: #6633aa; font-size: 14px');
        }
        if (wasNightBefore && !this.wasNight) {
            this.onDayBreak?.();
            console.log('%c☀️ A NEW DAY BEGINS.', 'color: gold; font-size: 14px');
        }

        this.updateLighting();
    }

    private updateLighting(): void {
        // time: 0=midnight, 0.25=sunrise, 0.5=noon 0.75=sunset
        const sunAngle = (this.time - 0.25) * Math.PI * 2;
        const sunHeight = Math.sin(sunAngle); // -1 to 1

        // sun position orbits around the world
        this.sunLight.position.set(
            Math.cos(sunAngle) * 100,
            sunHeight * 100,
            50,
        );

        // sun intensity from 0 to 1.1 based on height
        this.sunLight.intensity = Math.max(0, sunHeight) * 1.1;

        // ambient light dims at night -- never fully dark because that would be annoying
        this.ambientLight.intensity = 0.08 + Math.max(0, sunHeight) * 0.55;

        // sky color transition -- night blue -> sunrise orange -> day blue -> sunset orange -> night
        if (sunHeight > 0.3) {
            // daytime -- blue sky
            this.scene.background = new THREE.Color().setHSL(0.6, 0.55, 0.48 + sunHeight * 0.12);
        } else if (sunHeight > -0.15) {
            // dawn/dusk -- beautiful orange
            const t = (sunHeight + 0.15) / 0.45; // 0-1
            const nightColor = new THREE.Color(0x080818);
            const dawnColor = new THREE.Color(0xff7733);
            this.scene.background = new THREE.Color().lerpColors(nightColor, dawnColor, t);
        } else {
            // night -- dark and deeply vibing
            this.scene.background = new THREE.Color(0x060614);
        }
    }

    public isNight(): boolean {
        const sunAngle = (this.time - 0.25) * Math.PI * 2;
        return Math.sin(sunAngle) < -0.1;
    }

    // returns 0 at noon, 1 at midnight -- for scaling emo power boost etc
    public getNightIntensity(): number {
        const sunAngle = (this.time - 0.25) * Math.PI * 2;
        return Math.max(0, -Math.sin(sunAngle));
    }

    public getTimeString(): string {
        const hours = Math.floor(this.time * 24);
        const mins = Math.floor((this.time * 24 - hours) * 60);
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const h = hours % 12 === 0 ? 12 : hours % 12;
        return `${h}:${mins.toString().padStart(2, '0')} ${ampm}`;
    }
}
