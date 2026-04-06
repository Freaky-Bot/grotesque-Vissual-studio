// InventorySystem.ts
// ugh this took me forever and nobody will even look at the inventory. fine. whatever.

export type ItemType =
    // -- consumables --
    | 'fish' | 'catnip' | 'potion' | 'void_shard' | 'onion'
    | 'mega_potion' | 'turbo_fish' | 'bomb' | 'lightning' | 'holy_water'
    | 'disco_ball' | 'time_crystal' | 'star_piece' | 'teleporter' | 'warp_stone'
    | 'cheese' | 'bandage' | 'boomerang' | 'megaphone' | 'glue_trap'
    | 'nuke' | 'plasma_cannon' | 'mystery_box' | 'cursed_egg' | 'party_hat'
    | 'rainbow' | 'coffee' | 'void_key' | 'barney_ticket' | 'onion_layer'
    | 'uwu_scroll' | 'donut' | 'hot_sauce' | 'cheese_wheel' | 'soul_gem'
    | 'shield'
    // -- passives / equippables --
    | 'sword' | 'cat_charm' | 'flaming_sword' | 'giant_hammer'
    | 'void_armor' | 'cursed_ring' | 'shrek_ears' | 'cat_crown' | 'cheese_armor'
    | 'moon_shard' | 'spring_shoes' | 'void_blade' | 'lucky_charm' | 'laser_pointer'
    // nyaa~ 25 more items because the loot table was too small meow UwU 💕
    | 'dragon_scale' | 'freeze_ray' | 'gravity_boots' | 'thunder_staff' | 'shadow_cloak'
    | 'berserker_potion' | 'holy_grail' | 'void_grenade' | 'cat_flute' | 'ninja_stars'
    | 'ice_shard' | 'resurrection_stone' | 'chaos_orb' | 'loot_magnet' | 'smoke_bomb'
    | 'cursed_lute' | 'storm_gem' | 'reaper_scythe' | 'plague_vial' | 'mirror_shield'
    | 'hacker_drive' | 'thunder_ring' | 'phantom_cloak' | 'arena_trophy' | 'prophecy_tome';

export interface InventoryItem {
    type: ItemType;
    name: string;
    icon: string;
    quantity: number;
    description: string;
}

export const ITEM_INFO: Record<ItemType, { name: string; icon: string; description: string }> = {
    // consumables
    fish:          { name: 'Fish',          icon: '🐟', description: 'speed x2.2 for 10s'                 },
    catnip:        { name: 'Catnip',        icon: '🌿', description: 'reality wobble 8s'                  },
    potion:        { name: 'Potion',        icon: '🧪', description: 'restore 40 HP'                      },
    void_shard:    { name: 'Void Shard',    icon: '💜', description: '30 dmg AoE 10r (E)'                 },
    onion:         { name: 'Onion',         icon: '🧅', description: '20 dmg AoE tribute (E)'             },
    mega_potion:   { name: 'Mega Potion',   icon: '💊', description: 'full heal (E)'                      },
    turbo_fish:    { name: 'Turbo Fish',    icon: '🐡', description: 'speed x4 for 5s (E)'               },
    bomb:          { name: 'Bomb',          icon: '💣', description: '60 dmg AoE 15r (E)'                 },
    lightning:     { name: 'Lightning',     icon: '⚡', description: 'chain 25dmg 5 targets (E)'          },
    holy_water:    { name: 'Holy Water',    icon: '🫧', description: 'insta-kill emos nearby (E)'         },
    disco_ball:    { name: 'Disco Ball',    icon: '🪩', description: 'stun all in 10r 8s (E)'             },
    time_crystal:  { name: 'Time Crystal',  icon: '🔮', description: 'slow motion x0.4 for 10s (E)'       },
    star_piece:    { name: 'Star Piece',    icon: '⭐', description: 'invincible 3s (E)'                  },
    teleporter:    { name: 'Teleporter',    icon: '🌀', description: 'warp to random (E)'                 },
    warp_stone:    { name: 'Warp Stone',    icon: '🪨', description: 'warp to Cat God (E)'               },
    cheese:        { name: 'Cheese',        icon: '🧀', description: 'heal 8 HP (E)'                      },
    bandage:       { name: 'Bandage',       icon: '🩹', description: 'heal 25 HP over 10s (E)'            },
    boomerang:     { name: 'Boomerang',     icon: '🪃', description: '20 dmg all in 12r (E)'              },
    megaphone:     { name: 'Megaphone',     icon: '📣', description: 'blast all NPCs 30u away (E)'        },
    glue_trap:     { name: 'Glue Trap',     icon: '🕸',  description: 'freeze all in 10r 6s (E)'           },
    nuke:          { name: 'Nuke',          icon: '☢',  description: '100 dmg ALL in 25r (E)'             },
    plasma_cannon: { name: 'Plasma Cannon', icon: '🔫', description: '40 dmg rang 20u single (E)'          },
    mystery_box:   { name: 'Mystery Box',   icon: '📦', description: 'spawn 3 random items (E)'           },
    cursed_egg:    { name: 'Cursed Egg',    icon: '🥚', description: 'random chaotic effect (E)'           },
    party_hat:     { name: 'Party Hat',     icon: '🎉', description: 'make nearby NPCs chat (E)'          },
    rainbow:       { name: 'Rainbow',       icon: '🌈', description: 'spawn 5 random NPCs (E)'            },
    coffee:        { name: 'Coffee',        icon: '☕', description: 'clear all debuffs (E)'              },
    void_key:      { name: 'Void Key',      icon: '🗝',  description: 'instantly enter the void (E)'       },
    barney_ticket: { name: 'Barney Ticket', icon: '🦕', description: 'summon Barney nearby (E)'           },
    onion_layer:   { name: 'Onion Layer',   icon: '🫧', description: 'absorb 1 hit completely (E)'        },
    uwu_scroll:    { name: 'Uwu Scroll',    icon: '📜', description: 'NPCs say uwu for 20s (E)'           },
    donut:         { name: 'Donut',         icon: '🍩', description: '5s confusion + random move (E)'     },
    hot_sauce:     { name: 'Hot Sauce',     icon: '🌶',  description: 'speed x3 chaotic 5s (E)'            },
    cheese_wheel:  { name: 'Cheese Wheel',  icon: '🎡', description: '35 dmg hit nearest NPC (E)'         },
    soul_gem:      { name: 'Soul Gem',      icon: '💎', description: 'auto-revive once on death (E)'      },
    shield:        { name: 'Shield',        icon: '🛡',  description: 'absorb 3 hits (E)'                  },
    // passives
    sword:         { name: 'Sword',         icon: '⚔',  description: '+20 atk dmg (passive)'              },
    cat_charm:     { name: 'Cat Charm',     icon: '🐾', description: '+1 range +3 dmg (passive)'          },
    flaming_sword: { name: 'Flaming Sword', icon: '🔥', description: '+35 atk dmg (passive)'              },
    giant_hammer:  { name: 'Giant Hammer',  icon: '🔨', description: '+50 dmg -1.5 range (passive)'       },
    void_armor:    { name: 'Void Armor',    icon: '🌑', description: '-50% dmg taken (passive)'           },
    cursed_ring:   { name: 'Cursed Ring',   icon: '💍', description: 'x2 dmg dealt + received (passive)'  },
    shrek_ears:    { name: 'Shrek Ears',    icon: '👂', description: 'mud immune (passive)'               },
    cat_crown:     { name: 'Cat Crown',     icon: '👑', description: 'NPCs ignore you (passive)'          },
    cheese_armor:  { name: 'Cheese Armor',  icon: '🫕', description: '-30% dmg taken (passive)'           },
    moon_shard:    { name: 'Moon Shard',    icon: '🌙', description: 'triple jump (passive)'              },
    spring_shoes:  { name: 'Spring Shoes',  icon: '👟', description: 'double jump (passive)'              },
    void_blade:    { name: 'Void Blade',    icon: '🗡',  description: '+40 dmg +2 range (passive)'         },
    lucky_charm:   { name: 'Lucky Charm',   icon: '🍀', description: 'double loot chance (passive)'       },
    laser_pointer: { name: 'Laser Pointer', icon: '🔴', description: 'NPCs attack 50% less (passive)'     },
    // INTRODUCING 25 NEW ITEMS!! act now!! operators standing by!!  -- infomercial dev
    dragon_scale:    { name: 'Dragon Scale',    icon: '🐉', description: '-40% dmg taken (passive)'           },
    freeze_ray:      { name: 'Freeze Ray',      icon: '🧊', description: 'freeze nearest NPC 5s (E)'         },
    gravity_boots:   { name: 'Gravity Boots',   icon: '👢', description: 'walk up walls somehow (passive)'   },
    thunder_staff:   { name: 'Thunder Staff',   icon: '⚡', description: '+30 dmg +3 range lightning (passive)'   },
    shadow_cloak:    { name: 'Shadow Cloak',    icon: '🧥', description: 'invisible for 8s (E)'              },
    berserker_potion:{ name: 'Berserker Potion',icon: '💢', description: 'x3 dmg x2 speed 6s (E)'           },
    holy_grail:      { name: 'Holy Grail',      icon: '🌟', description: '+50 max HP permanently (passive)'  },
    void_grenade:    { name: 'Void Grenade',    icon: '💣', description: '80 dmg AoE 12r (E)'               },
    cat_flute:       { name: 'Cat Flute',       icon: '🎵', description: 'charm NPC 10s (E)'                 },
    ninja_stars:     { name: 'Ninja Stars',     icon: '⭐', description: '15 dmg x3 targets (E)'              },
    ice_shard:       { name: 'Ice Shard',       icon: '💠', description: '20 dmg + slow 4s (E)'             },
    resurrection_stone:{ name: 'Rez Stone',     icon: '📿', description: 'res all nearby dead... wait (E)'  },
    chaos_orb:       { name: 'Chaos Orb',       icon: '🔮', description: 'random chaos in 20r (E)'          },
    loot_magnet:     { name: 'Loot Magnet',     icon: '🧲', description: 'x3 drop rate (passive)'           },
    smoke_bomb:      { name: 'Smoke Bomb',      icon: '💨', description: 'NPCs lose target 8s (E)'          },
    cursed_lute:     { name: 'Cursed Lute',     icon: '🏻', description: 'bard stun on hit (passive)'       },
    storm_gem:       { name: 'Storm Gem',       icon: '⚡', description: '+25 dmg chain lightning (passive)'     },
    reaper_scythe:   { name: 'Reaper Scythe',   icon: '☠', description: 'execute below 30% HP (passive)'     },
    plague_vial:     { name: 'Plague Vial',     icon: '⚗', description: '5 dmg/s to all in 15r (E)'        },
    mirror_shield:   { name: 'Mirror Shield',   icon: '🛡', description: 'reflect 50% dmg (passive)'         },
    hacker_drive:    { name: 'Hacker Drive',    icon: '💾', description: 'disable NPC domain 12s (E)'       },
    thunder_ring:    { name: 'Thunder Ring',    icon: '💍', description: 'zap attacker on hit (passive)'    },
    phantom_cloak:   { name: 'Phantom Cloak',   icon: '👻', description: '6s complete invis (E)'            },
    arena_trophy:    { name: 'Arena Trophy',    icon: '🏆', description: '+10 dmg per kill (passive)'        },
    prophecy_tome:   { name: 'Prophecy Tome',   icon: '📚', description: 'see next domain before cast (E)'  },
};

// all item types as an array -- used for mystery box random picks
export const ALL_ITEM_TYPES: ItemType[] = Object.keys(ITEM_INFO) as ItemType[];

// loot tables per npc type -- null = nothing
export const LOOT_TABLE: Record<string, (ItemType | null)[]> = {
    // basic cats
    normal:   ['fish', 'fish', 'cat_charm', 'cheese', 'bandage', null, null],
    cat:      ['fish', 'fish', 'cat_charm', 'cheese', null, null, null],
    // special cat subtypes
    jesus:    ['holy_water', 'star_piece', 'mega_potion', 'cat_charm', null],
    robot:    ['lightning', 'plasma_cannon', 'shield', 'cat_charm', null],
    orb:      ['time_crystal', 'void_shard', 'teleporter', null, null],
    angel:    ['mega_potion', 'star_piece', 'cat_crown', 'bandage', null],
    pirate:   ['boomerang', 'cheese_wheel', 'lucky_charm', 'cheese', null],
    wizard:   ['time_crystal', 'mystery_box', 'rainbow', 'cursed_egg', null],
    vampire:  ['cursed_ring', 'onion_layer', 'soul_gem', 'bandage', null],
    disco:    ['disco_ball', 'party_hat', 'hot_sauce', 'fish', null],
    shadow:   ['void_shard', 'void_blade', 'laser_pointer', 'catnip', null],
    // special npcs
    barney:   ['mega_potion', 'cat_crown', 'party_hat', 'uwu_scroll', null],
    emo:      ['void_shard', 'void_shard', 'catnip', 'disco_ball', 'cursed_ring', null],
    shrek:    ['onion', 'onion', 'potion', 'shrek_ears', 'bomb', null],
    buffcat:  ['flaming_sword', 'giant_hammer', 'spring_shoes', 'cat_charm', null],
    voidcat:  ['void_shard', 'time_crystal', 'void_armor', 'void_blade', null],
    hybrid:   ['fish', 'catnip', 'moon_shard', 'teleporter', null],
    default:  ['fish', 'cat_charm', 'cheese', null, null, null],
    // 20 new types -- loot their stuff meow
    bard:         ['cursed_lute', 'cat_flute', 'fish', 'catnip', null, null],
    mime:         ['smoke_bomb', 'phantom_cloak', 'shadow_cloak', null, null],
    berserker:    ['berserker_potion', 'giant_hammer', 'reaper_scythe', null, null],
    witch:        ['chaos_orb', 'plague_vial', 'cursed_ring', 'mystery_box', null],
    grim_reaper:  ['reaper_scythe', 'soul_gem', 'resurrection_stone', null, null],
    ice_wizard:   ['freeze_ray', 'ice_shard', 'time_crystal', null, null],
    fire_demon:   ['flaming_sword', 'berserker_potion', 'hot_sauce', null, null],
    thunder_god:  ['thunder_staff', 'thunder_ring', 'storm_gem', 'lightning', null],
    medic:        ['mega_potion', 'bandage', 'holy_grail', 'potion', null],
    hacker:       ['hacker_drive', 'laser_pointer', 'shield', 'cat_charm', null],
    barbarian:    ['giant_hammer', 'berserker_potion', 'dragon_scale', null, null],
    jester:       ['chaos_orb', 'mystery_box', 'party_hat', 'cursed_egg', null],
    fallen_angel: ['void_shard', 'soul_gem', 'shadow_cloak', 'void_armor', null],
    robot_supreme:['plasma_cannon', 'hacker_drive', 'laser_pointer', 'shield', null],
    cloud_surfer: ['gravity_boots', 'moon_shard', 'spring_shoes', 'fish', null],
    plumber:      ['smoke_bomb', 'teleporter', 'warp_stone', 'cheese', null],
    gladiator:    ['arena_trophy', 'mirror_shield', 'sword', 'cat_charm', null],
    oracle:       ['prophecy_tome', 'time_crystal', 'chaos_orb', 'catnip', null],
    monk:         ['holy_grail', 'bandage', 'star_piece', 'mega_potion', null],
    pirate_ghost: ['void_grenade', 'cursed_ring', 'ninja_stars', 'fish', null],
};

// module-level set -- passives dont consume on use
const PASSIVES: Set<ItemType> = new Set([
    'sword', 'cat_charm', 'flaming_sword', 'giant_hammer', 'void_armor',
    'cursed_ring', 'shrek_ears', 'cat_crown', 'cheese_armor',
    'moon_shard', 'spring_shoes', 'void_blade', 'lucky_charm', 'laser_pointer',
    // new passives nyaa~
    'dragon_scale', 'gravity_boots', 'thunder_staff', 'holy_grail',
    'loot_magnet', 'cursed_lute', 'storm_gem', 'reaper_scythe',
    'mirror_shield', 'thunder_ring', 'arena_trophy',
]);

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
        const type = item.type;
        if (!PASSIVES.has(type)) {
            // consume it -- one less in the stack
            item.quantity--;
            if (item.quantity <= 0) this.slots[this.selectedSlot] = null;
            this.onInventoryChange?.();
        }
        return type;
    }

    // bonus attack damage from equipped passive item
    public getAttackBonus(): number {
        const t = this.getEquipped()?.type;
        if (!t) return 0;
        if (t === 'sword') return 20;
        if (t === 'cat_charm') return 3;
        if (t === 'flaming_sword') return 35;
        if (t === 'giant_hammer') return 50;
        if (t === 'void_blade') return 40;
        return 0;
    }

    // bonus attack range from equipped passive item
    public getRangeBonus(): number {
        const t = this.getEquipped()?.type;
        if (!t) return 0;
        if (t === 'cat_charm') return 1.0;
        if (t === 'sword') return 0.5;
        if (t === 'giant_hammer') return -1.5;
        if (t === 'void_blade') return 2.0;
        return 0;
    }

    // multiplicative damage RECEIVED modifier -- void_armor, cheese_armor, cursed_ring
    public getDamageTakenMult(): number {
        const t = this.getEquipped()?.type;
        if (t === 'void_armor') return 0.5;
        if (t === 'cheese_armor') return 0.7;
        if (t === 'cursed_ring') return 2.0;
        return 1.0;
    }

    // multiplicative damage DEALT modifier -- cursed_ring doubles output
    public getDamageDealtMult(): number {
        return this.getEquipped()?.type === 'cursed_ring' ? 2.0 : 1.0;
    }

    public isMudImmune(): boolean { return this.getEquipped()?.type === 'shrek_ears'; }
    public isCatCrownActive(): boolean { return this.getEquipped()?.type === 'cat_crown'; }
    public isLaserPointerActive(): boolean { return this.getEquipped()?.type === 'laser_pointer'; }
    public isLuckyCharmActive(): boolean { return this.getEquipped()?.type === 'lucky_charm'; }

    // jump height multiplier from equipped item
    public getJumpMult(): number {
        const t = this.getEquipped()?.type;
        if (t === 'moon_shard') return 3.0;
        if (t === 'spring_shoes') return 2.0;
        return 1.0;
    }

    // roll a random drop from an npc type
    public static rollLoot(npcType: string): ItemType | null {
        const table = LOOT_TABLE[npcType] ?? LOOT_TABLE['default'];
        const roll = table[Math.floor(Math.random() * table.length)];
        return roll ?? null;
    }
}
