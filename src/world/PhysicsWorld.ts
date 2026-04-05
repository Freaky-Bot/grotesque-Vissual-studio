import * as CANNON from 'cannon-es';
import * as THREE from 'three';

// Physics wrapper for the game world
export class PhysicsWorld {
    private world: CANNON.World;
    private bodies: Map<THREE.Object3D, CANNON.Body> = new Map();

    constructor() {
        this.world = new CANNON.World();
        this.world.gravity.set(0, -9.82, 0);
        this.world.defaultContactMaterial.friction = 0.4;
    }

    public addBody(mesh: THREE.Object3D, position: CANNON.Vec3, shape: CANNON.Shape, mass: number = 1): CANNON.Body {
        const body = new CANNON.Body({ mass, shape });
        body.position.copy(position);
        this.world.addBody(body);
        this.bodies.set(mesh, body);
        return body;
    }

    public addGround(_width: number, _depth: number): void {
        const groundShape = new CANNON.Plane();
        const groundBody = new CANNON.Body({ mass: 0, shape: groundShape });
        groundBody.position.y = -0.1;
        this.world.addBody(groundBody);
    }

    public getBody(mesh: THREE.Object3D): CANNON.Body | undefined {
        return this.bodies.get(mesh);
    }

    public update(deltaTime: number): void {
        this.world.step(1 / 60, deltaTime, 3);

        // Sync Three.js meshes with physics bodies
        this.bodies.forEach((body, mesh) => {
            mesh.position.copy(body.position as any);
            mesh.quaternion.copy(body.quaternion as any);
        });
    }

    public getWorld(): CANNON.World {
        return this.world;
    }

    public applyForce(mesh: THREE.Object3D, force: THREE.Vector3): void {
        const body = this.bodies.get(mesh);
        if (body) {
            body.applyForce(
                new CANNON.Vec3(force.x, force.y, force.z),
                body.position
            );
        }
    }

    public applyImpulse(mesh: THREE.Object3D, impulse: THREE.Vector3): void {
        const body = this.bodies.get(mesh);
        if (body) {
            body.applyImpulse(
                new CANNON.Vec3(impulse.x, impulse.y, impulse.z),
                body.position
            );
        }
    }
}
