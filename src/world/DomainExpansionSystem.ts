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
    damage: number;         // DPS inside the domain to the player (0 for player's own domain)
    npcDamage: number;      // DPS dealt to NPCs inside (player domain only, 0 for NPC domains)
    stunPulse: number;      // stun duration applied every 2s to player
    healPerSec: number;     // NPC heals this much HP/s while domain is active
    duration: number;       // seconds the domain lasts
    guaranteedHit: boolean; // if true, NPC attacks inside domain never miss (double damage)
    isPlayerDomain: boolean;// player domains damage NPCs, NPC domains damage player
}

export const DOMAIN_DEFS: Record<string, DomainDef> = {
    // ----- standard cat subtypes -----
    normal:   {
        name: 'Infinite Meow',
        npcType: 'normal', flavorText: 'meow... MEOW!! THE MEOWING NEVER ENDS!!',
        radius: 30, domainColor: 0xff8800, fogColor: 0xff6600,
        damage: 5, npcDamage: 0, stunPulse: 1.5, healPerSec: 3, duration: 12, guaranteedHit: true, isPlayerDomain: false,
    },
    jesus:    {
        name: 'Divine Purification',
        npcType: 'jesus', flavorText: 'FORGIVE THEM FOR THEY KNOW NOT WHAT THEY DO',
        radius: 28, domainColor: 0xffeeaa, fogColor: 0xffffcc,
        damage: 8, npcDamage: 0, stunPulse: 0, healPerSec: 15, duration: 14, guaranteedHit: true, isPlayerDomain: false,
    },
    robot:    {
        name: 'Infinite Processing Loop',
        npcType: 'robot', flavorText: 'CALCULATING... CALCULATING... CALCULATING...',
        radius: 25, domainColor: 0x00ffcc, fogColor: 0x003322,
        damage: 12, npcDamage: 0, stunPulse: 0, healPerSec: 5, duration: 10, guaranteedHit: true, isPlayerDomain: false,
    },
    orb:      {
        name: 'Omniscient Spherical Truth',
        npcType: 'orb', flavorText: 'THE ORB KNOWS ALL. THE ORB SEES ALL.',
        radius: 35, domainColor: 0xcc00ff, fogColor: 0x220044,
        damage: 7, npcDamage: 0, stunPulse: 2, healPerSec: 2, duration: 15, guaranteedHit: true, isPlayerDomain: false,
    },
    angel:    {
        name: 'Paradise of Feathers',
        npcType: 'angel', flavorText: 'THIS WORLD IS MINE. YOU CANNOT ESCAPE DIVINITY.',
        radius: 32, domainColor: 0xeeeeff, fogColor: 0xccddff,
        damage: 6, npcDamage: 0, stunPulse: 1, healPerSec: 20, duration: 13, guaranteedHit: true, isPlayerDomain: false,
    },
    pirate:   {
        name: 'Davy Jones\' Locker',
        npcType: 'pirate', flavorText: 'YARR!! WELCOME TO THE BOTTOM OF THE SEA!!',
        radius: 28, domainColor: 0x004488, fogColor: 0x002244,
        damage: 14, npcDamage: 0, stunPulse: 2, healPerSec: 4, duration: 11, guaranteedHit: true, isPlayerDomain: false,
    },
    wizard:   {
        name: 'Infinite Magic Loop',
        npcType: 'wizard', flavorText: 'REALITY IS JUST A SPELL THAT HASN\'T EXPIRED YET',
        radius: 30, domainColor: 0x8800ff, fogColor: 0x220033,
        damage: 10, npcDamage: 0, stunPulse: 1.5, healPerSec: 6, duration: 12, guaranteedHit: true, isPlayerDomain: false,
    },
    vampire:  {
        name: 'Blood Moon Palace',
        npcType: 'vampire', flavorText: 'YOUR BLOOD IS THE PRICE OF ENTRY.',
        radius: 26, domainColor: 0xcc0022, fogColor: 0x440011,
        damage: 18, npcDamage: 0, stunPulse: 0, healPerSec: 18, duration: 10, guaranteedHit: true, isPlayerDomain: false,
    },
    disco:    {
        name: 'Infinite Groove',
        npcType: 'disco', flavorText: 'YOU CANNOT LEAVE THE DANCE FLOOR. NOBODY LEAVES.',
        radius: 30, domainColor: 0xff00ff, fogColor: 0x440044,
        damage: 5, npcDamage: 0, stunPulse: 3, healPerSec: 3, duration: 14, guaranteedHit: true, isPlayerDomain: false,
    },
    shadow:   {
        name: 'Coffin of the Iron Mountain',
        npcType: 'shadow', flavorText: 'ALL PATHS LEAD TO DARKNESS. ALL FUTURES ERASED.',
        radius: 28, domainColor: 0x111111, fogColor: 0x000000,
        damage: 22, npcDamage: 0, stunPulse: 1, healPerSec: 5, duration: 11, guaranteedHit: true, isPlayerDomain: false,
    },
    // ----- special npcs -----
    barney:   {
        name: 'Boundless Love Experience',
        npcType: 'barney', flavorText: 'I LOVE YOU, YOU LOVE ME, YOU CANNOT LEAVE THIS PLACE',
        radius: 40, domainColor: 0x6B2FA0, fogColor: 0x3d1a60,
        damage: 3, npcDamage: 0, stunPulse: 4, healPerSec: 25, duration: 20, guaranteedHit: false, isPlayerDomain: false,
    },
    emo:      {
        name: 'Hollow Purple Despair',
        npcType: 'emo', flavorText: 'nobody understands me. especially not you. especially not here.',
        radius: 30, domainColor: 0x110022, fogColor: 0x060010,
        damage: 20, npcDamage: 0, stunPulse: 2, healPerSec: 8, duration: 13, guaranteedHit: true, isPlayerDomain: false,
    },
    shrek:    {
        name: 'Swamp of Eternal Despair',
        npcType: 'shrek', flavorText: 'THIS IS MY SWAMP. THIS HAS ALWAYS BEEN MY SWAMP.',
        radius: 38, domainColor: 0x336600, fogColor: 0x1a3300,
        damage: 15, npcDamage: 0, stunPulse: 0, healPerSec: 10, duration: 16, guaranteedHit: true, isPlayerDomain: false,
    },
    buffcat:  {
        name: 'Iron Body Infinite Circuit',
        npcType: 'buffcat', flavorText: 'DO YOU EVEN LIFT? INSIDE MY DOMAIN, YOU CANNOT.',
        radius: 25, domainColor: 0xff6600, fogColor: 0x330d00,
        damage: 25, npcDamage: 0, stunPulse: 0, healPerSec: 12, duration: 10, guaranteedHit: true, isPlayerDomain: false,
    },
    voidcat:  {
        name: 'Infinite Darkness Eternal',
        npcType: 'voidcat', flavorText: 'you were always in the dark. you just never noticed.',
        radius: 35, domainColor: 0x110011, fogColor: 0x000000,
        damage: 16, npcDamage: 0, stunPulse: 2.5, healPerSec: 6, duration: 14, guaranteedHit: true, isPlayerDomain: false,
    },
    hybrid:   {
        name: 'Chaotic Soul Fusion',
        npcType: 'hybrid', flavorText: 'WHAT AM I? WHAT ARE YOU? WHAT IS ANY OF THIS??',
        radius: 28, domainColor: 0xff44ff, fogColor: 0x220022,
        damage: 12, npcDamage: 0, stunPulse: 1, healPerSec: 5, duration: 11, guaranteedHit: true, isPlayerDomain: false,
    },
    // ----- PLAYER DOMAIN -- the sage awakens. honestly nobody expected this. -----
    player: {
        name: 'Aberrant Throne',
        npcType: 'player',
        flavorText: 'I DWELL IN A DREAM, BY A LAW OF MY OWN. STEP INSIDE MY THRONE AND CEASE TO EXIST.',
        radius: 28, domainColor: 0x4400aa, fogColor: 0x110033,
        damage: 0,        // player domain doesn't hurt the player
        npcDamage: 16,    // 16 dps ambient + bonus from throne pillar proximity
        stunPulse: 0, healPerSec: 0, duration: 20, guaranteedHit: true, isPlayerDomain: true,
    },
};

export interface ActiveDomain {
    npc: { getPosition(): THREE.Vector3; takeDamage(d: number): void; getType(): string; hp: number; maxHp: number; };
    def: DomainDef;
    timeRemaining: number;
    stunPulseTimer: number;
    sphere: THREE.Mesh;
    fogSphere: THREE.Mesh;  // inner sphere that fakes localized fog -- no more global scene.fog
    light: THREE.PointLight;
}

// player domain is separate -- moves with player, hurts NPCs, not the player
export interface ActivePlayerDomain {
    def: DomainDef;
    timeRemaining: number;
    sphere: THREE.Mesh;
    fogSphere: THREE.Mesh;  // same deal -- local fog only, not scene-wide
    light: THREE.PointLight;
    pillars: THREE.Mesh[];        // corebound-style throne pillars at cardinal points
    pillarLights: THREE.PointLight[];  // each pillar glows
}

export class DomainExpansionSystem {
    private scene: THREE.Scene;
    public activeDomains: ActiveDomain[] = [];
    public onDomainOpen: ((name: string, flavor: string) => void) | null = null;
    public onDomainClose: ((name: string) => void) | null = null;

    // player's own domain -- lives separately from the npc domain list
    private playerDomain: ActivePlayerDomain | null = null;
    public onPlayerDomainClose: ((name: string) => void) | null = null;

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

        // inner fog sphere -- FrontSide so it looks misty from outside, gives localized fog feel
        // without poisoning the whole scene.fog which looks trash on the rest of the map
        const fogGeo = new THREE.SphereGeometry(def.radius * 0.98, 24, 24);
        const fogMat = new THREE.MeshBasicMaterial({
            color: def.fogColor,
            transparent: true,
            opacity: 0.28,
            side: THREE.FrontSide,
            depthWrite: false,
        });
        const fogSphere = new THREE.Mesh(fogGeo, fogMat);
        fogSphere.position.set(pos.x, 0, pos.z);
        this.scene.add(fogSphere);

        const domain: ActiveDomain = {
            npc, def,
            timeRemaining: def.duration,
            stunPulseTimer: def.stunPulse,
            sphere, fogSphere, light,
        };

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
            d.fogSphere.position.set(npcPos.x, 0, npcPos.z);
            d.light.position.set(npcPos.x, 5, npcPos.z);

            // pulsing opacity -- very dramatic
            (d.sphere.material as THREE.MeshBasicMaterial).opacity =
                0.12 + Math.sin(Date.now() * 0.003) * 0.06;
            (d.fogSphere.material as THREE.MeshBasicMaterial).opacity =
                0.22 + Math.sin(Date.now() * 0.002 + 1) * 0.06;

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
        this.scene.remove(d.fogSphere);
        this.scene.remove(d.light);
        (d.sphere.material as THREE.MeshBasicMaterial).dispose();
        (d.fogSphere.material as THREE.MeshBasicMaterial).dispose();
        d.sphere.geometry.dispose();
        d.fogSphere.geometry.dispose();

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

    // opens the PLAYER's domain -- aberrant throne, 4 dungeon pillars spawn in a ring
    public openPlayerDomain(): void {
        if (this.playerDomain) return; // already going
        const def = DOMAIN_DEFS['player'];
        const geo = new THREE.SphereGeometry(def.radius, 32, 32);
        const mat = new THREE.MeshBasicMaterial({
            color: def.domainColor, transparent: true, opacity: 0.18,
            side: THREE.BackSide, depthWrite: false
        });
        const sphere = new THREE.Mesh(geo, mat);
        this.scene.add(sphere);
        // localized fog sphere -- stays inside the dome, not global
        const fogGeo = new THREE.SphereGeometry(def.radius * 0.98, 24, 24);
        const fogMat = new THREE.MeshBasicMaterial({
            color: def.fogColor, transparent: true, opacity: 0.32,
            side: THREE.FrontSide, depthWrite: false
        });
        const fogSphere = new THREE.Mesh(fogGeo, fogMat);
        this.scene.add(fogSphere);
        const light = new THREE.PointLight(def.domainColor, 5, def.radius * 2);
        this.scene.add(light);

        // spawn 4 throne pillars at cardinal offsets -- corebound dungeon core vibes
        const pillarRadius = def.radius * 0.55;
        const pillars: THREE.Mesh[] = [];
        const pillarLights: THREE.PointLight[] = [];
        for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2;
            const px = Math.cos(angle) * pillarRadius;
            const pz = Math.sin(angle) * pillarRadius;
            // tall thin box -- dungeon totem
            const pGeo = new THREE.BoxGeometry(0.8, 8, 0.8);
            const pMat = new THREE.MeshBasicMaterial({ color: 0x220055 });
            const pillar = new THREE.Mesh(pGeo, pMat);
            pillar.position.set(px, 4, pz); // y=4 centers the 8-tall box on ground
            this.scene.add(pillar);
            pillars.push(pillar);
            // each pillar gets a small purple glow
            const pl = new THREE.PointLight(0x9922ff, 2.5, 10);
            pl.position.set(px, 6, pz);
            this.scene.add(pl);
            pillarLights.push(pl);
        }

        this.playerDomain = {
            def, timeRemaining: def.duration,
            sphere, fogSphere, light,
            pillars, pillarLights,
        };
        this.onDomainOpen?.(def.name, def.flavorText);
    }

    // tick the player domain -- call every frame. damages nearby npcs via npcDamage * dt per second
    public updatePlayerDomain(
        dt: number,
        playerPos: THREE.Vector3,
        npcs: Array<{ getPosition(): THREE.Vector3; takeDamage(d: number): void; isAlive(): boolean }>
    ): void {
        if (!this.playerDomain) return;
        const pd = this.playerDomain;
        pd.timeRemaining -= dt;
        pd.sphere.position.set(playerPos.x, 0, playerPos.z);
        pd.fogSphere.position.set(playerPos.x, 0, playerPos.z);
        pd.light.position.set(playerPos.x, 5, playerPos.z);
        // pulsing skin -- the throne breathes
        (pd.sphere.material as THREE.MeshBasicMaterial).opacity = 0.12 + Math.sin(Date.now() * 0.003) * 0.07;
        (pd.fogSphere.material as THREE.MeshBasicMaterial).opacity = 0.25 + Math.sin(Date.now() * 0.002 + 1) * 0.07;

        // move throne pillars with the player + pulse their glow
        const pillarRadius = pd.def.radius * 0.55;
        for (let i = 0; i < pd.pillars.length; i++) {
            const angle = (i / pd.pillars.length) * Math.PI * 2;
            const px = playerPos.x + Math.cos(angle) * pillarRadius;
            const pz = playerPos.z + Math.sin(angle) * pillarRadius;
            pd.pillars[i].position.set(px, 4, pz);
            pd.pillarLights[i].position.set(px, 6, pz);
            pd.pillarLights[i].intensity = 2.0 + Math.sin(Date.now() * 0.004 + i * 1.5) * 0.8;
        }

        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            const np = npc.getPosition();
            const dx = np.x - playerPos.x;
            const dz = np.z - playerPos.z;
            const distFromCenter = Math.sqrt(dx * dx + dz * dz);
            if (distFromCenter < pd.def.radius) {
                npc.takeDamage(pd.def.npcDamage * dt);
                // bonus damage if near a throne pillar -- the dungeon core punishes proximity
                for (const pillar of pd.pillars) {
                    const pdx = np.x - pillar.position.x;
                    const pdz = np.z - pillar.position.z;
                    if (Math.sqrt(pdx * pdx + pdz * pdz) < 5) {
                        npc.takeDamage(20 * dt); // extra 20 dps near each pillar
                    }
                }
            }
        }
        if (pd.timeRemaining <= 0) {
            this.scene.remove(pd.sphere);
            this.scene.remove(pd.fogSphere);
            this.scene.remove(pd.light);
            (pd.sphere.material as THREE.MeshBasicMaterial).dispose();
            (pd.fogSphere.material as THREE.MeshBasicMaterial).dispose();
            pd.sphere.geometry.dispose();
            pd.fogSphere.geometry.dispose();
            // tear down the throne pillars -- domain collapsed
            for (let i = 0; i < pd.pillars.length; i++) {
                this.scene.remove(pd.pillars[i]);
                this.scene.remove(pd.pillarLights[i]);
                (pd.pillars[i].material as THREE.MeshBasicMaterial).dispose();
                pd.pillars[i].geometry.dispose();
            }
            this.onPlayerDomainClose?.(pd.def.name);
            this.playerDomain = null;
        }
    }

    public isPlayerDomainActive(): boolean { return this.playerDomain !== null; }
    public getPlayerDomainTimeRemaining(): number { return this.playerDomain?.timeRemaining ?? 0; }
}
