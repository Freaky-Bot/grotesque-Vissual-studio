import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

export enum Faction {
    RED = 'red',     // aggro, fights everyone
    BLUE = 'blue',   // cool and orderly or whatever
    GREEN = 'green', // nature vibes, peaceful but will fight red
    NEUTRAL = 'neutral', // doesnt care about anyone, same tbh
}

// FACTION SYSTEM -- pick a side, watch things fight
// O(n^2) collision detection because this is not a serious game
// press F to cycle factions. yes F. appropriate.

export class FactionSystem {
    private npcFactions: Map<BaseNPC, Faction> = new Map();
    private playerFaction: Faction = Faction.NEUTRAL;
    private fightCooldowns: Map<BaseNPC, number> = new Map();

    public onFactionChange: ((faction: Faction) => void) | null = null;

    constructor() {
        console.log('%c⚔️ FACTION SYSTEM ONLINE -- press F to pick a side', 'color: gold; font-weight: bold');
    }

    public assignFaction(npc: BaseNPC, faction?: Faction): void {
        const f = faction ?? this.rollRandomFaction();
        this.npcFactions.set(npc, f);
    }

    private rollRandomFaction(): Faction {
        // mostly red and blue, green is rare, neutral is filler
        const roll = Math.random();
        if (roll < 0.3) return Faction.RED;
        if (roll < 0.6) return Faction.BLUE;
        if (roll < 0.75) return Faction.GREEN;
        return Faction.NEUTRAL;
    }

    public cyclePlayerFaction(): void {
        const order = [Faction.NEUTRAL, Faction.RED, Faction.BLUE, Faction.GREEN];
        const idx = order.indexOf(this.playerFaction);
        this.playerFaction = order[(idx + 1) % order.length];
        console.log(`%c⚔️ PLAYER FACTION: ${this.playerFaction.toUpperCase()} -- lets gooo`, 'color: gold; font-size: 14px; font-weight: bold');
        this.onFactionChange?.(this.playerFaction);
    }

    public getPlayerFaction(): Faction {
        return this.playerFaction;
    }

    public getNPCFaction(npc: BaseNPC): Faction {
        return this.npcFactions.get(npc) ?? Faction.NEUTRAL;
    }

    public getFactionColor(faction: Faction): string {
        switch (faction) {
            case Faction.RED:   return '#ff4444';
            case Faction.BLUE:  return '#4488ff';
            case Faction.GREEN: return '#44cc44';
            default: return '#888888';
        }
    }

    public update(deltaTime: number, npcs: BaseNPC[]): void {
        // tick down cooldowns
        for (const [npc, cd] of this.fightCooldowns) {
            this.fightCooldowns.set(npc, cd - deltaTime);
        }

        // FACTION WAR TIME -- O(n^2) fite me
        for (let i = 0; i < npcs.length; i++) {
            const a = npcs[i];
            if (!a.isAlive()) continue;
            const fA = this.npcFactions.get(a);
            if (!fA || fA === Faction.NEUTRAL) continue;
            if ((this.fightCooldowns.get(a) ?? 0) > 0) continue;

            for (let j = i + 1; j < npcs.length; j++) {
                const b = npcs[j];
                if (!b.isAlive()) continue;
                const fB = this.npcFactions.get(b);
                if (!fB || fB === Faction.NEUTRAL || fA === fB) continue;
                if ((this.fightCooldowns.get(b) ?? 0) > 0) continue;

                // are they close enough to fight?
                if (a.getPosition().distanceTo(b.getPosition()) < 6.5) {
                    // FIGHT!! random winner because balance is a myth
                    if (Math.random() < 0.5) {
                        b.die();
                        console.log(`%c⚔️ ${fA.toUpperCase()} defeated ${fB.toUpperCase()}`, 'color: #ff6666');
                    } else {
                        a.die();
                        console.log(`%c⚔️ ${fB.toUpperCase()} defeated ${fA.toUpperCase()}`, 'color: #6688ff');
                    }
                    this.fightCooldowns.set(a, 6);
                    this.fightCooldowns.set(b, 6);
                    break;
                }
            }
        }
    }

    public removeNPC(npc: BaseNPC): void {
        this.npcFactions.delete(npc);
        this.fightCooldowns.delete(npc);
    }

    // check if player faction is at war with this npc (for future player combat stuff maybe)
    public isPlayerEnemyOf(npc: BaseNPC): boolean {
        if (this.playerFaction === Faction.NEUTRAL) return false;
        const npcFaction = this.npcFactions.get(npc) ?? Faction.NEUTRAL;
        if (npcFaction === Faction.NEUTRAL) return false;
        return npcFaction !== this.playerFaction;
    }
}
