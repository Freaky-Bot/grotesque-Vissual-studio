import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

export class HybridOffspring extends BaseNPC {
    private age: number = 0;
    private maxAge: number = 60; // 60 seconds lifespan
    private speed: number = 3;

    constructor(position: THREE.Vector3) {
        super(position);
        this.mesh = this.createHybridMesh();
        this.mesh.position.copy(this.position);

        this.dialogues = [
            "I am the child of worlds!",
            "Sage and Cat God blend within me",
            "I am chaos and order",
            "nyaaa~ *ethereal meow*",
            "I drift between dimensions",
            "Born of dream and divinity",
            "GURETO DAZE! I am born perfect!",
            "YARE YARE... I inherited both their powers",
            "Your next line is: 'What is this hybrid?'",
            "I have my father's stand... MEOW EXPERIENCE!",
            "WRYYYYYYY! I am alive!",
            "NIGERUNDAYO from expectation!",
            "I am... STONE FREE SAGE CAT!",
            "TORTURE DANCE... no TORTURE PURR!",
            "*ゴゴゴ menacing hybrid energy ゴゴゴ*",
            "Both timelines... MERGED! JOTARO WOULD BE PROUD!",
            "I am the will of both! UNLIMITED MEOW WORKS!",
            "MUDA MUDA! I'm useless... or am I?",
            "ORA ORA ORA ORA! Watch my baby fists!",
            "HNNNNNG! I'm just a baby hybrid!!!"
        ];
    }

    private createHybridMesh(): THREE.Group {
        const group = new THREE.Group();

        // Half cat, half sage design
        // Sage side (left) - ethereal purple
        const sageHalfGeo = new THREE.SphereGeometry(0.5, 16, 16);
        const sageMat = new THREE.MeshBasicMaterial({ color: 0x8844ff });
        const sageHalf = new THREE.Mesh(sageHalfGeo, sageMat);
        sageHalf.position.x = -0.4;
        group.add(sageHalf);

        // Cat side (right) - orange tabby
        const catHalfGeo = new THREE.SphereGeometry(0.5, 16, 16);
        const catMat = new THREE.MeshStandardMaterial({ color: 0xff8844 });
        const catHalf = new THREE.Mesh(catHalfGeo, catMat);
        catHalf.position.x = 0.4;
        group.add(catHalf);

        // Center core - merged essence
        const coreGeo = new THREE.SphereGeometry(0.3, 16, 16);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
        const core = new THREE.Mesh(coreGeo, coreMat);
        group.add(core);

        // Eyes - one yellow (sage), one black (cat)
        const eyeGeo = new THREE.SphereGeometry(0.1, 8, 8);
        
        const sageEye = new THREE.Mesh(eyeGeo, new THREE.MeshBasicMaterial({ color: 0xffff00 }));
        sageEye.position.set(-0.4, 0.2, 0.4);
        group.add(sageEye);

        const catEye = new THREE.Mesh(eyeGeo, new THREE.MeshBasicMaterial({ color: 0x000000 }));
        catEye.position.set(0.4, 0.2, 0.4);
        group.add(catEye);

        return group;
    }

    public update(deltaTime: number): void {
        this.age += deltaTime;

        // Random walk
        this.randomWalk(deltaTime, this.speed);

        // Occasionally speak
        if (Math.random() < 0.001) {
            this.speak();
        }

        // Fade out as it ages
        const fadeStart = this.maxAge * 0.75;
        if (this.age > fadeStart) {
            const fadeProgress = (this.age - fadeStart) / (this.maxAge - fadeStart);
            this.mesh.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
                    (child.material as any).opacity = 1 - fadeProgress;
                }
            });
        }

        // Die after max age
        if (this.age > this.maxAge) {
            this.die();
        }
    }

    public getType(): string {
        return 'hybrid';
    }
}
