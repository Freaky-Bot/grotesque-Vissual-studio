// InventorySystem.ts
// ugh this took me forever and nobody will even look at the inventory. fine. whatever.

export type ItemType = 'fish' | 'catnip' | 'sword' | 'potion' | 'void_shard' | 'onion' | 'cat_charm';

export interface InventoryItem {
    type: ItemType;
    name: string;
    icon: string;
    quantity: number;
    description: string;
}

export const ITEM_INFO: Record<ItemType, { name: string; icon: string; description: string }> = {
    fish:       { name: 'Fish',       icon: '🐟', description: 'speed x2.2 for 10s'         },
    catnip:     { name: 'Catnip',     icon: '🌿', description: 'reality wobble 8s'           },
    sword:      { name: 'Sword',      icon: '⚔',  description: '+20 atk dmg (passive)'       },
    potion:     { name: 'Potion',     icon: '🧪', description: 'restore 40 HP'               },
    void_shard: { name: 'Void Shard', icon: '💜', description: '30dmg blast nearby (use E)'  },
    onion:      { name: 'Onion',      icon: '🧅', description: '20dmg + shrek tribute (use E)'},
    cat_charm:  { name: 'Cat Charm',  icon: '🐾', description: '+1 atk range (passive)'      },
};

// what each npc type drops on death -- null = nothing drops
export const LOOT_TABLE: Record<string, (ItemType | null)[]> = {
    cat:     ['fish', 'fish', 'cat_charm', null, null],
    barney:  ['potion', 'cat_charm', 'cat_charm', null],
    emo:     ['void_shard', 'void_shard', 'catnip', null],
    shrek:   ['onion', 'onion', 'potion', null],
    buffcat: ['sword', 'cat_charm', 'cat_charm', null],
    voidcat: ['void_shard', 'catnip', null, null],
    hybrid:  ['fish', 'catnip', null, null],
    default: ['fish', 'cat_charm', null, null, null],
};

export class InventorySystem {
    // 6 hotbar slots -- like minecraft except worse
    public slots: (InventoryItem | null)[] = new Array(6).fill(null);
    public selectedSlot: number = 0;
    public onInventoryChange: (() => void) | null = null;

    // add item -- stack if same type exists, else find empty slot
    public addItem(type: ItemType): boolean {
        for (const slot of this.slots) {
            if (slot && slot.type === type) {
                slot.quantity++;
                this.onInventoryChange?.();
                return true;
            }
        }
        for (let i = 0; i < this.slots.length; i++) {
            if (!this.slots[i]) {
                const info = ITEM_INFO[type];
                this.slots[i] = { type, name: info.name, icon: info.icon, quantity: 1, description: info.description };
                this.onInventoryChange?.();
                return true;
            }
        }
        return false; // inventory full rip
    }

    public getEquipped(): InventoryItem | null {
        return this.slots[this.selectedSlot];
    }

    public selectSlot(n: number): void {
        this.selectedSlot = Math.max(0, Math.min(5, n));
        this.onInventoryChange?.();
    }

    // use the item in selected slot, returns the type used (or null if nothing)
    public useEquipped(): ItemType | null {
        const item = this.slots[this.selectedSlot];
        if (!item) return null;
        const consumables: ItemType[] = ['fish', 'catnip', 'potion', 'void_shard', 'onion'];
        const type = item.type;
        if (consumables.includes(type)) {
            item.quantity--;
            if (item.quantity <= 0) this.slots[this.selectedSlot] = null;
            this.onInventoryChange?.();
            return type;
        }
        return type; // passive items just return their type
    }

    // bonus attack damage from equipped item
    public getAttackBonus(): number {
        const item = this.getEquipped();
        if (!item) return 0;
        if (item.type === 'sword') return 20;
        if (item.type === 'cat_charm') return 3;
        return 0;
    }

    // bonus attack range from equipped item
    public getRangeBonus(): number {
        const item = this.getEquipped();
        if (!item) return 0;
        if (item.type === 'cat_charm') return 1.0;
        if (item.type === 'sword') return 0.5;
        return 0;
    }

    // roll a random drop from an npc type
    public static rollLoot(npcType: string): ItemType | null {
        const table = LOOT_TABLE[npcType] ?? LOOT_TABLE['default'];
        const roll = table[Math.floor(Math.random() * table.length)];
        return roll ?? null;
    }
}
