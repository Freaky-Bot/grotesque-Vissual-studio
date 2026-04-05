// PARTICLE EFFECT SYSTEM
// aka: "i heard you like particles so i made particles" - Xzibit
// THIS CODE IS A DISASTER BUT IT WORKS SOMEHOW

import * as THREE from 'three';

export class ParticleSystem {
    private particles: THREE.Points[] = [];
    private scene: THREE.Scene;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
    }

    // EXPLODE!!!
    public createExplosion(position: THREE.Vector3, color: number = 0xffaa00, count: number = 20): void {
        const geometry = new THREE.BufferGeometry();
        const positions = [];

        // YEET particles everywhere lmao
        for (let i = 0; i < count; i++) {
            positions.push(position.x, position.y, position.z);
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
        
        const material = new THREE.PointsMaterial({
            color: color,
            size: 0.5,
            sizeAttenuation: true
        });

        const particles = new THREE.Points(geometry, material);
        this.scene.add(particles);
        this.particles.push(particles);

        // delete it after a bit
        setTimeout(() => {
            this.scene.remove(particles);
            const idx = this.particles.indexOf(particles);
            if (idx > -1) this.particles.splice(idx, 1);
        }, 1000);
    }

    // sparkles n shine uwu
    public createSparkles(position: THREE.Vector3, duration: number = 2): void {
        const geometry = new THREE.BufferGeometry();
        const posArray = new Float32Array(90); // 30 particles * 3 coords

        for (let i = 0; i < 30; i++) {
            posArray[i * 3] = position.x + (Math.random() - 0.5) * 2;
            posArray[i * 3 + 1] = position.y + (Math.random() - 0.5) * 2;
            posArray[i * 3 + 2] = position.z + (Math.random() - 0.5) * 2;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const colors = [0xff00ff, 0xffff00, 0x00ffff, 0xff0080];
        const material = new THREE.PointsMaterial({
            color: colors[Math.floor(Math.random() * colors.length)],
            size: 0.3,
            transparent: true,
            opacity: 0.8
        });

        const sparkles = new THREE.Points(geometry, material);
        this.scene.add(sparkles);

        // fade out n disappear
        let elapsed = 0;
        const fadeOut = () => {
            elapsed += 0.016;
            if (elapsed < duration) {
                material.opacity = 0.8 * (1 - elapsed / duration);
                requestAnimationFrame(fadeOut);
            } else {
                this.scene.remove(sparkles);
            }
        };
        fadeOut();
    }

    // just... chaos particles
    public createChaos(position: THREE.Vector3, intensity: number = 1): void {
        // no rules here baby
        for (let i = 0; i < 5 * intensity; i++) {
            const randomColor = Math.floor(Math.random() * 16777215);
            this.createExplosion(
                new THREE.Vector3(
                    position.x + (Math.random() - 0.5) * 5,
                    position.y + (Math.random() - 0.5) * 5,
                    position.z + (Math.random() - 0.5) * 5
                ),
                randomColor,
                Math.random() * 30
            );
        }
    }

    public update(_deltaTime: number): void {
        // TODO: animate particles??? 
        // nah we live dangerously
    }

    public cleanup(): void {
        // yeet all particles
        for (const particle of this.particles) {
            this.scene.remove(particle);
        }
        this.particles = [];
    }
}
