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
    castPos: THREE.Vector3;         // FIXED -- the domain never moves from where it was cast
    playerLockedInside: boolean;    // true = player was inside when cast, locked in til domain collapses
    stunPulseTimer: number;
    uniqueTimer: number;            // for per-domain special effect tick
    sphere: THREE.Mesh;
    light: THREE.PointLight;
    innerLight: THREE.PointLight;   // secondary light for atmosphere
}

// player domain is separate -- moves with player, hurts NPCs, not the player
export interface ActivePlayerDomain {
    def: DomainDef;
    castPos: THREE.Vector3;         // fixed to where Z was pressed
    playerLockedInside: boolean;    // always true -- you cast it on yourself
    sphere: THREE.Mesh;
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

    // unique effect hook -- main.ts wires this to do screen effects, spawn npcs, mud, etc
    public onDomainEffect: ((effect: string, center: THREE.Vector3, radius: number) => void) | null = null;
    // pushback hook -- main.ts listens and teleports sage back to domain boundary
    public onPlayerPushback: ((newPos: THREE.Vector3) => void) | null = null;

    // idk if more than one domain active at once is legal in jjk but this is a cat game so. yolo.
    private readonly MAX_CONCURRENT = 2;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
    }

    public openDomain(
        npc: ActiveDomain['npc'],
        defKey: string,
        playerPos?: THREE.Vector3,
    ): void {
        if (this.activeDomains.length >= this.MAX_CONCURRENT) return;
        const def = DOMAIN_DEFS[defKey] ?? DOMAIN_DEFS['normal'];

        // fixed cast position -- this never moves for the rest of the domain's life
        const pos = npc.getPosition();
        const castPos = new THREE.Vector3(pos.x, 0, pos.z);

        // SOLID outer shell visible from outside -- thick opaque walls, this is a prison now
        const outerGeo = new THREE.SphereGeometry(def.radius, 40, 40);
        const outerMat = new THREE.MeshBasicMaterial({
            color: def.domainColor,
            transparent: true,
            opacity: 0.92,
            side: THREE.FrontSide,  // visible from OUTSIDE -- the wall facing you
            depthWrite: true,
        });
        const sphere = new THREE.Mesh(outerGeo, outerMat);
        sphere.position.copy(castPos);
        this.scene.add(sphere);

        // inner shell -- you see this from inside, same color slightly darker
        const innerGeo = new THREE.SphereGeometry(def.radius * 0.99, 40, 40);
        const innerMat = new THREE.MeshBasicMaterial({
            color: def.fogColor,
            transparent: true,
            opacity: 0.85,
            side: THREE.BackSide,   // only visible from inside
            depthWrite: false,
        });
        const innerShell = new THREE.Mesh(innerGeo, innerMat);
        innerShell.position.copy(castPos);
        this.scene.add(innerShell);
        // stash the inner shell in userData so we can dispose it later -- kinda hacky but it works
        (sphere as THREE.Mesh & { innerShell?: THREE.Mesh }).innerShell = innerShell;

        // dramatic central light
        const light = new THREE.PointLight(def.domainColor, 5, def.radius * 2);
        light.position.set(castPos.x, 6, castPos.z);
        this.scene.add(light);

        // secondary pulsing light for vibes
        const innerLight = new THREE.PointLight(def.fogColor, 3, def.radius * 0.8);
        innerLight.position.set(castPos.x, 2, castPos.z);
        this.scene.add(innerLight);

        // is the player trapped inside?
        const playerLockedInside = playerPos
            ? playerPos.distanceTo(new THREE.Vector3(castPos.x, playerPos.y, castPos.z)) < def.radius
            : false;

        const domain: ActiveDomain = {
            npc, def, castPos, playerLockedInside,
            stunPulseTimer: def.stunPulse,
            uniqueTimer: 0,
            sphere, light, innerLight,
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

            // sphere is FIXED -- it never moves. the npc cast it and now its stuck there forever
            // (or until the npc dies)

            // pulse the lights for atmosphere -- walls stay solid though
            d.light.intensity = 4.5 + Math.sin(Date.now() * 0.003) * 1.5;
            d.innerLight.intensity = 2.5 + Math.sin(Date.now() * 0.004 + 1) * 1.0;

            const dist = playerPos.distanceTo(new THREE.Vector3(d.castPos.x, playerPos.y, d.castPos.z));

            // BOUNDARY ENFORCEMENT -- you cannot cross the wall. period.
            const buffer = 0.6; // small buffer so we dont vibrate at the edge
            if (d.playerLockedInside && dist > d.def.radius - buffer) {
                // player is escaping but cant -- push them back in
                const dir = new THREE.Vector3(playerPos.x - d.castPos.x, 0, playerPos.z - d.castPos.z).normalize();
                const safeR = d.def.radius - buffer - 0.5;
                this.onPlayerPushback?.(new THREE.Vector3(
                    d.castPos.x + dir.x * safeR,
                    playerPos.y,
                    d.castPos.z + dir.z * safeR,
                ));
            } else if (!d.playerLockedInside && dist < d.def.radius + buffer) {
                // player is trying to enter but domain is sealed -- push them back out
                const dir = new THREE.Vector3(playerPos.x - d.castPos.x, 0, playerPos.z - d.castPos.z);
                if (dir.lengthSq() < 0.001) dir.set(1, 0, 0); // prevent zero-vector if player is exactly at center
                dir.normalize();
                const safeR = d.def.radius + buffer + 0.5;
                this.onPlayerPushback?.(new THREE.Vector3(
                    d.castPos.x + dir.x * safeR,
                    playerPos.y,
                    d.castPos.z + dir.z * safeR,
                ));
            }

            const insideDomain = dist < d.def.radius;

            if (insideDomain && d.playerLockedInside) {
                // damage + stun -- no escape uwu
                onPlayerDamage(d.def.damage * deltaTime);

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

            // per-domain UNIQUE effects -- each domain does something different besides just dmg
            d.uniqueTimer += deltaTime;
            this.tickUniqueEffect(d, deltaTime, playerPos, onPlayerDamage, onPlayerStun);

            // domain only closes when the NPC that cast it dies -- not on a timer
            if (d.npc.hp <= 0) {
                this.closeDomain(d, i);
            }
        }
    }

    // unique per-domain special effects -- this is where domains get their personality
    private tickUniqueEffect(
        d: ActiveDomain,
        dt: number,
        playerPos: THREE.Vector3,
        onPlayerDamage: (dmg: number) => void,
        onPlayerStun: () => void,
    ): void {
        const type = d.def.npcType;
        const t = Date.now();
        // universal: vampire steals player HP and gives to npc
        if (type === 'vampire' && d.playerLockedInside) {
            const stolen = d.def.damage * dt * 0.5;
            d.npc.hp = Math.min(d.npc.maxHp, d.npc.hp + stolen);
            // damage already applied in main loop so just the heal here
        }
        // unique effect every N seconds based on npc type
        const effectInterval = type === 'barney' ? 4 : type === 'normal' ? 5 : type === 'wizard' ? 6 : type === 'shrek' ? 3 : type === 'disco' ? 2 : 0;
        if (effectInterval > 0 && d.uniqueTimer >= effectInterval) {
            d.uniqueTimer = 0;
            this.onDomainEffect?.(type, d.castPos, d.def.radius);
        }
        // shadow + voidcat: crackle inner light rapidly
        if (type === 'shadow' || type === 'voidcat') {
            d.innerLight.intensity = Math.random() < 0.05 ? 8 : 0; // occasional flash of nothing
        }
        // robot: inner light strobes on grid frequency
        if (type === 'robot') {
            d.innerLight.intensity = Math.sin(t * 0.02) > 0 ? 4 : 0;
        }
        // disco: rotate the domain color every frame through hues
        if (type === 'disco') {
            const hue = (t * 0.001) % 1;
            (d.sphere.material as THREE.MeshBasicMaterial).color.setHSL(hue, 1, 0.5);
            d.light.color.setHSL(hue, 1, 0.5);
        }
        // buffcat: innerlight goes RED every hit
        if (type === 'buffcat') {
            d.innerLight.color.setHSL(0, 1, 0.5 + Math.sin(t * 0.01) * 0.4);
        }
    }

    private closeDomain(d: ActiveDomain, index: number): void {
        this.scene.remove(d.sphere);
        this.scene.remove(d.light);
        this.scene.remove(d.innerLight);
        (d.sphere.material as THREE.MeshBasicMaterial).dispose();
        d.sphere.geometry.dispose();
        // dispose inner shell if it exists
        const inner = (d.sphere as THREE.Mesh & { innerShell?: THREE.Mesh }).innerShell;
        if (inner) {
            this.scene.remove(inner);
            (inner.material as THREE.MeshBasicMaterial).dispose();
            inner.geometry.dispose();
        }
        this.activeDomains.splice(index, 1);
        this.onDomainClose?.(d.def.name);
        // screen effect cleanup if domain had one
        if (['emo', 'shadow', 'voidcat'].includes(d.def.npcType)) {
            this.onDomainEffect?.('screen_clear', d.castPos, 0);
        }
        console.log(`%c💀 Domain "${d.def.name}" has collapsed.`, 'color: #888; font-style: italic');
    }

    // call this when the player dies -- collapses every active domain immediately
    public forceCloseAll(): void {
        for (let i = this.activeDomains.length - 1; i >= 0; i--) {
            this.closeDomain(this.activeDomains[i], i);
        }
        this.forceClosePlayerDomain();
    }

    public forceClosePlayerDomain(): void {
        if (!this.playerDomain) return;
        const pd = this.playerDomain;
        this.scene.remove(pd.sphere);
        this.scene.remove(pd.light);
        (pd.sphere.material as THREE.MeshBasicMaterial).dispose();
        pd.sphere.geometry.dispose();
        for (let i = 0; i < pd.pillars.length; i++) {
            this.scene.remove(pd.pillars[i]);
            this.scene.remove(pd.pillarLights[i]);
            (pd.pillars[i].material as THREE.MeshBasicMaterial).dispose();
            pd.pillars[i].geometry.dispose();
        }
        this.onPlayerDomainClose?.(pd.def.name);
        this.playerDomain = null;
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

    // opens the PLAYER's domain -- aberrant throne, fixed to cast pos, solid walls, pillars at corners
    public openPlayerDomain(castPos: THREE.Vector3): void {
        if (this.playerDomain) return; // already going
        const def = DOMAIN_DEFS['player'];
        const fixedPos = new THREE.Vector3(castPos.x, 0, castPos.z);

        // solid outer wall -- player is locked inside with the pillars
        const geo = new THREE.SphereGeometry(def.radius, 40, 40);
        const mat = new THREE.MeshBasicMaterial({
            color: def.domainColor, transparent: true, opacity: 0.92,
            side: THREE.FrontSide, depthWrite: true
        });
        const sphere = new THREE.Mesh(geo, mat);
        sphere.position.copy(fixedPos);
        this.scene.add(sphere);

        // inner dark shell -- what you see from inside
        const innerGeo = new THREE.SphereGeometry(def.radius * 0.99, 40, 40);
        const innerMat = new THREE.MeshBasicMaterial({
            color: def.fogColor, transparent: true, opacity: 0.88,
            side: THREE.BackSide, depthWrite: false
        });
        const innerShell = new THREE.Mesh(innerGeo, innerMat);
        innerShell.position.copy(fixedPos);
        this.scene.add(innerShell);
        (sphere as THREE.Mesh & { innerShell?: THREE.Mesh }).innerShell = innerShell;

        const light = new THREE.PointLight(def.domainColor, 6, def.radius * 2.2);
        light.position.set(fixedPos.x, 6, fixedPos.z);
        this.scene.add(light);

        // 4 throne pillars fixed at cardinal positions relative to cast pos
        const pillarRadius = def.radius * 0.55;
        const pillars: THREE.Mesh[] = [];
        const pillarLights: THREE.PointLight[] = [];
        for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2;
            const px = fixedPos.x + Math.cos(angle) * pillarRadius;
            const pz = fixedPos.z + Math.sin(angle) * pillarRadius;
            const pGeo = new THREE.BoxGeometry(0.8, 8, 0.8);
            const pMat = new THREE.MeshBasicMaterial({ color: 0x220055 });
            const pillar = new THREE.Mesh(pGeo, pMat);
            pillar.position.set(px, 4, pz);
            this.scene.add(pillar);
            pillars.push(pillar);
            const pl = new THREE.PointLight(0x9922ff, 2.5, 10);
            pl.position.set(px, 6, pz);
            this.scene.add(pl);
            pillarLights.push(pl);
        }

        this.playerDomain = {
            def, castPos: fixedPos, playerLockedInside: true,
            sphere, light, pillars, pillarLights,
        };
        this.onDomainOpen?.(def.name, def.flavorText);
    }

    // tick the player domain -- sphere is FIXED, damages npcs inside, NPCs cannot leave either
    public updatePlayerDomain(
        dt: number,
        playerPos: THREE.Vector3,
        npcs: Array<{ getPosition(): THREE.Vector3; takeDamage(d: number): void; isAlive(): boolean }>
    ): void {
        if (!this.playerDomain) return;
        const pd = this.playerDomain;
        // sphere does NOT move -- it stays at castPos
        // just pulse the lights bc that's still cool
        pd.light.intensity = 5.5 + Math.sin(Date.now() * 0.003) * 1.5;
        for (let i = 0; i < pd.pillarLights.length; i++) {
            pd.pillarLights[i].intensity = 2.0 + Math.sin(Date.now() * 0.004 + i * 1.5) * 0.8;
        }

        // BOUNDARY: player is locked inside -- enforce that
        const distFromCenter = new THREE.Vector3(
            playerPos.x - pd.castPos.x, 0, playerPos.z - pd.castPos.z).length();
        if (distFromCenter > pd.def.radius - 0.6) {
            const dir = new THREE.Vector3(playerPos.x - pd.castPos.x, 0, playerPos.z - pd.castPos.z).normalize();
            const safeR = pd.def.radius - 1.2;
            this.onPlayerPushback?.(new THREE.Vector3(
                pd.castPos.x + dir.x * safeR,
                playerPos.y,
                pd.castPos.z + dir.z * safeR,
            ));
        }

        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            const np = npc.getPosition();
            const dx = np.x - pd.castPos.x;
            const dz = np.z - pd.castPos.z;
            if (Math.sqrt(dx * dx + dz * dz) < pd.def.radius) {
                npc.takeDamage(pd.def.npcDamage * dt);
                // bonus damage near throne pillars
                for (const pillar of pd.pillars) {
                    const pdx = np.x - pillar.position.x;
                    const pdz = np.z - pillar.position.z;
                    if (Math.sqrt(pdx * pdx + pdz * pdz) < 5) {
                        npc.takeDamage(20 * dt);
                    }
                }
            }
        }
        // domain stays up until forceClosePlayerDomain() is called (player death or all npcs die)
        // check if all living npcs escaped the domain or are dead -- if none remain -> collapse
        const npcsInside = npcs.filter(n => {
            if (!n.isAlive()) return false;
            const np = n.getPosition();
            const dx = np.x - pd.castPos.x;
            const dz = np.z - pd.castPos.z;
            return Math.sqrt(dx * dx + dz * dz) < pd.def.radius;
        });
        // if we had NPCs inside at some point and they're all dead now -- throne has done its job
        // we check npcs total alive nearby to determine if castle is now empty
        const anyNpcNearby = npcs.some(n => {
            const np = n.getPosition();
            const dx = np.x - pd.castPos.x;
            const dz = np.z - pd.castPos.z;
            return n.isAlive() && Math.sqrt(dx * dx + dz * dz) < pd.def.radius * 1.5;
        });
        // void: collapse only if no enemies anywhere nearby (they've all been slain)
        if (!anyNpcNearby && npcs.length > 0) {
            this.forceClosePlayerDomain();
        }
    }

    public isPlayerDomainActive(): boolean { return this.playerDomain !== null; }
    public getPlayerDomainTimeRemaining(): number { return this.playerDomain?.timeRemaining ?? 0; }
}
