// WorldEventsSystem.ts
// HEAR YE HEAR YE. random dramatic world events that fire every couple minutes
// blood moon, cat stampede, divine intervention, treasure rain, void eruption
// all deeply unnecessary. all deeply mandatory. -- medieval knight dev

import * as THREE from 'three';

export type WorldEventType =
    | 'blood_moon'
    | 'cat_stampede'
    | 'divine_intervention'
    | 'treasure_rain'
    | 'void_eruption'
    | 'mass_domain_expansion'
    | 'cat_parade'
    | 'meteor_barrage';

interface FallingTreasure {
    mesh: THREE.Mesh;
    vel: THREE.Vector3;
    life: number;
    lootType: string;
}

export class WorldEventsSystem {
    private scene: THREE.Scene;
    private eventTimer: number = 0;
    private eventCooldown: number = 45 + Math.random() * 90; // seconds between events
    private activeEvent: WorldEventType | null = null;
    private eventDuration: number = 0;

    // treasure rain meshes -- need cleanup after event
    private treasures: FallingTreasure[] = [];
    private treasureSpawnTimer: number = 0;

    // flash overlay for blood moon / divine intervention
    private flashOverlay: HTMLElement | null = null;

    public onEventStart: ((type: WorldEventType, message: string) => void) | null = null;
    public onEventEnd: ((type: WorldEventType) => void) | null = null;
    // called when treasure lands -- give the item to player
    public onTreasureLanded: ((lootType: string, pos: THREE.Vector3) => void) | null = null;
    // called for stampede -- spawn N cats fast
    public onStampedeRequested: ((count: number) => void) | null = null;
    // called for divine intervention -- heal player to full
    public onDivineIntervention: (() => void) | null = null;
    // called for void eruption -- damage all NPCs
    public onVoidEruption: ((damage: number, radius: number) => void) | null = null;
    // called for mass domain -- trigger domains on random NPCs
    public onMassDomainExpansion: (() => void) | null = null;

    // player position for event targeting
    public playerPos: THREE.Vector3 = new THREE.Vector3();

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.flashOverlay = document.getElementById('flash-overlay');
        // first event fires sooner than default
        this.eventCooldown = 30 + Math.random() * 60;
    }

    public update(deltaTime: number, playerPosition: THREE.Vector3): void {
        this.playerPos.copy(playerPosition);

        // count down to next event
        if (!this.activeEvent) {
            this.eventTimer += deltaTime;
            if (this.eventTimer >= this.eventCooldown) {
                this.triggerRandomEvent();
                this.eventTimer = 0;
                this.eventCooldown = 45 + Math.random() * 120;
            }
        } else {
            // run active event
            this.eventDuration -= deltaTime;
            this.updateActiveEvent(deltaTime);
            if (this.eventDuration <= 0) {
                this.endEvent();
            }
        }

        // update falling treasures regardless of current event
        this.updateTreasures(deltaTime);
    }

    private triggerRandomEvent(): void {
        // each event has weighted probability -- some are rarer than others
        const events: [WorldEventType, number][] = [
            ['treasure_rain',        25],  // common, fun loot
            ['cat_parade',           20],  // common, chaotic
            ['divine_intervention',  15],  // helpful, rarer
            ['blood_moon',           15],  // dangerous
            ['cat_stampede',         10],  // dangerous chaos
            ['void_eruption',        8],   // big AoE damage reward
            ['mass_domain_expansion',5],   // terrifying, rare
            ['meteor_barrage',       2],   // super rare, extreme
        ];

        // weighted random pick -- i refuse to use a library for this
        const totalWeight = events.reduce((sum, [, w]) => sum + w, 0);
        let roll = Math.random() * totalWeight;
        let chosen: WorldEventType = 'treasure_rain';
        for (const [type, weight] of events) {
            roll -= weight;
            if (roll <= 0) { chosen = type; break; }
        }

        this.startEvent(chosen);
    }

    private startEvent(type: WorldEventType): void {
        this.activeEvent = type;

        switch (type) {
            case 'blood_moon':
                this.eventDuration = 40;
                this.flashScreen('#ff000044', 400);
                this.onEventStart?.(type, '🌕 BLOOD MOON RISES. All NPCs are stronger. Significantly. Sorry.');
                break;

            case 'cat_stampede':
                this.eventDuration = 25;
                this.onEventStart?.(type, '🐱 CAT STAMPEDE. 15 cats spawning. All running. At you.');
                this.onStampedeRequested?.(15);
                setTimeout(() => this.onStampedeRequested?.(10), 5000); // second wave
                break;

            case 'divine_intervention':
                this.eventDuration = 5;
                this.flashScreen('#ffffff88', 600);
                this.onEventStart?.(type, '✨ DIVINE INTERVENTION. The Cat God smiles. You are healed fully.');
                this.onDivineIntervention?.();
                console.log('%c✨ DIVINE INTERVENTION!! full heal!! the cat god is generous today!!', 'color: gold; font-size: 18px');
                break;

            case 'treasure_rain':
                this.eventDuration = 20;
                this.treasureSpawnTimer = 0;
                this.onEventStart?.(type, '🎁 TREASURE RAIN. Items falling from the sky. Catch them!');
                console.log('%c🎁 TREASURE RAIN!!! ITEMS!! FROM THE SKY!! BELIEVE IT!!', 'color: cyan; font-size: 16px');
                break;

            case 'void_eruption':
                this.eventDuration = 8;
                this.flashScreen('#4400aa44', 300);
                this.onEventStart?.(type, '🌀 VOID ERUPTION. The void explodes outward. NPCs nearby take heavy damage.');
                this.onVoidEruption?.(60, 30);
                console.log('%c🌀 VOID ERUPTION!! 60 AoE damage 30u radius!! yikes for them not us', 'color: purple; font-size: 16px');
                break;

            case 'mass_domain_expansion':
                this.eventDuration = 15;
                this.flashScreen('#00008844', 500);
                this.onEventStart?.(type, '⚡ MASS DOMAIN EXPANSION. Multiple NPCs activating domains simultaneously.');
                this.onMassDomainExpansion?.();
                console.log('%cGOGOGOGO!! MASS DOMAIN EXPANSION!! everyone at once!! maximum chaos', 'color: #4488ff; font-size: 16px');
                break;

            case 'cat_parade':
                this.eventDuration = 30;
                this.onEventStart?.(type, '🎉 CAT PARADE. 20 cats joining the world. They brought hats.');
                this.onStampedeRequested?.(20);
                console.log('%c🎉 CAT PARADE!!! 20 new cats!! they are all very serious about this', 'color: pink; font-size: 16px');
                break;

            case 'meteor_barrage':
                this.eventDuration = 30;
                this.flashScreen('#ff440044', 800);
                this.onEventStart?.(type, '☄️ METEOR BARRAGE. A lot of meteors. Point the sky at someone else.');
                this.treasureSpawnTimer = 0; // reuse timer for meteor spawn
                console.log('%c☄️ METEOR BARRAGE!!! THIS IS A LOT OF METEORS!! EXTREME RARITY!!', 'color: red; font-size: 20px; font-weight: bold');
                break;
        }
    }

    private updateActiveEvent(deltaTime: number): void {
        if (this.activeEvent === 'treasure_rain') {
            this.treasureSpawnTimer -= deltaTime;
            if (this.treasureSpawnTimer <= 0) {
                this.spawnTreasure();
                this.treasureSpawnTimer = 0.8 + Math.random() * 0.8;
            }
        }

        if (this.activeEvent === 'meteor_barrage') {
            this.treasureSpawnTimer -= deltaTime;
            if (this.treasureSpawnTimer <= 0) {
                this.spawnDecorativeMeteor();
                this.treasureSpawnTimer = 0.4 + Math.random() * 0.6;
            }
        }
    }

    private spawnTreasure(): void {
        const lootTypes = [
            'fish', 'catnip', 'potion', 'mega_potion', 'bomb',
            'lightning', 'void_shard', 'star_piece', 'sword',
            'dragon_scale', 'chaos_orb', 'thunder_staff', 'berserker_potion',
        ];
        const lootType = lootTypes[Math.floor(Math.random() * lootTypes.length)];

        // spawn above player with offset
        const offset = new THREE.Vector3(
            (Math.random() - 0.5) * 30,
            80 + Math.random() * 30,
            (Math.random() - 0.5) * 30,
        );

        const geo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const mat = new THREE.MeshLambertMaterial({ color: 0xffd700, emissive: 0x664400 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.copy(this.playerPos).add(offset);
        this.scene.add(mesh);

        this.treasures.push({
            mesh,
            vel: new THREE.Vector3(
                (Math.random() - 0.5) * 5,
                -25 - Math.random() * 10,
                (Math.random() - 0.5) * 5,
            ),
            life: 6,
            lootType,
        });
    }

    private spawnDecorativeMeteor(): void {
        // visual only -- same as weather system meteors but spawned from here
        const geo = new THREE.SphereGeometry(0.6 + Math.random() * 0.4, 5, 4);
        const mat = new THREE.MeshPhongMaterial({ color: 0xff3300, emissive: 0xcc2200, emissiveIntensity: 2 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(
            this.playerPos.x + (Math.random() - 0.5) * 200,
            100 + Math.random() * 40,
            this.playerPos.z + (Math.random() - 0.5) * 200,
        );
        const vel = new THREE.Vector3((Math.random() - 0.5) * 20, -55 - Math.random() * 20, (Math.random() - 0.5) * 20);
        // add as a short-lived treasure with no loot so it gets cleaned up
        this.treasures.push({ mesh, vel, life: 2.5, lootType: '' });
        this.scene.add(mesh);
    }

    private updateTreasures(deltaTime: number): void {
        for (let i = this.treasures.length - 1; i >= 0; i--) {
            const t = this.treasures[i];
            t.life -= deltaTime;
            t.mesh.position.addScaledVector(t.vel, deltaTime);
            t.mesh.rotation.y += 2 * deltaTime;

            // landed (roughly ground level)
            if (t.mesh.position.y <= 1.0 && t.lootType !== '') {
                this.onTreasureLanded?.(t.lootType, t.mesh.position.clone());
                this.scene.remove(t.mesh);
                this.treasures.splice(i, 1);
                continue;
            }

            if (t.life <= 0 || t.mesh.position.y < -5) {
                this.scene.remove(t.mesh);
                this.treasures.splice(i, 1);
            }
        }
    }

    private endEvent(): void {
        const ended = this.activeEvent!;
        console.log(`%c💨 World event "${ended}" fizzled out`, 'color: gray');
        this.onEventEnd?.(ended);
        this.activeEvent = null;
        this.eventDuration = 0;

        // clean up any leftover treasures from this event
        for (const t of this.treasures) this.scene.remove(t.mesh);
        this.treasures = [];
    }

    private flashScreen(colorHex: string, durationMs: number): void {
        if (!this.flashOverlay) {
            // create it on the fly if it doesn't exist in DOM yet
            const el = document.createElement('div');
            el.id = 'flash-overlay';
            el.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:200;transition:opacity 0.3s ease;opacity:0;';
            document.body.appendChild(el);
            this.flashOverlay = el;
        }
        this.flashOverlay.style.background = colorHex;
        this.flashOverlay.style.opacity = '1';
        setTimeout(() => {
            if (this.flashOverlay) this.flashOverlay.style.opacity = '0';
        }, durationMs);
    }

    public getActiveEvent(): WorldEventType | null {
        return this.activeEvent;
    }

    public forceEvent(type: WorldEventType): void {
        // debug helper, call from console: game.worldEvents.forceEvent('treasure_rain')
        if (this.activeEvent) this.endEvent();
        this.startEvent(type);
    }

    public dispose(): void {
        for (const t of this.treasures) this.scene.remove(t.mesh);
        this.treasures = [];
    }
}
