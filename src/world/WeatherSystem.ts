import * as THREE from 'three';

export enum WeatherType {
    CLEAR = 'clear',
    RAIN = 'rain',
    FOG = 'foggy',
    METEOR_SHOWER = 'meteor shower',
}

interface Meteor {
    mesh: THREE.Mesh;
    vel: THREE.Vector3;
    life: number;
}

// WEATHER SYSTEM -- random weather that nobody asked for but its here
// cats panic during bad weather, Cat God doesn't care because he's god
// meteors are the most chaotic weather event, watch out

export class WeatherSystem {
    private scene: THREE.Scene;
    private currentWeather: WeatherType = WeatherType.CLEAR;
    private weatherTimer: number = 0;
    private weatherDuration: number = 20 + Math.random() * 60;
    private ambientLight: THREE.AmbientLight | null = null;

    private rainPoints: THREE.Points | null = null;
    private meteors: Meteor[] = [];
    private meteorSpawnTimer: number = 0;

    public onWeatherChange: ((weather: WeatherType) => void) | null = null;

    constructor(scene: THREE.Scene, ambientLight?: THREE.AmbientLight) {
        this.scene = scene;
        this.ambientLight = ambientLight || null;
        // start clear, let the first weather change happen naturally
    }

    public update(deltaTime: number): void {
        this.weatherTimer += deltaTime;

        if (this.weatherTimer >= this.weatherDuration) {
            this.changeWeather();
            this.weatherTimer = 0;
            this.weatherDuration = 20 + Math.random() * 90; // random next weather duration
        }

        // animate rain particles falling down
        if (this.currentWeather === WeatherType.RAIN && this.rainPoints) {
            const pos = this.rainPoints.geometry.attributes['position'];
            const arr = pos.array as Float32Array;
            for (let i = 1; i < arr.length; i += 3) {
                arr[i] -= 80 * deltaTime; // fall down
                if (arr[i] < 0) arr[i] = 120 + Math.random() * 40; // wrap around top
            }
            pos.needsUpdate = true;
        }

        // spawn and animate meteors
        if (this.currentWeather === WeatherType.METEOR_SHOWER) {
            this.meteorSpawnTimer -= deltaTime;
            if (this.meteorSpawnTimer <= 0) {
                this.spawnMeteor();
                this.meteorSpawnTimer = 1.2 + Math.random() * 2.5;
            }
        }

        for (let i = this.meteors.length - 1; i >= 0; i--) {
            const m = this.meteors[i];
            m.life -= deltaTime;
            m.mesh.position.addScaledVector(m.vel, deltaTime);
            // fade out as it flies
            const mat = m.mesh.material as THREE.MeshPhongMaterial;
            mat.emissiveIntensity = Math.max(0, m.life * 1.5);
            if (m.life <= 0 || m.mesh.position.y < -5) {
                this.scene.remove(m.mesh);
                this.meteors.splice(i, 1);
            }
        }
    }

    private changeWeather(): void {
        this.clearWeather();

        const roll = Math.random();
        if (roll < 0.32) {
            this.currentWeather = WeatherType.CLEAR;
        } else if (roll < 0.60) {
            this.currentWeather = WeatherType.RAIN;
            this.startRain();
        } else if (roll < 0.82) {
            this.currentWeather = WeatherType.FOG;
            this.startFog();
        } else {
            this.currentWeather = WeatherType.METEOR_SHOWER;
            this.startMeteors();
        }

        console.log(`%c⛅ WEATHER: ${this.currentWeather.toUpperCase()}!! buckle up`, 'color: skyblue; font-size: 13px');
        this.onWeatherChange?.(this.currentWeather);
    }

    private clearWeather(): void {
        if (this.rainPoints) {
            this.scene.remove(this.rainPoints);
            this.rainPoints.geometry.dispose();
            this.rainPoints = null;
        }
        for (const m of this.meteors) this.scene.remove(m.mesh);
        this.meteors = [];
        this.scene.fog = null;
        if (this.ambientLight) this.ambientLight.intensity = 0.6;
    }

    private startRain(): void {
        const count = 3500;
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i += 3) {
            positions[i]     = (Math.random() - 0.5) * 400;
            positions[i + 1] = Math.random() * 120;
            positions[i + 2] = (Math.random() - 0.5) * 400;
        }
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const mat = new THREE.PointsMaterial({ color: 0x88aaff, size: 0.12, transparent: true, opacity: 0.55 });
        this.rainPoints = new THREE.Points(geo, mat);
        this.scene.add(this.rainPoints);
        this.scene.fog = new THREE.Fog(0x334455, 50, 180);
        if (this.ambientLight) this.ambientLight.intensity = 0.32;
    }

    private startFog(): void {
        this.scene.fog = new THREE.FogExp2(0x778899, 0.014);
        if (this.ambientLight) this.ambientLight.intensity = 0.38;
    }

    private startMeteors(): void {
        // dramatic lighting for METEOR SHOWER event!!
        if (this.ambientLight) this.ambientLight.intensity = 0.85;
        this.meteorSpawnTimer = 0; // spawn one immediately
        console.log('%c☄️ METEOR SHOWER!!! RUN OR DONT WHATEVER', 'color: red; font-size: 16px; font-weight: bold');
    }

    private spawnMeteor(): void {
        const geo = new THREE.SphereGeometry(0.75 + Math.random() * 0.5, 6, 4);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xff4400,
            emissive: 0xcc2200,
            emissiveIntensity: 2.5,
        });
        const meteor = new THREE.Mesh(geo, mat);
        meteor.position.set(
            (Math.random() - 0.5) * 300,
            120 + Math.random() * 50,
            (Math.random() - 0.5) * 300,
        );
        const speed = 50 + Math.random() * 35;
        const vel = new THREE.Vector3(
            (Math.random() - 0.5) * 25,
            -speed,
            (Math.random() - 0.5) * 25,
        );
        this.meteors.push({ mesh: meteor, vel, life: 3.5 + Math.random() * 1.5 });
        this.scene.add(meteor);
        console.log('%c☄️ meteor inbound!!', 'color: red');
    }

    public getCurrentWeather(): WeatherType {
        return this.currentWeather;
    }

    // cats and stuff panic during storms -- check this flag to make them freak out
    public isPanicking(): boolean {
        return this.currentWeather === WeatherType.RAIN || this.currentWeather === WeatherType.METEOR_SHOWER;
    }

    public dispose(): void {
        this.clearWeather();
    }
}
