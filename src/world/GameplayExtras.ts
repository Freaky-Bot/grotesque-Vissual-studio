import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

// gameplay extras -- quests, levels, crafting, fishing, racing, stealth, hunger, throwables
// DO U REALIZE HOW MUCH IS IN THIS FILE?? OPERATORS ARE STANDING BY!! -- infomercial dev
// (this took like writing 8 separate systems. ugh. but whatever. it works. probably.)

// =================== QUEST SYSTEM ===================

interface Quest {
    id: string;
    title: string;
    description: string;
    goal: string; // 'collect_fish' | 'kill_npcs' | 'reach_location' | 'survive'
    goalAmount: number;
    progress: number;
    reward: string;
    timeLimit: number;
    active: boolean;
    complete: boolean;
}

export class QuestSystem {
    private quests: Quest[] = [];
    private activeQuest: Quest | null = null;
    private questTimer = 0;
    private readonly QUEST_OFFER_INTERVAL = 45;

    public onQuestOffered: ((q: Quest) => void) | null = null;
    public onQuestComplete: ((q: Quest) => void) | null = null;
    public onQuestFailed: ((q: Quest) => void) | null = null;

    private readonly QUEST_POOL: Omit<Quest, 'active' | 'complete' | 'progress'>[] = [
        { id: 'fish1', title: 'The Great Fish Haul', description: 'Collect 10 fish from the fish rain', goal: 'collect_fish', goalAmount: 10, reward: 'speed_boost_30s', timeLimit: 60 },
        { id: 'kill1', title: 'Pest Control?', description: 'Defeat 5 cats', goal: 'kill_npcs', goalAmount: 5, reward: 'extra_hp_50', timeLimit: 120 },
        { id: 'survive1', title: 'Just Stay Alive', description: 'Survive 60 seconds without taking damage', goal: 'survive', goalAmount: 60, reward: 'invincible_10s', timeLimit: 70 },
        { id: 'explore1', title: 'Island Hopper', description: 'Reach a floating island', goal: 'reach_island', goalAmount: 1, reward: 'chaos_reveal', timeLimit: 90 },
        { id: 'arena1', title: 'Arena Challenger', description: 'Win an arena round', goal: 'win_arena', goalAmount: 1, reward: 'domain_skip', timeLimit: 120 },
    ];

    public update(dt: number): void {
        this.questTimer += dt;
        if (this.questTimer >= this.QUEST_OFFER_INTERVAL && !this.activeQuest) {
            this.questTimer = 0;
            this.offerRandomQuest();
        }
        if (this.activeQuest && this.activeQuest.active) {
            this.activeQuest.timeLimit -= dt;
            if (this.activeQuest.timeLimit <= 0) {
                this.onQuestFailed?.(this.activeQuest);
                this.activeQuest.active = false;
                this.activeQuest = null;
            }
        }
    }

    private offerRandomQuest(): void {
        const template = this.QUEST_POOL[Math.floor(Math.random() * this.QUEST_POOL.length)];
        const quest: Quest = { ...template, active: true, complete: false, progress: 0 };
        this.activeQuest = quest;
        this.quests.push(quest);
        this.onQuestOffered?.(quest);
    }

    public progressQuest(goal: string, amount: number = 1): void {
        if (!this.activeQuest?.active) return;
        if (this.activeQuest.goal !== goal) return;
        this.activeQuest.progress += amount;
        if (this.activeQuest.progress >= this.activeQuest.goalAmount) {
            this.activeQuest.complete = true;
            this.activeQuest.active = false;
            this.onQuestComplete?.(this.activeQuest);
            this.activeQuest = null;
        }
    }

    public getActiveQuest(): Quest | null { return this.activeQuest; }
}

// =================== LEVEL UP SYSTEM ===================

export class LevelSystem {
    private level = 1;
    private xp = 0;
    private xpToNext = 100;

    public onLevelUp: ((level: number, bonus: string) => void) | null = null;

    public readonly LEVEL_BONUSES: Record<number, string> = {
        2: '+20 Max HP',
        3: '+1 Attack Damage multiplier',
        4: '+15% Move Speed',
        5: 'Domain Expansion CD -20s',
        6: '+25 Max HP',
        7: 'Item use cooldown -50%',
        8: '+30% Attack Speed',
        9: 'Auto-heal 1 HP/5s',
        10: 'LEGENDARY: All stats +50%',
    };

    public addXP(amount: number): void {
        this.xp += amount;
        if (this.xp >= this.xpToNext) {
            this.xp -= this.xpToNext;
            this.level++;
            this.xpToNext = Math.floor(this.xpToNext * 1.4);
            const bonus = this.LEVEL_BONUSES[this.level] ?? `+${this.level * 3} Max HP`;
            this.onLevelUp?.(this.level, bonus);
        }
    }

    public getLevel(): number { return this.level; }
    public getXP(): number { return this.xp; }
    public getXPToNext(): number { return this.xpToNext; }
    public getXPPercent(): number { return this.xp / this.xpToNext; }
}

// =================== CRAFTING SYSTEM ===================

interface CraftRecipe {
    ingredients: string[];
    result: string;
    resultName: string;
}

export class CraftingSystem {
    // inventory of collected items -- string = item type, number = count
    private items: Map<string, number> = new Map();

    public onCraftSuccess: ((result: string, name: string) => void) | null = null;
    public onPickupItem: ((type: string) => void) | null = null;

    private readonly RECIPES: CraftRecipe[] = [
        { ingredients: ['fish', 'fish', 'fish'], result: 'mega_fish', resultName: 'MEGA FISH -- speed x3 for 30s' },
        { ingredients: ['fish', 'herb'], result: 'catnip_bomb', resultName: 'CATNIP BOMB -- stuns all near NPCs' },
        { ingredients: ['herb', 'herb'], result: 'healing_poultice', resultName: 'HEALING POULTICE -- +40 HP instant' },
        { ingredients: ['fish', 'fish', 'herb', 'herb'], result: 'ultimate_treat', resultName: 'ULTIMATE TREAT -- all buffs at once for 15s' },
        { ingredients: ['rock', 'rock'], result: 'stone_shield', resultName: 'STONE SHIELD -- absorb next 3 hits' },
    ];

    public pickupItem(type: string): void {
        this.items.set(type, (this.items.get(type) ?? 0) + 1);
        this.onPickupItem?.(type);
        this.checkAutoCraft();
    }

    private checkAutoCraft(): void {
        for (const recipe of this.RECIPES) {
            if (this.canCraft(recipe)) {
                this.craft(recipe);
                break;
            }
        }
    }

    private canCraft(recipe: CraftRecipe): boolean {
        const needed = new Map<string, number>();
        for (const ing of recipe.ingredients) needed.set(ing, (needed.get(ing) ?? 0) + 1);
        for (const [ing, count] of needed) {
            if ((this.items.get(ing) ?? 0) < count) return false;
        }
        return true;
    }

    private craft(recipe: CraftRecipe): void {
        const needed = new Map<string, number>();
        for (const ing of recipe.ingredients) needed.set(ing, (needed.get(ing) ?? 0) + 1);
        for (const [ing, count] of needed) {
            this.items.set(ing, (this.items.get(ing) ?? 0) - count);
        }
        this.onCraftSuccess?.(recipe.result, recipe.resultName);
    }

    public getItems(): Map<string, number> { return this.items; }
}

// =================== FISHING MINIGAME ===================

export class FishingSystem {
    private active = false;
    private fishTimer = 0;
    private readonly BASE_BITE_TIME = 5;
    private rodCastPos: THREE.Vector3 | null = null;
    private lineMesh: THREE.Line | null = null;
    private scene: THREE.Scene;

    public onFishCaught: ((fishType: string) => void) | null = null;
    public onFishEscaped: (() => void) | null = null;
    public onStartFishing: (() => void) | null = null;

    private readonly FISH_TYPES = ['salmon', 'tuna', 'sardine', 'goldfish', 'catfish', 'LEGENDARY_KRAKEN_FISH'];

    constructor(scene: THREE.Scene) { this.scene = scene; }

    public startFishing(playerPos: THREE.Vector3): void {
        if (this.active) return;
        this.active = true;
        this.fishTimer = this.BASE_BITE_TIME + Math.random() * 8;
        this.rodCastPos = playerPos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 4, 0, 2));
        this.onStartFishing?.();
        // draw a fishing line
        const points = [playerPos.clone().add(new THREE.Vector3(0, 2, 0)), this.rodCastPos.clone()];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const mat = new THREE.LineBasicMaterial({ color: 0xffffff });
        this.lineMesh = new THREE.Line(geo, mat);
        this.scene.add(this.lineMesh);
    }

    public update(dt: number): boolean {
        if (!this.active) return false;
        this.fishTimer -= dt;
        if (this.fishTimer <= 0) {
            this.stopFishing();
            if (Math.random() < 0.7) {
                const fish = this.FISH_TYPES[Math.floor(Math.random() * this.FISH_TYPES.length)];
                this.onFishCaught?.(fish);
                return true;
            } else {
                this.onFishEscaped?.();
            }
        }
        return false;
    }

    public stopFishing(): void {
        this.active = false;
        if (this.lineMesh) { this.scene.remove(this.lineMesh); this.lineMesh = null; }
        this.rodCastPos = null;
    }

    public isActive(): boolean { return this.active; }
}

// =================== CAT RACING ===================

interface Racer {
    npc: BaseNPC;
    distanceTraveled: number;
    finished: boolean;
    betAmount: number;
}

export class CatRacingSystem {
    private active = false;
    private racers: Racer[] = [];
    private raceTimer = 0;
    private readonly RACE_LENGTH = 200;
    private playerBet: { racer: BaseNPC; amount: number } | null = null;

    public onRaceStart: ((racers: string[]) => void) | null = null;
    public onRaceFinish: ((winner: string, playerWon: boolean, reward: number) => void) | null = null;

    public startRace(npcs: BaseNPC[]): void {
        if (this.active || npcs.length < 3) return;
        this.active = true;
        this.raceTimer = 0;
        const selected = npcs.slice(0, Math.min(5, npcs.length));
        this.racers = selected.map(npc => ({ npc, distanceTraveled: 0, finished: false, betAmount: 0 }));
        this.onRaceStart?.(selected.map(n => n.getType()));
    }

    public placeBet(npc: BaseNPC, amount: number): void {
        this.playerBet = { racer: npc, amount };
    }

    public update(dt: number): void {
        if (!this.active) return;
        this.raceTimer += dt;
        let firstFinisher: Racer | null = null;
        for (const racer of this.racers) {
            if (racer.finished) continue;
            // each racer moves at random speed -- chaos
            racer.distanceTraveled += dt * (6 + Math.random() * 8);
            if (racer.distanceTraveled >= this.RACE_LENGTH && !racer.finished) {
                racer.finished = true;
                if (!firstFinisher) firstFinisher = racer;
            }
        }
        if (firstFinisher) {
            const playerWon = this.playerBet?.racer === firstFinisher.npc;
            const reward = playerWon ? (this.playerBet?.amount ?? 0) * 2 : 0;
            this.onRaceFinish?.(firstFinisher.npc.getType(), playerWon, reward);
            this.active = false;
            this.racers = [];
            this.playerBet = null;
        }
    }

    public isActive(): boolean { return this.active; }
}

// =================== STEALTH SYSTEM ===================

export class StealthSystem {
    private crouching = false;
    private detectionRange = 15; // normal range
    private readonly CROUCH_RANGE = 5;
    private stealthTimer = 0;

    public onDetected: ((npcType: string) => void) | null = null;
    public onSneakSuccess: (() => void) | null = null;

    public setCrouching(crouching: boolean): void {
        this.crouching = crouching;
    }

    public getDetectionRange(): number {
        return this.crouching ? this.CROUCH_RANGE : this.detectionRange;
    }

    public checkDetection(playerPos: THREE.Vector3, npcs: BaseNPC[]): void {
        const range = this.getDetectionRange();
        for (const npc of npcs) {
            if (npc.getPosition().distanceTo(playerPos) < range) {
                if (!this.crouching) this.onDetected?.(npc.getType());
            }
        }
        if (this.crouching) this.onSneakSuccess?.();
    }

    public isCrouching(): boolean { return this.crouching; }
}

// =================== NPC HUNGER SYSTEM ===================

interface HungryNPC {
    npc: BaseNPC;
    hunger: number; // 0-100
    seekingFood: boolean;
}

export class NPCHungerSystem {
    private hungryNPCs: HungryNPC[] = [];
    private foodItems: { pos: THREE.Vector3; mesh: THREE.Mesh }[] = [];
    private scene: THREE.Scene;
    private spawnFoodTimer = 0;

    public onNPCStarving: ((type: string) => void) | null = null;
    public onNPCEatFood: ((type: string) => void) | null = null;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.spawnFoodItems(10);
    }

    private spawnFoodItems(count: number): void {
        for (let i = 0; i < count; i++) {
            const food = new THREE.Mesh(
                new THREE.SphereGeometry(0.3, 6, 6),
                new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.8 })
            );
            food.position.set((Math.random() - 0.5) * 200, 0.3, (Math.random() - 0.5) * 200);
            food.name = 'food_item';
            this.scene.add(food);
            this.foodItems.push({ pos: food.position.clone(), mesh: food });
        }
    }

    public trackNPC(npc: BaseNPC): void {
        if (this.hungryNPCs.some(h => h.npc === npc)) return;
        this.hungryNPCs.push({ npc, hunger: Math.random() * 40, seekingFood: false });
    }

    public update(dt: number, npcs: BaseNPC[]): void {
        // track new npcs
        for (const npc of npcs) this.trackNPC(npc);

        // update hunger
        for (let i = this.hungryNPCs.length - 1; i >= 0; i--) {
            const h = this.hungryNPCs[i];
            if (!h.npc.isAlive()) { this.hungryNPCs.splice(i, 1); continue; }
            h.hunger += dt * 2; // hunger increases over time
            if (h.hunger >= 80 && !h.seekingFood) {
                h.seekingFood = true;
                this.onNPCStarving?.(h.npc.getType());
            }
            if (h.hunger >= 100) {
                // starvation -- slow them down
                h.npc.getMesh().scale.multiplyScalar(0.999); // subtle shrink
            }
            // seek nearest food
            if (h.seekingFood && this.foodItems.length > 0) {
                let nearest = this.foodItems[0];
                let nearestDist = h.npc.getPosition().distanceTo(nearest.pos);
                for (const f of this.foodItems) {
                    const d = h.npc.getPosition().distanceTo(f.pos);
                    if (d < nearestDist) { nearestDist = d; nearest = f; }
                }
                // eat if close enough
                if (nearestDist < 3) {
                    h.hunger = 0;
                    h.seekingFood = false;
                    const idx = this.foodItems.indexOf(nearest);
                    if (idx >= 0) {
                        this.scene.remove(nearest.mesh);
                        this.foodItems.splice(idx, 1);
                    }
                    this.onNPCEatFood?.(h.npc.getType());
                }
            }
        }

        // respawn food items
        this.spawnFoodTimer += dt;
        if (this.spawnFoodTimer >= 30 && this.foodItems.length < 15) {
            this.spawnFoodTimer = 0;
            this.spawnFoodItems(3);
        }
    }
}

// =================== THROWABLE ITEMS ===================

interface Throwable {
    mesh: THREE.Mesh;
    vel: THREE.Vector3;
    life: number;
    dmg: number;
    type: string;
}

export class ThrowableSystem {
    private scene: THREE.Scene;
    private throwables: Throwable[] = [];
    private pickupItems: { pos: THREE.Vector3; mesh: THREE.Mesh; type: string }[] = [];
    private playerPos: THREE.Vector3 | null = null;

    public onHitNPC: ((npc: BaseNPC, dmg: number, type: string) => void) | null = null;
    public onPickup: ((type: string) => void) | null = null;
    public heldItem: string | null = null;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.spawnDebris();
    }

    private spawnDebris(): void {
        const types = ['rock', 'bottle', 'fish_bone', 'brick', 'can'];
        for (let i = 0; i < 20; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const mesh = new THREE.Mesh(
                new THREE.BoxGeometry(0.4, 0.4, 0.4),
                new THREE.MeshStandardMaterial({ color: type === 'rock' ? 0x888888 : 0x664422, roughness: 1.0 })
            );
            mesh.position.set((Math.random() - 0.5) * 200, 0.4, (Math.random() - 0.5) * 200);
            mesh.name = 'pickup_item_' + type;
            this.scene.add(mesh);
            this.pickupItems.push({ pos: mesh.position.clone(), mesh, type });
        }
    }

    public throw(from: THREE.Vector3, direction: THREE.Vector3): void {
        if (!this.heldItem) return;
        const colors: Record<string, number> = { rock: 0x888888, bottle: 0x00aa66, fish_bone: 0xeeeedd, brick: 0xcc5522, can: 0xaaaaaa };
        const dmg: Record<string, number> = { rock: 25, bottle: 15, fish_bone: 10, brick: 35, can: 12 };
        const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.5, 0.5),
            new THREE.MeshStandardMaterial({ color: colors[this.heldItem] ?? 0x888888 })
        );
        mesh.position.copy(from);
        mesh.position.y += 1;
        this.scene.add(mesh);
        const vel = direction.clone().normalize().multiplyScalar(18);
        vel.y += 3; // arc
        this.throwables.push({ mesh, vel, life: 3, dmg: dmg[this.heldItem] ?? 20, type: this.heldItem });
        this.heldItem = null;
    }

    public update(dt: number, npcs: BaseNPC[], playerPos: THREE.Vector3): void {
        this.playerPos = playerPos;

        // update throwables
        for (let i = this.throwables.length - 1; i >= 0; i--) {
            const t = this.throwables[i];
            t.life -= dt;
            t.vel.y -= 20 * dt; // gravity
            t.mesh.position.add(t.vel.clone().multiplyScalar(dt));
            t.mesh.rotation.x += dt * 5; t.mesh.rotation.z += dt * 3;
            if (t.mesh.position.y <= 0.3 || t.life <= 0) {
                this.scene.remove(t.mesh);
                this.throwables.splice(i, 1);
                continue;
            }
            // hit check
            for (const npc of npcs) {
                if (npc.getPosition().distanceTo(t.mesh.position) < 2) {
                    npc.takeDamage(t.dmg);
                    this.onHitNPC?.(npc, t.dmg, t.type);
                    this.scene.remove(t.mesh);
                    this.throwables.splice(i, 1);
                    break;
                }
            }
        }

        // pickup check
        for (let i = this.pickupItems.length - 1; i >= 0; i--) {
            const p = this.pickupItems[i];
            if (playerPos.distanceTo(p.pos) < 2 && !this.heldItem) {
                this.heldItem = p.type;
                this.scene.remove(p.mesh);
                this.pickupItems.splice(i, 1);
                this.onPickup?.(p.type);
                // respawn somewhere else
                setTimeout(() => { this.spawnDebris(); }, 10000);
                break;
            }
        }
    }

    public getHeldItem(): string | null { return this.heldItem; }
}
