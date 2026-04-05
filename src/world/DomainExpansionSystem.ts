// DomainExpansionSystem.ts
// DOMAIN EXPANSION!! exactly like in the show -- an enclosed reality manifested from the soul.
// inside ur domain ur cursed technique is guaranteed to hit. 100%. automatic. no dodging.
// ngl this is the coolest thing in this codebase and nobody will appreciate it. whatever.

import * as THREE from 'three';

export interface DomainDef {
    name: string;           // e.g. "Unlimited Void"
    npcType: string;        // which npc type uses this
    flavorText: string;     // the announcement text
    radius: number;         // how big the domain sphere is
    domainColor: number;    // hex color of the sphere backdrop
    fogColor: number;       // fog inside the domain
    damage: number;         // DPS inside the domain to the player
    stunPulse: number;      // stun duration applied every 2s to player
    healPerSec: number;     // NPC heals this much HP/s while domain is active
    duration: number;       // seconds the domain lasts
    guaranteedHit: boolean; // if true, NPC attacks inside domain never miss (double damage)
}

export const DOMAIN_DEFS: Record<string, DomainDef> = {
    // ----- standard cat subtypes -----
    normal:   {
        name: 'Infinite Meow',
        npcType: 'normal', flavorText: 'meow... MEOW!! THE MEOWING NEVER ENDS!!',
        radius: 30, domainColor: 0xff8800, fogColor: 0xff6600,
        damage: 5, stunPulse: 1.5, healPerSec: 3, duration: 12, guaranteedHit: true,
    },
    jesus:    {
        name: 'Divine Purification',
        npcType: 'jesus', flavorText: 'FORGIVE THEM FOR THEY KNOW NOT WHAT THEY DO',
        radius: 28, domainColor: 0xffeeaa, fogColor: 0xffffcc,
        damage: 8, stunPulse: 0, healPerSec: 15, duration: 14, guaranteedHit: true,
    },
    robot:    {
        name: 'Infinite Processing Loop',
        npcType: 'robot', flavorText: 'CALCULATING... CALCULATING... CALCULATING...',
        radius: 25, domainColor: 0x00ffcc, fogColor: 0x003322,
        damage: 12, stunPulse: 0, healPerSec: 5, duration: 10, guaranteedHit: true,
    },
    orb:      {
        name: 'Omniscient Spherical Truth',
        npcType: 'orb', flavorText: 'THE ORB KNOWS ALL. THE ORB SEES ALL.',
        radius: 35, domainColor: 0xcc00ff, fogColor: 0x220044,
        damage: 7, stunPulse: 2, healPerSec: 2, duration: 15, guaranteedHit: true,
    },
    angel:    {
        name: 'Paradise of Feathers',
        npcType: 'angel', flavorText: 'THIS WORLD IS MINE. YOU CANNOT ESCAPE DIVINITY.',
        radius: 32, domainColor: 0xeeeeff, fogColor: 0xccddff,
        damage: 6, stunPulse: 1, healPerSec: 20, duration: 13, guaranteedHit: true,
    },
    pirate:   {
        name: 'Davy Jones\' Locker',
        npcType: 'pirate', flavorText: 'YARR!! WELCOME TO THE BOTTOM OF THE SEA!!',
        radius: 28, domainColor: 0x004488, fogColor: 0x002244,
        damage: 14, stunPulse: 2, healPerSec: 4, duration: 11, guaranteedHit: true,
    },
    wizard:   {
        name: 'Infinite Magic Loop',
        npcType: 'wizard', flavorText: 'REALITY IS JUST A SPELL THAT HASN\'T EXPIRED YET',
        radius: 30, domainColor: 0x8800ff, fogColor: 0x220033,
        damage: 10, stunPulse: 1.5, healPerSec: 6, duration: 12, guaranteedHit: true,
    },
    vampire:  {
        name: 'Blood Moon Palace',
        npcType: 'vampire', flavorText: 'YOUR BLOOD IS THE PRICE OF ENTRY.',
        radius: 26, domainColor: 0xcc0022, fogColor: 0x440011,
        damage: 18, stunPulse: 0, healPerSec: 18, duration: 10, guaranteedHit: true,
    },
    disco:    {
        name: 'Infinite Groove',
        npcType: 'disco', flavorText: 'YOU CANNOT LEAVE THE DANCE FLOOR. NOBODY LEAVES.',
        radius: 30, domainColor: 0xff00ff, fogColor: 0x440044,
        damage: 5, stunPulse: 3, healPerSec: 3, duration: 14, guaranteedHit: true,
    },
    shadow:   {
        name: 'Coffin of the Iron Mountain',
        npcType: 'shadow', flavorText: 'ALL PATHS LEAD TO DARKNESS. ALL FUTURES ERASED.',
        radius: 28, domainColor: 0x111111, fogColor: 0x000000,
        damage: 22, stunPulse: 1, healPerSec: 5, duration: 11, guaranteedHit: true,
    },
    // ----- special npcs -----
    barney:   {
        name: 'Boundless Love Experience',
        npcType: 'barney', flavorText: 'I LOVE YOU, YOU LOVE ME, YOU CANNOT LEAVE THIS PLACE',
        radius: 40, domainColor: 0x6B2FA0, fogColor: 0x3d1a60,
        damage: 3, stunPulse: 4, healPerSec: 25, duration: 20, guaranteedHit: false,
    },
    emo:      {
        name: 'Hollow Purple Despair',
        npcType: 'emo', flavorText: 'nobody understands me. especially not you. especially not here.',
        radius: 30, domainColor: 0x110022, fogColor: 0x060010,
        damage: 20, stunPulse: 2, healPerSec: 8, duration: 13, guaranteedHit: true,
    },
    shrek:    {
        name: 'Swamp of Eternal Despair',
        npcType: 'shrek', flavorText: 'THIS IS MY SWAMP. THIS HAS ALWAYS BEEN MY SWAMP.',
        radius: 38, domainColor: 0x336600, fogColor: 0x1a3300,
        damage: 15, stunPulse: 0, healPerSec: 10, duration: 16, guaranteedHit: true,
    },
    buffcat:  {
        name: 'Iron Body Infinite Circuit',
        npcType: 'buffcat', flavorText: 'DO YOU EVEN LIFT? INSIDE MY DOMAIN, YOU CANNOT.',
        radius: 25, domainColor: 0xff6600, fogColor: 0x330d00,
        damage: 25, stunPulse: 0, healPerSec: 12, duration: 10, guaranteedHit: true,
    },
    voidcat:  {
        name: 'Infinite Darkness Eternal',
        npcType: 'voidcat', flavorText: 'you were always in the dark. you just never noticed.',
        radius: 35, domainColor: 0x110011, fogColor: 0x000000,
        damage: 16, stunPulse: 2.5, healPerSec: 6, duration: 14, guaranteedHit: true,
    },
    hybrid:   {
        name: 'Chaotic Soul Fusion',
        npcType: 'hybrid', flavorText: 'WHAT AM I? WHAT ARE YOU? WHAT IS ANY OF THIS??',
        radius: 28, domainColor: 0xff44ff, fogColor: 0x220022,
        damage: 12, stunPulse: 1, healPerSec: 5, duration: 11, guaranteedHit: true,
    },
};

export interface ActiveDomain {
    npc: { getPosition(): THREE.Vector3; takeDamage(d: number): void; getType(): string; hp: number; maxHp: number; };
    def: DomainDef;
    timeRemaining: number;
    stunPulseTimer: number;
    sphere: THREE.Mesh;
    light: THREE.PointLight;
    savedFog: THREE.Fog | THREE.FogExp2 | null;
    savedBg: THREE.Color | THREE.Texture | null;
}

export class DomainExpansionSystem {
    private scene: THREE.Scene;
    public activeDomains: ActiveDomain[] = [];
    public onDomainOpen: ((name: string, flavor: string) => void) | null = null;
    public onDomainClose: ((name: string) => void) | null = null;

    // idk if more than one domain active at once is legal in jjk but this is a cat game so. yolo.
    private readonly MAX_CONCURRENT = 2;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
    }

    public openDomain(
        npc: ActiveDomain['npc'],
        defKey: string,
    ): void {
        if (this.activeDomains.length >= this.MAX_CONCURRENT) return;
        const def = DOMAIN_DEFS[defKey] ?? DOMAIN_DEFS['normal'];

        // big translucent sphere -- the domain boundary
        const geo = new THREE.SphereGeometry(def.radius, 32, 32);
        const mat = new THREE.MeshBasicMaterial({
            color: def.domainColor,
            transparent: true,
            opacity: 0.18,
            side: THREE.BackSide, // only visible from inside uwu
            depthWrite: false,
        });
        const sphere = new THREE.Mesh(geo, mat);
        const pos = npc.getPosition();
        sphere.position.set(pos.x, 0, pos.z);
        this.scene.add(sphere);

        // creepy point light in the center
        const light = new THREE.PointLight(def.domainColor, 3.5, def.radius * 1.8);
        light.position.set(pos.x, 5, pos.z);
        this.scene.add(light);

        const domain: ActiveDomain = {
            npc, def,
            timeRemaining: def.duration,
            stunPulseTimer: def.stunPulse,
            sphere, light,
            savedFog: this.scene.fog ?? null,
            savedBg: this.scene.background as (THREE.Color | null),
        };

        // alter scene fog to domain fog -- immersive as heck
        this.scene.fog = new THREE.FogExp2(def.fogColor, 0.022);

        this.activeDomains.push(domain);
        this.onDomainOpen?.(def.name, def.flavorText);
        console.log(`%c⚡ DOMAIN EXPANSION: ${def.name.toUpperCase()} ⚡`, 'color: #ff00ff; font-size: 20px; font-weight: bold;');
    }

    public update(
        deltaTime: number,
        playerPos: THREE.Vector3,
        onPlayerDamage: (d: number) => void,
        onPlayerStun: () => void,
    ): void {
        for (let i = this.activeDomains.length - 1; i >= 0; i--) {
            const d = this.activeDomains[i];
            d.timeRemaining -= deltaTime;

            // move sphere with the npc
            const npcPos = d.npc.getPosition();
            d.sphere.position.set(npcPos.x, 0, npcPos.z);
            d.light.position.set(npcPos.x, 5, npcPos.z);

            // pulsing opacity -- very dramatic
            (d.sphere.material as THREE.MeshBasicMaterial).opacity =
                0.12 + Math.sin(Date.now() * 0.003) * 0.06;

            const dist = playerPos.distanceTo(new THREE.Vector3(npcPos.x, playerPos.y, npcPos.z));
            const insideDomain = dist < d.def.radius;

            if (insideDomain) {
                // constant sure-hit damage inside the domain -- no escape
                onPlayerDamage(d.def.damage * deltaTime);

                // stun pulses
                if (d.def.stunPulse > 0) {
                    d.stunPulseTimer -= deltaTime;
                    if (d.stunPulseTimer <= 0) {
                        onPlayerStun();
                        d.stunPulseTimer = d.def.stunPulse;
                    }
                }
            }

            // npc heals inside its own domain -- tanky mode
            if (d.def.healPerSec > 0 && d.npc.hp < d.npc.maxHp) {
                d.npc.hp = Math.min(d.npc.maxHp, d.npc.hp + d.def.healPerSec * deltaTime);
            }

            // domain expires
            if (d.timeRemaining <= 0 || !d.npc.hp) {
                this.closeDomain(d, i);
            }
        }
    }

    private closeDomain(d: ActiveDomain, index: number): void {
        this.scene.remove(d.sphere);
        this.scene.remove(d.light);
        (d.sphere.material as THREE.MeshBasicMaterial).dispose();
        d.sphere.geometry.dispose();

        // restore scene fog only if no other domains are active
        if (this.activeDomains.length <= 1) {
            this.scene.fog = d.savedFog;
        }

        this.activeDomains.splice(index, 1);
        this.onDomainClose?.(d.def.name);
        console.log(`%c💀 Domain "${d.def.name}" has collapsed.`, 'color: #888; font-style: italic');
    }
    
    // check if player is inside any active domain -- for guaranteed hit multiplier
    public getGuaranteedHitMultiplier(playerPos: THREE.Vector3): number {
        for (const d of this.activeDomains) {
            if (!d.def.guaranteedHit) continue;
            const npcPos = d.npc.getPosition();
            if (playerPos.distanceTo(new THREE.Vector3(npcPos.x, playerPos.y, npcPos.z)) < d.def.radius) {
                return 2.0; // guaranteed hit = double damage inside
            }
        }
        return 1.0;
    }

    public hasActiveDomain(): boolean { return this.activeDomains.length > 0; }
}
