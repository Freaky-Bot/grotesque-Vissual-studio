import * as THREE from 'three';

export enum WeatherType {
    CLEAR = 'clear',
    RAIN = 'rain',
    FOG = 'foggy',
    METEOR_SHOWER = 'meteor shower',
    // nyaa~ 3 new weather types because the sky was too boring meow UwU 💕
    BLOOD_MOON = 'blood moon',
    BLIZZARD = 'blizzard',
    VOID_STORM = 'void storm',
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
    private blizzardPoints: THREE.Points | null = null;
    private voidParticles: THREE.Points | null = null;
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

        // blizzard -- falls forward and down slightly
        if (this.currentWeather === WeatherType.BLIZZARD && this.blizzardPoints) {
            const pos = this.blizzardPoints.geometry.attributes['position'];
            const arr = pos.array as Float32Array;
            for (let i = 0; i < arr.length; i += 3) {
                arr[i + 1] -= 40 * deltaTime;
                arr[i]     += 15 * deltaTime; // drift
                if (arr[i + 1] < 0) arr[i + 1] = 100 + Math.random() * 30;
                if (arr[i] > 200) arr[i] -= 400;
            }
            pos.needsUpdate = true;
        }

        // void storm -- swirling chaos particles, very dramatic
        if (this.currentWeather === WeatherType.VOID_STORM && this.voidParticles) {
            const pos = this.voidParticles.geometry.attributes['position'];
            const arr = pos.array as Float32Array;
            const t = Date.now() * 0.001;
            for (let i = 0; i < arr.length; i += 3) {
                arr[i]     += Math.sin(t + i) * 0.5;
                arr[i + 1] += Math.cos(t + i * 0.7) * 0.3;
                arr[i + 2] += Math.sin(t * 1.3 + i) * 0.5;
                // keep in bounds
                if (arr[i] > 200) arr[i] = -200;
                if (arr[i] < -200) arr[i] = 200;
                if (arr[i + 1] > 100) arr[i + 1] = 0;
                if (arr[i + 1] < -5) arr[i + 1] = 80;
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
        if (roll < 0.28) {
            this.currentWeather = WeatherType.CLEAR;
        } else if (roll < 0.50) {
            this.currentWeather = WeatherType.RAIN;
            this.startRain();
        } else if (roll < 0.65) {
            this.currentWeather = WeatherType.FOG;
            this.startFog();
        } else if (roll < 0.77) {
            this.currentWeather = WeatherType.METEOR_SHOWER;
            this.startMeteors();
        } else if (roll < 0.87) {
            this.currentWeather = WeatherType.BLOOD_MOON;
            this.startBloodMoon();
        } else if (roll < 0.94) {
            this.currentWeather = WeatherType.BLIZZARD;
            this.startBlizzard();
        } else {
            this.currentWeather = WeatherType.VOID_STORM;
            this.startVoidStorm();
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
        if (this.blizzardPoints) {
            this.scene.remove(this.blizzardPoints);
            this.blizzardPoints.geometry.dispose();
            this.blizzardPoints = null;
        }
        if (this.voidParticles) {
            this.scene.remove(this.voidParticles);
            this.voidParticles.geometry.dispose();
            this.voidParticles = null;
        }
        for (const m of this.meteors) this.scene.remove(m.mesh);
        this.meteors = [];
        this.scene.fog = null;
        if (this.ambientLight) {
            this.ambientLight.intensity = 0.6;
            this.ambientLight.color.setHex(0xffffff); // reset blood moon red tint
        }
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

    private startBloodMoon(): void {
        // red ambient light, blood red fog -- very spooky, NPCs get terrifying
        if (this.ambientLight) {
            this.ambientLight.intensity = 0.9;
            this.ambientLight.color.setHex(0xff2200);
        }
        this.scene.fog = new THREE.Fog(0x330000, 30, 150);
        console.log('%c🌕 BLOOD MOON. ALL CATS BUFFED. GOOD LUCK.', 'color: red; font-size: 16px; font-weight: bold');
    }

    private startBlizzard(): void {
        // heavy falling snow particles + blue tint + poor visibility
        const count = 4000;
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i += 3) {
            positions[i]     = (Math.random() - 0.5) * 400;
            positions[i + 1] = Math.random() * 100;
            positions[i + 2] = (Math.random() - 0.5) * 400;
        }
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const mat = new THREE.PointsMaterial({ color: 0xaaddff, size: 0.25, transparent: true, opacity: 0.8 });
        this.blizzardPoints = new THREE.Points(geo, mat);
        this.scene.add(this.blizzardPoints);
        this.scene.fog = new THREE.Fog(0x99bbcc, 20, 90);
        if (this.ambientLight) {
            this.ambientLight.intensity = 0.25;
            this.ambientLight.color.setHex(0x8899ff);
        }
        console.log('%c❄️ BLIZZARD. I CANNOT SEE ANYTHING. PERFECT.', 'color: lightblue; font-size: 14px');
    }

    private startVoidStorm(): void {
        // swirling purple/black chaos particles everywhere, maximum disorientation
        const count = 2500;
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i += 3) {
            positions[i]     = (Math.random() - 0.5) * 400;
            positions[i + 1] = Math.random() * 80;
            positions[i + 2] = (Math.random() - 0.5) * 400;
        }
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const mat = new THREE.PointsMaterial({ color: 0x8800ff, size: 0.4, transparent: true, opacity: 0.65 });
        this.voidParticles = new THREE.Points(geo, mat);
        this.scene.add(this.voidParticles);
        this.scene.fog = new THREE.FogExp2(0x110022, 0.02);
        if (this.ambientLight) {
            this.ambientLight.intensity = 0.2;
            this.ambientLight.color.setHex(0x440088);
        }
        console.log('%c🌀 VOID STORM. REALITY IS OPTIONAL NOW.', 'color: purple; font-size: 15px; font-weight: bold');
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
        return this.currentWeather === WeatherType.RAIN
            || this.currentWeather === WeatherType.METEOR_SHOWER
            || this.currentWeather === WeatherType.BLIZZARD
            || this.currentWeather === WeatherType.VOID_STORM;
    }

    // blood moon = all NPCs get a flat damage buff, check from outside
    public isBloodMoon(): boolean {
        return this.currentWeather === WeatherType.BLOOD_MOON;
    }

    public dispose(): void {
        this.clearWeather();
    }
}
