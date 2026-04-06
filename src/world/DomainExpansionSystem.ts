// DomainExpansionSystem.ts
// DOMAIN EXPANSION!! exactly like in the show -- an enclosed reality manifested from the soul.
// inside ur domain ur cursed technique is guaranteed to hit. 100%. automatic. no dodging.
// ngl this is the coolest thing in this codebase and nobody will appreciate it. whatever.

import * as THREE from 'three';

export interface DomainDef {
    name: string;
    npcType: string;
    flavorText: string;
    radius: number;
    domainColor: number;
    fogColor: number;
    damage: number;         // DPS to player inside domain
    npcDamage: number;      // DPS to NPCs (player domain only)
    stunPulse: number;
    healPerSec: number;
    duration: number;
    guaranteedHit: boolean;
    isPlayerDomain: boolean;
    killBurst: number;      // damage detonation when domain collapses -- punish staying inside
    executeHpPct: number;   // execute player/npc when they drop below this HP fraction (0 = off)
    pullRadius: number;     // domain sucks anything within this radius inside at open time
}

export const DOMAIN_DEFS: Record<string, DomainDef> = {
    // ----- standard cat subtypes -----
    normal:   {
        name: 'Infinite Meow',
        npcType: 'normal', flavorText: 'meow... MEOW!! THE MEOWING NEVER ENDS!!',
        radius: 36, domainColor: 0xff8800, fogColor: 0xff6600,
        damage: 12, npcDamage: 0, stunPulse: 1.5, healPerSec: 3, duration: 12, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 35, executeHpPct: 0.15, pullRadius: 46,
    },
    jesus:    {
        name: 'Divine Purification',
        npcType: 'jesus', flavorText: 'FORGIVE THEM FOR THEY KNOW NOT WHAT THEY DO',
        radius: 34, domainColor: 0xffeeaa, fogColor: 0xffffcc,
        damage: 20, npcDamage: 0, stunPulse: 0, healPerSec: 15, duration: 14, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 40, executeHpPct: 0.20, pullRadius: 42,
    },
    robot:    {
        name: 'Infinite Processing Loop',
        npcType: 'robot', flavorText: 'CALCULATING... CALCULATING... CALCULATING...',
        radius: 30, domainColor: 0x00ffcc, fogColor: 0x003322,
        damage: 18, npcDamage: 0, stunPulse: 0, healPerSec: 5, duration: 10, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 50, executeHpPct: 0.10, pullRadius: 38,
    },
    orb:      {
        name: 'Omniscient Spherical Truth',
        npcType: 'orb', flavorText: 'THE ORB KNOWS ALL. THE ORB SEES ALL.',
        radius: 42, domainColor: 0xcc00ff, fogColor: 0x220044,
        damage: 15, npcDamage: 0, stunPulse: 2, healPerSec: 2, duration: 15, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 30, executeHpPct: 0.15, pullRadius: 54,
    },
    angel:    {
        name: 'Paradise of Feathers',
        npcType: 'angel', flavorText: 'THIS WORLD IS MINE. YOU CANNOT ESCAPE DIVINITY.',
        radius: 38, domainColor: 0xeeeeff, fogColor: 0xccddff,
        damage: 16, npcDamage: 0, stunPulse: 1, healPerSec: 20, duration: 13, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 38, executeHpPct: 0.18, pullRadius: 50,
    },
    pirate:   {
        name: 'Davy Jones\' Locker',
        npcType: 'pirate', flavorText: 'YARR!! WELCOME TO THE BOTTOM OF THE SEA!!',
        radius: 34, domainColor: 0x004488, fogColor: 0x002244,
        damage: 13, npcDamage: 0, stunPulse: 3.5, healPerSec: 3, duration: 11, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 25, executeHpPct: 0.14, pullRadius: 43,
    },
    wizard:   {
        name: 'Infinite Magic Loop',
        npcType: 'wizard', flavorText: 'REALITY IS JUST A SPELL THAT HASN\'T EXPIRED YET',
        radius: 36, domainColor: 0x8800ff, fogColor: 0x220033,
        damage: 18, npcDamage: 0, stunPulse: 1.5, healPerSec: 6, duration: 12, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 40, executeHpPct: 0.15, pullRadius: 48,
    },
    vampire:  {
        name: 'Blood Moon Palace',
        npcType: 'vampire', flavorText: 'YOUR BLOOD IS THE PRICE OF ENTRY.',
        radius: 31, domainColor: 0xcc0022, fogColor: 0x440011,
        damage: 24, npcDamage: 0, stunPulse: 0, healPerSec: 18, duration: 10, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 35, executeHpPct: 0.25, pullRadius: 41,
    },
    disco:    {
        name: 'Infinite Groove',
        npcType: 'disco', flavorText: 'YOU CANNOT LEAVE THE DANCE FLOOR. NOBODY LEAVES.',
        radius: 36, domainColor: 0xff00ff, fogColor: 0x440044,
        damage: 14, npcDamage: 0, stunPulse: 3, healPerSec: 3, duration: 14, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 30, executeHpPct: 0.12, pullRadius: 48,
    },
    shadow:   {
        name: 'Coffin of the Iron Mountain',
        npcType: 'shadow', flavorText: 'ALL PATHS LEAD TO DARKNESS. ALL FUTURES ERASED.',
        radius: 34, domainColor: 0x111111, fogColor: 0x000000,
        damage: 30, npcDamage: 0, stunPulse: 1, healPerSec: 5, duration: 11, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 60, executeHpPct: 0.20, pullRadius: 46,
    },
    // ----- special npcs -----
    barney:   {
        name: 'Boundless Love Experience',
        npcType: 'barney', flavorText: 'I LOVE YOU, YOU LOVE ME, YOU CANNOT LEAVE THIS PLACE',
        radius: 48, domainColor: 0x6B2FA0, fogColor: 0x3d1a60,
        damage: 10, npcDamage: 0, stunPulse: 4, healPerSec: 25, duration: 20, guaranteedHit: false, isPlayerDomain: false,
        killBurst: 20, executeHpPct: 0.10, pullRadius: 62,
    },
    emo:      {
        name: 'Hollow Purple Despair',
        npcType: 'emo', flavorText: 'nobody understands me. especially not you. especially not here.',
        radius: 36, domainColor: 0x110022, fogColor: 0x060010,
        damage: 28, npcDamage: 0, stunPulse: 2, healPerSec: 8, duration: 13, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 55, executeHpPct: 0.25, pullRadius: 48,
    },
    shrek:    {
        name: 'Swamp of Eternal Despair',
        npcType: 'shrek', flavorText: 'THIS IS MY SWAMP. THIS HAS ALWAYS BEEN MY SWAMP.',
        radius: 46, domainColor: 0x336600, fogColor: 0x1a3300,
        damage: 18, npcDamage: 0, stunPulse: 0, healPerSec: 10, duration: 16, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 40, executeHpPct: 0.15, pullRadius: 60,
    },
    buffcat:  {
        name: 'Iron Body Infinite Circuit',
        npcType: 'buffcat', flavorText: 'DO YOU EVEN LIFT? INSIDE MY DOMAIN, YOU CANNOT.',
        radius: 30, domainColor: 0xff6600, fogColor: 0x330d00,
        damage: 35, npcDamage: 0, stunPulse: 0, healPerSec: 12, duration: 10, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 70, executeHpPct: 0.30, pullRadius: 41,
    },
    voidcat:  {
        name: 'Infinite Darkness Eternal',
        npcType: 'voidcat', flavorText: 'you were always in the dark. you just never noticed.',
        radius: 42, domainColor: 0x110011, fogColor: 0x000000,
        damage: 22, npcDamage: 0, stunPulse: 2.5, healPerSec: 6, duration: 14, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 50, executeHpPct: 0.20, pullRadius: 55,
    },
    hybrid:   {
        name: 'Chaotic Soul Fusion',
        npcType: 'hybrid', flavorText: 'WHAT AM I? WHAT ARE YOU? WHAT IS ANY OF THIS??',
        radius: 34, domainColor: 0xff44ff, fogColor: 0x220022,
        damage: 18, npcDamage: 0, stunPulse: 1, healPerSec: 5, duration: 11, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 40, executeHpPct: 0.15, pullRadius: 46,
    },
    // ----- POLITICAL ZONE -- you did not expect this. nobody did. -----
    obama:    {
        name: 'Hope and Change',
        npcType: 'obama', flavorText: 'YES WE CAN. AND YES, YOU ARE TRAPPED IN HERE WITH ME.',
        radius: 33, domainColor: 0x1A53FF, fogColor: 0x001155,
        damage: 14, npcDamage: 0, stunPulse: 2.5, healPerSec: 4, duration: 13, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 35, executeHpPct: 0.13, pullRadius: 42,
    },
    trump:    {
        name: 'Tremendous Domain',
        npcType: 'trump', flavorText: "IT'S THE GREATEST DOMAIN. PEOPLE ARE SAYING IT'S THE BEST. BELIEVE ME.",
        radius: 38, domainColor: 0xFFD700, fogColor: 0x332200,
        damage: 22, npcDamage: 0, stunPulse: 1.5, healPerSec: 3, duration: 14, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 50, executeHpPct: 0.18, pullRadius: 49,
    },
    // henceforth: 20 noble domains hath been inscribed into the sacred domain registry. by my honor.
    chef: {
        name: "Gordon's Kitchen of No Escape",
        npcType: 'chef', flavorText: "THIS KITCHEN IS CLOSED. YOU ARE DONE. RAW. ABSOLUTELY RAW.",
        radius: 30, domainColor: 0xff6600, fogColor: 0x331100,
        damage: 14, npcDamage: 0, stunPulse: 2, healPerSec: 8, duration: 11, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 30, executeHpPct: 0.15, pullRadius: 38,
    },
    astronaut: {
        name: "Zero Gravity Chamber",
        npcType: 'astronaut', flavorText: "GRAVITY IS A CONCEPT. YOU HAVE LEFT THAT CONCEPT BEHIND.",
        radius: 38, domainColor: 0x0044cc, fogColor: 0x001133,
        damage: 12, npcDamage: 0, stunPulse: 0, healPerSec: 2, duration: 13, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 25, executeHpPct: 0.12, pullRadius: 50,
    },
    cowboy: {
        name: "OK Corral of Reckoning",
        npcType: 'cowboy', flavorText: "THIS TOWN AIN'T BIG ENOUGH FOR THE TWO OF US. SPOILER: IT'S ME.",
        radius: 32, domainColor: 0xaa7700, fogColor: 0x331100,
        damage: 20, npcDamage: 0, stunPulse: 3, healPerSec: 2, duration: 10, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 40, executeHpPct: 0.20, pullRadius: 40,
    },
    ninja: {
        name: "Shadow Step Void",
        npcType: 'ninja', flavorText: "YOU CANNOT FIGHT WHAT YOU CANNOT SEE. YOU CANNOT SEE ANYTHING.",
        radius: 28, domainColor: 0x110011, fogColor: 0x000000,
        damage: 25, npcDamage: 0, stunPulse: 1, healPerSec: 3, duration: 9, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 50, executeHpPct: 0.25, pullRadius: 36,
    },
    samurai: {
        name: "Bushido Death Field",
        npcType: 'samurai', flavorText: "THERE IS NO HONOR IN SURVIVING THIS. THERE IS ONLY THE BLADE.",
        radius: 32, domainColor: 0xcc2200, fogColor: 0x220000,
        damage: 28, npcDamage: 0, stunPulse: 0, healPerSec: 4, duration: 10, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 55, executeHpPct: 0.22, pullRadius: 40,
    },
    clown: {
        name: "Infinite Birthday Horror",
        npcType: 'clown', flavorText: "DID YOU KNOW THE AVERAGE PERSON FEARS CLOWNS? YOU ARE BELOW AVERAGE.",
        radius: 36, domainColor: 0xff00ff, fogColor: 0x330033,
        damage: 15, npcDamage: 0, stunPulse: 1, healPerSec: 3, duration: 14, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 35, executeHpPct: 0.10, pullRadius: 48,
    },
    zombie: {
        name: "Undead Horde Rising",
        npcType: 'zombie', flavorText: "WE WERE ALL LIKE YOU ONCE. THEN WE GOT BETTER. SORT OF.",
        radius: 34, domainColor: 0x446622, fogColor: 0x111100,
        damage: 10, npcDamage: 0, stunPulse: 4, healPerSec: 5, duration: 15, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 20, executeHpPct: 0.08, pullRadius: 44,
    },
    pharaoh: {
        name: "Eternal Tomb of Ra",
        npcType: 'pharaoh', flavorText: "YOU HAVE ENTERED THE PYRAMID. YOU WILL BECOME PART OF IT.",
        radius: 40, domainColor: 0xFFD700, fogColor: 0x221100,
        damage: 18, npcDamage: 0, stunPulse: 2, healPerSec: 3, duration: 12, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 45, executeHpPct: 0.20, pullRadius: 52,
    },
    knight: {
        name: "Iron Fortress Eternal",
        npcType: 'knight', flavorText: "NONE SHALL PASS. I MEAN IT. NONE.",
        radius: 30, domainColor: 0x335588, fogColor: 0x111133,
        damage: 10, npcDamage: 0, stunPulse: 0, healPerSec: 12, duration: 14, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 30, executeHpPct: 0.12, pullRadius: 38,
    },
    scientist: {
        name: "Laboratory of Experiments",
        npcType: 'scientist', flavorText: "YOU ARE NOW THE EXPERIMENT. THE RESULTS WILL NOT BE SHARED WITH YOU.",
        radius: 34, domainColor: 0x00ffcc, fogColor: 0x003322,
        damage: 20, npcDamage: 0, stunPulse: 1, healPerSec: 4, duration: 11, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 40, executeHpPct: 0.18, pullRadius: 44,
    },
    mummy: {
        name: "Cursed Burial Chamber",
        npcType: 'mummy', flavorText: "THE CURSE IS OLDER THAN YOUR CONCEPT OF TIME. YOU FEEL IT NOW.",
        radius: 32, domainColor: 0xaa9955, fogColor: 0x221100,
        damage: 12, npcDamage: 0, stunPulse: 3, healPerSec: 3, duration: 13, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 28, executeHpPct: 0.15, pullRadius: 42,
    },
    detective: {
        name: "Crime Scene No Exit",
        npcType: 'detective', flavorText: "I HAD YOU FIGURED OUT FROM THE START. THE CHALK OUTLINE IS ALREADY DRAWN.",
        radius: 28, domainColor: 0x554433, fogColor: 0x221100,
        damage: 15, npcDamage: 0, stunPulse: 2, healPerSec: 2, duration: 12, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 32, executeHpPct: 0.18, pullRadius: 36,
    },
    firefighter: {
        name: "Inferno Zone",
        npcType: 'firefighter', flavorText: "FIRE CANNOT BE CONTAINED. NEITHER CAN THIS DOMAIN. STAND BACK.",
        radius: 32, domainColor: 0xff3300, fogColor: 0x220000,
        damage: 22, npcDamage: 0, stunPulse: 2, healPerSec: 3, duration: 10, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 42, executeHpPct: 0.20, pullRadius: 42,
    },
    biker: {
        name: "Highway to Hell",
        npcType: 'biker', flavorText: "THERE'S ONLY ONE ROAD IN THIS DOMAIN. IT GOES ONE DIRECTION.",
        radius: 36, domainColor: 0x333333, fogColor: 0x111111,
        damage: 18, npcDamage: 0, stunPulse: 0, healPerSec: 2, duration: 11, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 38, executeHpPct: 0.20, pullRadius: 46,
    },
    princess: {
        name: "Pretty Prison of Pink Death",
        npcType: 'princess', flavorText: "YOU THOUGHT THIS WAS CUTE. IT IS. IT'S ALSO YOUR FUNERAL.",
        radius: 34, domainColor: 0xff44aa, fogColor: 0x330022,
        damage: 16, npcDamage: 0, stunPulse: 3, healPerSec: 6, duration: 13, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 36, executeHpPct: 0.14, pullRadius: 44,
    },
    ghost: {
        name: "Haunted Manor of No Return",
        npcType: 'ghost', flavorText: "YOU CAN'T HURT WHAT YOU CAN'T TOUCH. YOU HAVE BEEN UNABLE TO TOUCH ANYTHING HERE.",
        radius: 36, domainColor: 0x8888ff, fogColor: 0x110033,
        damage: 14, npcDamage: 0, stunPulse: 2, healPerSec: 2, duration: 14, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 30, executeHpPct: 0.12, pullRadius: 48,
    },
    luchador: {
        name: "Wrestling Ring of Doom",
        npcType: 'luchador', flavorText: "THE RING IS SEALED. THE REF HAS LEFT. THERE ARE NO RULES. LUCHA.",
        radius: 30, domainColor: 0x00cc44, fogColor: 0x001100,
        damage: 20, npcDamage: 0, stunPulse: 1, healPerSec: 4, duration: 11, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 44, executeHpPct: 0.22, pullRadius: 40,
    },
    fairy: {
        name: "Enchanted Grove of Entrapment",
        npcType: 'fairy', flavorText: "IT'S SO PRETTY IN HERE ISN'T IT? YOU WILL NEVER LEAVE.",
        radius: 38, domainColor: 0xff88ff, fogColor: 0x330033,
        damage: 10, npcDamage: 0, stunPulse: 4, healPerSec: 20, duration: 16, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 22, executeHpPct: 0.10, pullRadius: 50,
    },
    caveman: {
        name: "Primordial Hunting Ground",
        npcType: 'caveman', flavorText: "CLUB. BIG CLUB. YOU ARE THE THING THAT GETS CLUBBED NOW.",
        radius: 30, domainColor: 0x8B4513, fogColor: 0x221100,
        damage: 24, npcDamage: 0, stunPulse: 0, healPerSec: 5, duration: 10, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 50, executeHpPct: 0.25, pullRadius: 38,
    },
    alien: {
        name: "Extraterrestrial Abduction Bay",
        npcType: 'alien', flavorText: "YOUR BIOLOGY IS FASCINATING. UNFORTUNATELY YOU WILL NOT SURVIVE THE STUDY.",
        radius: 40, domainColor: 0x00ff88, fogColor: 0x002211,
        damage: 16, npcDamage: 0, stunPulse: 1, healPerSec: 3, duration: 13, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 35, executeHpPct: 0.15, pullRadius: 52,
    },
    bard: {
        name: "Eternal Ballad Stage",
        npcType: 'bard', flavorText: "THE MUSIC NEVER STOPS. THE ENEMY NEVER MOVES. ♪ CHECKMATE ♪",
        radius: 32, domainColor: 0xffaa00, fogColor: 0x221100,
        damage: 12, npcDamage: 0, stunPulse: 2, healPerSec: 8, duration: 11, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 30, executeHpPct: 0.18, pullRadius: 40,
    },
    mime: {
        name: "Silent Prison (very real walls)",
        npcType: 'mime', flavorText: "YOU ARE TRAPPED IN AN INVISIBLE BOX. THIS IS NOT A JOKE. THE BOX IS REAL.",
        radius: 28, domainColor: 0xffffff, fogColor: 0x333333,
        damage: 20, npcDamage: 0, stunPulse: 0, healPerSec: 0, duration: 9, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 40, executeHpPct: 0.22, pullRadius: 36,
    },
    berserker: {
        name: "Eternal Rage Field",
        npcType: 'berserker', flavorText: "EVERYTHING INSIDE THIS DOMAIN IS EXPERIENCING RAGE. EVEN THE FLOOR.",
        radius: 35, domainColor: 0xff2200, fogColor: 0x330000,
        damage: 30, npcDamage: 0, stunPulse: 1, healPerSec: 2, duration: 8, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 60, executeHpPct: 0.30, pullRadius: 44,
    },
    witch: {
        name: "Hexed Cauldron Circle",
        npcType: 'witch', flavorText: "EVERY STEP YOU TAKE IS CURSED. I COUNTED. THAT'S YOUR LAST ONE.",
        radius: 33, domainColor: 0x7700bb, fogColor: 0x110022,
        damage: 18, npcDamage: 0, stunPulse: 1, healPerSec: 6, duration: 12, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 45, executeHpPct: 0.20, pullRadius: 42,
    },
    grim_reaper: {
        name: "Reaper's Final Garden",
        npcType: 'grim_reaper', flavorText: "YOU ARE ALREADY ON THE LIST. THIS DOMAIN IS JUST THE PAPERWORK.",
        radius: 38, domainColor: 0x222222, fogColor: 0x000000,
        damage: 25, npcDamage: 0, stunPulse: 0, healPerSec: 0, duration: 15, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 70, executeHpPct: 0.35, pullRadius: 50,
    },
    ice_wizard: {
        name: "Absolute Zero Tundra",
        npcType: 'ice_wizard', flavorText: "ALL MOTION CEASES INSIDE THIS DOMAIN. THE COLD DOES THAT.",
        radius: 36, domainColor: 0x00ccff, fogColor: 0x002233,
        damage: 15, npcDamage: 0, stunPulse: 3, healPerSec: 4, duration: 13, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 35, executeHpPct: 0.15, pullRadius: 46,
    },
    fire_demon: {
        name: "Infernal Hellscape",
        npcType: 'fire_demon', flavorText: "THIS IS YOUR WARMUP. ALSO YOU ARE ON FIRE. BOTH ARE TRUE.",
        radius: 34, domainColor: 0xff5500, fogColor: 0x330800,
        damage: 28, npcDamage: 0, stunPulse: 0, healPerSec: 0, duration: 10, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 55, executeHpPct: 0.28, pullRadius: 43,
    },
    thunder_god: {
        name: "Storm Throne of Thunder",
        npcType: 'thunder_god', flavorText: "THE CLOUDS OBEY. THE LIGHTNING IS ALREADY INSIDE WITH YOU.",
        radius: 42, domainColor: 0xffee00, fogColor: 0x221100,
        damage: 22, npcDamage: 0, stunPulse: 2, healPerSec: 3, duration: 12, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 50, executeHpPct: 0.25, pullRadius: 55,
    },
    medic: {
        name: "Emergency Triage Dome",
        npcType: 'medic', flavorText: "HEALING IS MY DOMAIN. YOU WILL BE HEALED BY FORCE.",
        radius: 30, domainColor: 0x00ff44, fogColor: 0x001100,
        damage: 8, npcDamage: 0, stunPulse: 0, healPerSec: 20, duration: 14, guaranteedHit: false, isPlayerDomain: false,
        killBurst: 20, executeHpPct: 0.10, pullRadius: 38,
    },
    hacker: {
        name: "Root Access Protocol",
        npcType: 'hacker', flavorText: "YOU ARE INSIDE MY SYSTEM NOW. I OWN EVERY VARIABLE. INCLUDING YOU.",
        radius: 31, domainColor: 0x00ff00, fogColor: 0x001100,
        damage: 14, npcDamage: 0, stunPulse: 1, healPerSec: 5, duration: 11, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 32, executeHpPct: 0.19, pullRadius: 40,
    },
    barbarian: {
        name: "Ancient Warbringer's Field",
        npcType: 'barbarian', flavorText: "CROM LAUGHS AT YOU. SO DO I. WE BOTH HAVE AXES.",
        radius: 36, domainColor: 0xaa4400, fogColor: 0x220800,
        damage: 26, npcDamage: 0, stunPulse: 1, healPerSec: 3, duration: 9, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 55, executeHpPct: 0.28, pullRadius: 45,
    },
    jester: {
        name: "Carnival of Absolute Chaos",
        npcType: 'jester', flavorText: "THE RULES DON'T APPLY HERE. I CHANGED THEM. HA HA HA.",
        radius: 34, domainColor: 0xff00ff, fogColor: 0x220022,
        damage: 17, npcDamage: 0, stunPulse: 2, healPerSec: 7, duration: 13, guaranteedHit: false, isPlayerDomain: false,
        killBurst: 38, executeHpPct: 0.20, pullRadius: 43,
    },
    fallen_angel: {
        name: "The Broken Halo Sanctum",
        npcType: 'fallen_angel', flavorText: "HEAVEN REJECTED THIS DOMAIN. HELL WASN'T INTERESTED EITHER. I MADE MY OWN.",
        radius: 37, domainColor: 0x8800cc, fogColor: 0x110022,
        damage: 21, npcDamage: 0, stunPulse: 1, healPerSec: 4, duration: 12, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 48, executeHpPct: 0.22, pullRadius: 47,
    },
    robot_supreme: {
        name: "Maximum Efficiency Grid",
        npcType: 'robot_supreme', flavorText: "CALCULATED. OPTIMIZED. YOU HAVE A 0% CHANCE OF SURVIVING. I VERIFIED.",
        radius: 40, domainColor: 0x00aaff, fogColor: 0x001122,
        damage: 19, npcDamage: 0, stunPulse: 1, healPerSec: 2, duration: 14, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 42, executeHpPct: 0.20, pullRadius: 52,
    },
    cloud_surfer: {
        name: "Above the Storm",
        npcType: 'cloud_surfer', flavorText: "YOU ARE TOO HIGH. I MEAN ALTITUDE. THE AIR IS THIN. COPE.",
        radius: 45, domainColor: 0x88ddff, fogColor: 0x223344,
        damage: 10, npcDamage: 0, stunPulse: 0, healPerSec: 10, duration: 16, guaranteedHit: false, isPlayerDomain: false,
        killBurst: 25, executeHpPct: 0.12, pullRadius: 58,
    },
    plumber: {
        name: "The Infinite Pipe Network",
        npcType: 'plumber', flavorText: "I HAVE BEEN INSIDE EVERY WALL. I KNOW WHERE YOU GO. THE PIPES NEVER END.",
        radius: 30, domainColor: 0x00aa44, fogColor: 0x001100,
        damage: 16, npcDamage: 0, stunPulse: 0, healPerSec: 6, duration: 10, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 35, executeHpPct: 0.18, pullRadius: 38,
    },
    gladiator: {
        name: "The Eternal Arena",
        npcType: 'gladiator', flavorText: "THE CROWD IS WATCHING. THEY ARE NOT YOUR FRIENDS. NEITHER AM I.",
        radius: 38, domainColor: 0xccaa00, fogColor: 0x221100,
        damage: 23, npcDamage: 0, stunPulse: 1, healPerSec: 2, duration: 11, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 52, executeHpPct: 0.26, pullRadius: 48,
    },
    oracle: {
        name: "The Prophecy Chamber",
        npcType: 'oracle', flavorText: "I FORESAW THIS DOMAIN EXPANSION. I FORESAW YOUR DEFEAT. I DID NOT FORESAW A WAY OUT FOR YOU.",
        radius: 35, domainColor: 0xccbbff, fogColor: 0x110022,
        damage: 13, npcDamage: 0, stunPulse: 2, healPerSec: 5, duration: 14, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 30, executeHpPct: 0.16, pullRadius: 44,
    },
    monk: {
        name: "Void of Perfect Stillness",
        npcType: 'monk', flavorText: "SILENCE. THE DOMAIN IS SILENCE. YOUR SCREAMING IS MUFFLED. GOOD.",
        radius: 33, domainColor: 0xeeddbb, fogColor: 0x221100,
        damage: 11, npcDamage: 0, stunPulse: 0, healPerSec: 15, duration: 15, guaranteedHit: false, isPlayerDomain: false,
        killBurst: 22, executeHpPct: 0.10, pullRadius: 42,
    },
    pirate_ghost: {
        name: "The Damned Vessel's Wake",
        npcType: 'pirate_ghost', flavorText: "YOU SAIL MY CURSED SEAS NOW. LAND IS A MEMORY. SO ARE YOUR TREATS.",
        radius: 39, domainColor: 0x004466, fogColor: 0x000011,
        damage: 20, npcDamage: 0, stunPulse: 1, healPerSec: 3, duration: 13, guaranteedHit: true, isPlayerDomain: false,
        killBurst: 45, executeHpPct: 0.22, pullRadius: 50,
    },
    // ----- PLAYER DOMAIN -- the sage awakens. honestly nobody expected this. -----
    player: {
        name: 'Aberrant Throne',
        npcType: 'player',
        flavorText: 'I DWELL IN A DREAM, BY A LAW OF MY OWN. STEP INSIDE MY THRONE AND CEASE TO EXIST.',
        radius: 34, domainColor: 0x4400aa, fogColor: 0x110033,
        damage: 0, npcDamage: 22,
        stunPulse: 0, healPerSec: 0, duration: 20, guaranteedHit: true, isPlayerDomain: true,
        killBurst: 80, executeHpPct: 0.12, pullRadius: 43,
    },
};

export interface ActiveDomain {
    npc: { getPosition(): THREE.Vector3; takeDamage(d: number): void; getType(): string; hp: number; maxHp: number; };
    def: DomainDef;
    castPos: THREE.Vector3;         // FIXED -- the domain never moves from where it was cast
    playerLockedInside: boolean;    // true = player was inside when cast, locked in til domain collapses
    stunPulseTimer: number;
    uniqueTimer: number;            // for per-domain special effect tick
    abilityTimer: number;           // counts down to the next guaranteed sure-hit ability
    lifeTimer: number;              // domain force-closes after 10s if nobody dies inside
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
    innerShell: THREE.Mesh;       // inner dark shell visible from inside -- the bit that was lingering like a ghost lol
    light: THREE.PointLight;
    pillars: THREE.Mesh[];        // corebound-style throne pillars at cardinal points
    pillarLights: THREE.PointLight[];  // each pillar glows
    // MALEVOLENT SHRINE SYSTEM -- radial slash waves. kept the purple. same cursed energy.
    slashes: Array<{
        mesh: THREE.Mesh;
        dir: THREE.Vector3;
        speed: number;
        distTraveled: number;
        maxDist: number;
        type: 'dismantle' | 'cleave';
    }>;
    slashTimer: number;
    shrineMarks: THREE.Mesh[];    // static floor cross sigil at domain center
    lifeTimer: number;            // hard 15s cap. it WILL close. no exceptions.
    hasHadNPCsInside: boolean;    // once an npc steps inside, we watch for everyone dying -- domain collapses when cleared
}

export class DomainExpansionSystem {
    private scene: THREE.Scene;
    public activeDomains: ActiveDomain[] = [];
    public onDomainOpen: ((name: string, flavor: string) => void) | null = null;
    public onDomainClose: ((name: string) => void) | null = null;

    // player's own domain -- lives separately from the npc domain list
    private playerDomain: ActivePlayerDomain | null = null;
    public onPlayerDomainClose: ((name: string) => void) | null = null;
    public onPlayerDomainCleared: (() => void) | null = null; // fires specifically when all NPCs inside are wiped out

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

        // SOLID outer shell visible from outside -- pitch BLACK from outside bc that looks sick
        const outerGeo = new THREE.SphereGeometry(def.radius, 40, 40);
        const outerMat = new THREE.MeshBasicMaterial({
            color: 0x000000,        // ugh its void black from outside. intimidating. whatever.
            transparent: true,
            opacity: 0.96,
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
        (sphere as THREE.Mesh & { innerShell?: THREE.Mesh }).innerShell = innerShell;

        // dramatic central light
        const light = new THREE.PointLight(def.domainColor, 5, def.radius * 2);
        light.position.set(castPos.x, 6, castPos.z);
        this.scene.add(light);

        // secondary pulsing light for vibes
        const innerLight = new THREE.PointLight(def.fogColor, 3, def.radius * 0.8);
        innerLight.position.set(castPos.x, 2, castPos.z);
        this.scene.add(innerLight);

        // PULL: anything within pullRadius at open time gets yanked inside and locked in
        // this is how the domain actually claims its victim -- not just whoever happened to be there
        let playerLockedInside = false;
        if (playerPos) {
            const dToCast = playerPos.distanceTo(new THREE.Vector3(castPos.x, playerPos.y, castPos.z));
            if (dToCast < def.pullRadius) {
                // player is within pull range -- drag them to just inside the boundary
                playerLockedInside = true;
                if (dToCast > def.radius - 2) {
                    // teleport them inside if they were in pull zone but not quite inside
                    const dir = new THREE.Vector3(playerPos.x - castPos.x, 0, playerPos.z - castPos.z);
                    if (dir.lengthSq() < 0.001) dir.set(0, 0, 1);
                    dir.normalize();
                    const pullTarget = new THREE.Vector3(
                        castPos.x + dir.x * (def.radius * 0.7),
                        playerPos.y,
                        castPos.z + dir.z * (def.radius * 0.7),
                    );
                    this.onPlayerPushback?.(pullTarget);
                }
            }
        }

        const domain: ActiveDomain = {
            npc, def, castPos, playerLockedInside,
            stunPulseTimer: def.stunPulse,
            uniqueTimer: 0,
            abilityTimer: DomainExpansionSystem.ABILITY_INTERVALS[defKey] ?? 3,
            lifeTimer: 10, // disappears after 10s if no kill -- domain cant hold forever
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

                // EXECUTE: if player hp fraction is below threshold, hit them with the kill burst
                // main.ts wires currentPlayerHpPct so we can check it here
                const hpPct = this._playerHpPct;
                if (d.def.executeHpPct > 0 && hpPct > 0 && hpPct <= d.def.executeHpPct) {
                    onPlayerDamage(d.def.killBurst); // finish them
                    this.onDomainEffect?.('execute_player', d.castPos, d.def.radius);
                }

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

            // tick life timer -- domain force-collapses after 10s if no one died
            d.lifeTimer -= deltaTime;
            if (d.lifeTimer <= 0) {
                this.onDomainEffect?.('domain_timeout', d.castPos, d.def.radius);
                this.closeDomain(d, i);
                continue;
            }

            // domain also closes when the NPC that cast it dies
            if (d.npc.hp <= 0) {
                // KILL BURST: detonation when domain collapses -- punish lingering inside
                if (d.playerLockedInside) {
                    const distOnClose = playerPos.distanceTo(new THREE.Vector3(d.castPos.x, playerPos.y, d.castPos.z));
                    if (distOnClose < d.def.radius) {
                        onPlayerDamage(d.def.killBurst);
                        this.onDomainEffect?.('kill_burst', d.castPos, d.def.radius);
                    }
                }
                this.closeDomain(d, i);
            }
        }
    }

    // set this every frame from main.ts so the execute check can read current HP fraction
    private _playerHpPct: number = 1;
    public setPlayerHpPct(pct: number): void { this._playerHpPct = pct; }

    // how often (seconds) each domain fires its sure-hit ability
    private static readonly ABILITY_INTERVALS: Record<string, number> = {
        normal: 3, jesus: 4, robot: 2, orb: 3.5, angel: 3, pirate: 3,
        wizard: 4, vampire: 2, disco: 2, shadow: 4, barney: 6,
        emo: 3, shrek: 4, buffcat: 2.5, voidcat: 4, hybrid: 3,
    };

    // unique per-domain special effects + SURE HIT ABILITIES -- each domain does something that cannot be dodged
    private tickUniqueEffect(
        d: ActiveDomain,
        dt: number,
        playerPos: THREE.Vector3,
        onPlayerDamage: (dmg: number) => void,
        onPlayerStun: () => void,
    ): void {
        const type = d.def.npcType;
        const t = Date.now();

        // ----- VISUAL EFFECTS (every frame) -----
        if (type === 'shadow' || type === 'voidcat') {
            d.innerLight.intensity = Math.random() < 0.05 ? 8 : 0;
        }
        if (type === 'robot') {
            d.innerLight.intensity = Math.sin(t * 0.02) > 0 ? 4 : 0;
        }
        if (type === 'disco') {
            const hue = (t * 0.001) % 1;
            (d.sphere.material as THREE.MeshBasicMaterial).color.setHSL(hue, 1, 0.5);
            d.light.color.setHSL(hue, 1, 0.5);
        }
        if (type === 'buffcat') {
            d.innerLight.color.setHSL(0, 1, 0.5 + Math.sin(t * 0.01) * 0.4);
        }

        // ----- SURE HIT ABILITIES (on timer) -----
        // only fire when player is actually trapped inside -- outside the domain = safe
        if (!d.playerLockedInside) return;

        d.abilityTimer -= dt;
        if (d.abilityTimer > 0) return;

        // reset timer with a tiny random jitter so multiple domains dont sync up
        d.abilityTimer = (DomainExpansionSystem.ABILITY_INTERVALS[type] ?? 3) + Math.random() * 0.5;

        switch (type) {
            case 'normal': {
                // INFINITE MEOW BARRAGE: pure spam. thematically: just a cat. going absolutely feral. 5 hits.
                for (let i = 0; i < 5; i++) onPlayerDamage(6);
                this.onDomainEffect?.('ability_normal', d.castPos, d.def.radius);
                break;
            }
            case 'jesus': {
                // DIVINE FORGIVENESS: jesus doesn't hurt you. he FORGIVES you.
                // which means he heals himself back to full. debuff: blinds with holy light.
                d.npc.hp = d.npc.maxHp; // full heal. he's jesus. he can do that.
                this.onDomainEffect?.('ability_jesus', d.castPos, d.def.radius);
                break;
            }
            case 'robot': {
                // SYSTEM OVERRIDE: needs 2s boot time after domain opens before the override can process.
                // robot doesn't activate instantly -- it has to boot. give it a moment.
                if (d.uniqueTimer < 2) { d.abilityTimer = 1; break; }
                this.onDomainEffect?.('ability_robot', d.castPos, d.def.radius);
                break;
            }
            case 'orb': {
                // OMNISCIENT PULL: the orb doesn't attack. it just slides you to the center and watches.
                // being near the orb is the punishment.
                const orbCenter = new THREE.Vector3(
                    d.castPos.x + (Math.random() - 0.5) * 4,
                    playerPos.y,
                    d.castPos.z + (Math.random() - 0.5) * 4,
                );
                this.onPlayerPushback?.(orbCenter);
                this.onDomainEffect?.('ability_orb', d.castPos, d.def.radius);
                break;
            }
            case 'angel': {
                // GRACE DEBUFF: angel blesses itself with divine grace (heals) + slows you
                // with the weight of heaven. movement penalty, no direct damage.
                d.npc.hp = Math.min(d.npc.maxHp, d.npc.hp + 20);
                this.onDomainEffect?.('ability_angel', d.castPos, d.def.radius);
                break;
            }
            case 'pirate': {
                // CANNONBALL: only fires if player is within 75% of domain radius.
                // too far back and the cannonball arc misses. you have to be in range.
                const distPirate = playerPos.distanceTo(new THREE.Vector3(d.castPos.x, playerPos.y, d.castPos.z));
                if (distPirate > d.def.radius * 0.6) { d.abilityTimer = 1; break; }
                onPlayerDamage(22);
                this.onDomainEffect?.('ability_pirate', d.castPos, d.def.radius);
                break;
            }
            case 'wizard': {
                // ARCANE MAZE: teleport + confuse. the wizard doesn't hurt you directly.
                // he makes you unable to navigate. movement inversion + random teleport.
                const angle = Math.random() * Math.PI * 2;
                const r = 2 + Math.random() * (d.def.radius * 0.7);
                this.onPlayerPushback?.(new THREE.Vector3(
                    d.castPos.x + Math.cos(angle) * r,
                    playerPos.y,
                    d.castPos.z + Math.sin(angle) * r,
                ));
                this.onDomainEffect?.('ability_wizard', d.castPos, d.def.radius);
                break;
            }
            case 'vampire': {
                // LIFEDRAIN CLAMP: only triggers if player HP < 75%.
                // the vampire scents weakness. at full health it just watches. patient. predatory.
                if (this._playerHpPct >= 0.75) { d.abilityTimer = 1.5; break; }
                onPlayerDamage(25);
                d.npc.hp = Math.min(d.npc.maxHp, d.npc.hp + 25); // vampire gets it back
                this.onDomainEffect?.('ability_vampire', d.castPos, d.def.radius);
                break;
            }
            case 'disco': {
                // FORCED GROOVE: no damage. just pure movement chaos. inverts controls, stuns briefly.
                // you WILL dance. you just wont be able to stop.
                onPlayerStun();
                this.onDomainEffect?.('ability_disco', d.castPos, d.def.radius);
                break;
            }
            case 'shadow': {
                // BLACK FLASH: only fires if player HP < 60% OR player is within 35% of domain radius.
                // shadow doesn't strike randomly. it waits until you're bleeding. then it comes from nowhere.
                const distShadow = playerPos.distanceTo(new THREE.Vector3(d.castPos.x, playerPos.y, d.castPos.z));
                if (this._playerHpPct >= 0.6 && distShadow > d.def.radius * 0.35) { d.abilityTimer = 1.5; break; }
                onPlayerDamage(45);
                this.onDomainEffect?.('ability_shadow', d.castPos, d.def.radius);
                break;
            }
            case 'barney': {
                // UNCONDITIONAL HUG: barney loves you. mandatory. he doesnt HURT you.
                // he just teleports you to the center and heals HIMSELF and stuns you in the embrace.
                this.onPlayerPushback?.(new THREE.Vector3(d.castPos.x, playerPos.y, d.castPos.z));
                d.npc.hp = Math.min(d.npc.maxHp, d.npc.hp + 30); // the hug heals barney. love does that.
                onPlayerStun();
                this.onDomainEffect?.('ability_barney', d.castPos, d.def.radius);
                break;
            }
            case 'emo': {
                // RESONANCE WAVE: domain must be active >= 5s first. emotional damage isnt instant.
                // the pain festers. it builds up in silence. THEN it detonates. not before.
                if (d.uniqueTimer < 5) { d.abilityTimer = 1; break; }
                onPlayerDamage(40);
                this.onDomainEffect?.('ability_emo', d.castPos, d.def.radius);
                break;
            }
            case 'shrek': {
                // THIS IS MY SWAMP: no damage. shrek doesnt fight. he just owns the swamp.
                // max mud debuff. the mud is the attack. you are standing in shrek's domain.
                this.onDomainEffect?.('ability_shrek', d.castPos, d.def.radius);
                break;
            }
            case 'buffcat': {
                // IRON FIST: only fires if player is within 50% of domain radius. buffcat is melee.
                // from across the room buffcat just flexes at you. you have to walk into the punch.
                const distBuff = playerPos.distanceTo(new THREE.Vector3(d.castPos.x, playerPos.y, d.castPos.z));
                if (distBuff > d.def.radius * 0.5) { d.abilityTimer = 0.8; break; }
                onPlayerDamage(50);
                this.onDomainEffect?.('ability_buffcat', d.castPos, d.def.radius);
                break;
            }
            case 'voidcat': {
                // VOID PERCEPTION: requires domain active >= 4s AND player HP < 80%.
                // voidcat is impossibly patient. it waits. it watches. it strikes when youre already hurt.
                // at full hp it just stares at you from the dark. which is honestly worse.
                if (d.uniqueTimer < 4 || this._playerHpPct >= 0.8) { d.abilityTimer = 1.5; break; }
                const vAngle = Math.random() * Math.PI * 2;
                const vR = d.def.radius * 0.8;
                this.onPlayerPushback?.(new THREE.Vector3(
                    d.castPos.x + Math.cos(vAngle) * vR,
                    playerPos.y,
                    d.castPos.z + Math.sin(vAngle) * vR,
                ));
                this.onDomainEffect?.('ability_voidcat', d.castPos, d.def.radius);
                break;
            }
            case 'hybrid': {
                // CHAOS BURST: roll dice. could heal the hybrid. could nuke you. could just confuse.
                // the hybrid doesn't know what it is. its ability reflects that.
                const roll = Math.random();
                if (roll < 0.33) {
                    onPlayerDamage(20 + Math.random() * 60); // damage roll
                    this.onDomainEffect?.('ability_hybrid_dmg', d.castPos, d.def.radius);
                } else if (roll < 0.66) {
                    d.npc.hp = Math.min(d.npc.maxHp, d.npc.hp + d.npc.maxHp * 0.5); // hybrid heals itself
                    this.onDomainEffect?.('ability_hybrid_heal', d.castPos, d.def.radius);
                } else {
                    onPlayerStun();
                    this.onDomainEffect?.('ability_hybrid_chaos', d.castPos, d.def.radius); // just stun + confusion
                }
                d.abilityTimer = 2 + Math.random() * 4;
                break;
            }
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
        // clean up the inner shell -- this was the ghost outline bug. it was just sitting there. in the scene. forever.
        this.scene.remove(pd.innerShell);
        (pd.innerShell.material as THREE.MeshBasicMaterial).dispose();
        pd.innerShell.geometry.dispose();
        for (let i = 0; i < pd.pillars.length; i++) {
            this.scene.remove(pd.pillars[i]);
            this.scene.remove(pd.pillarLights[i]);
            (pd.pillars[i].material as THREE.MeshBasicMaterial).dispose();
            pd.pillars[i].geometry.dispose();
        }
        // clean up all flying slash meshes -- every single one
        for (const slash of pd.slashes) {
            this.scene.remove(slash.mesh);
            (slash.mesh.material as THREE.MeshBasicMaterial).dispose();
            slash.mesh.geometry.dispose();
        }
        // clean up the shrine sigil floor marks
        for (const sm of pd.shrineMarks) {
            this.scene.remove(sm);
            (sm.material as THREE.MeshBasicMaterial).dispose();
            sm.geometry.dispose();
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

        // solid outer wall -- BLACK from outside. the throne looks like a void sphere to everyone else. cool.
        const geo = new THREE.SphereGeometry(def.radius, 40, 40);
        const mat = new THREE.MeshBasicMaterial({
            color: 0x000000, transparent: true, opacity: 0.97,
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

        // SHRINE SIGIL -- floor cross marks at domain center. reads as the aberrant throne's seal.
        // 4 lines crossing at center (+ and x combined = 8-pointed death star pattern)
        // these are STATIC -- they don't move, they just exist and pulse.
        // this is not a coincidence. the sigil is always there. you just never noticed. -- conspiracy
        const shrineMarks: THREE.Mesh[] = [];
        const sigilAngles = [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4];
        const sigilColors   = [0x6600cc, 0x440099, 0x7700ee, 0x550088];
        for (let i = 0; i < 4; i++) {
            const sgGeo = new THREE.BoxGeometry(def.radius * 1.85, 0.04, i < 2 ? 0.22 : 0.14);
            const sgMat = new THREE.MeshBasicMaterial({ color: sigilColors[i], transparent: true, opacity: 0.55 });
            const sg = new THREE.Mesh(sgGeo, sgMat);
            sg.position.set(fixedPos.x, 0.06, fixedPos.z);
            sg.rotation.y = sigilAngles[i];
            this.scene.add(sg);
            shrineMarks.push(sg);
        }
        // center glyph disc -- small bright disc at origin, like the eye of the shrine
        const discGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.06, 12);
        const discMat = new THREE.MeshBasicMaterial({ color: 0x9922ff, transparent: true, opacity: 0.7 });
        const disc = new THREE.Mesh(discGeo, discMat);
        disc.position.set(fixedPos.x, 0.07, fixedPos.z);
        this.scene.add(disc);
        shrineMarks.push(disc);

        this.playerDomain = {
            def, castPos: fixedPos, playerLockedInside: true,
            sphere, innerShell, light, pillars, pillarLights,
            slashes: [], slashTimer: 0.15, shrineMarks, lifeTimer: 15, hasHadNPCsInside: false,
        };
        this.onDomainOpen?.(def.name, def.flavorText);
    }

    // MALEVOLENT SHRINE: fires radial slash waves in ALL directions -- way more cuts, 4 wave patterns
    // this is what happens when sukuna has the throne. you dont dodge. you just take it.
    // for the love of god there are a LOT of slashes now. -- disappointed parent who also loves this
    private spawnPlayerSlashWave(
        pd: ActivePlayerDomain,
        npcs: Array<{ getPosition(): THREE.Vector3; takeDamage(d: number): void; isAlive(): boolean }>
    ): void {
        const waveType = Math.floor(Math.random() * 4);
        const baseAngle = Math.random() * Math.PI * 2;
        let count: number;

        if (waveType === 0) count = 24 + Math.floor(Math.random() * 12); // radial burst: 24-36, every direction
        else if (waveType === 1) count = 12;                               // cross double-sweep
        else if (waveType === 2) count = 20;                               // spiral
        else                     count = 36 + Math.floor(Math.random() * 20); // chaos storm: 36-56

        for (let i = 0; i < count; i++) {
            let angle: number;
            if (waveType === 0)      angle = baseAngle + (i / count) * Math.PI * 2;
            else if (waveType === 1) angle = baseAngle + (i < 6 ? (i / 6) * Math.PI * 2 : ((i - 6) / 6) * Math.PI * 2 + Math.PI / 6);
            else if (waveType === 2) angle = baseAngle + (i / count) * Math.PI * 4; // spiral = 2 full rotations
            else                     angle = Math.random() * Math.PI * 2;

            const isDismantle = Math.random() < 0.5;
            const isCross     = Math.random() < 0.12;
            const dir = new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle)).normalize();

            let geo: THREE.BufferGeometry;
            if (isCross) {
                geo = new THREE.BoxGeometry(3.0 + Math.random() * 2.0, 2.8 + Math.random() * 2.0, 0.08);
            } else if (isDismantle) {
                geo = new THREE.BoxGeometry(3.5 + Math.random() * 3.5, 0.07, 0.45 + Math.random() * 0.4);
            } else {
                geo = new THREE.BoxGeometry(0.08, 3.5 + Math.random() * 3.5, 0.45 + Math.random() * 0.4);
            }

            const colors = [0xcc88ff, 0xffffff, 0xee99ff, 0xdd44ff, 0xbb22ee, 0xffccff, 0x9900ff, 0xaa00cc];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.75 + Math.random() * 0.22 });
            const mesh = new THREE.Mesh(geo, mat);

            // chaos storm starts from random positions mid-field; others start near center
            const startDist = waveType === 3
                ? Math.random() * pd.def.radius * 0.55
                : 0.5 + Math.random() * 3.5;

            mesh.position.set(
                pd.castPos.x + dir.x * startDist,
                isDismantle ? 0.1 + Math.random() * 1.0 : 0.2 + Math.random() * 3.5,
                pd.castPos.z + dir.z * startDist,
            );
            mesh.lookAt(mesh.position.clone().add(dir));
            mesh.rotateZ((Math.random() - 0.5) * (isDismantle ? 0.7 : 1.3));
            this.scene.add(mesh);

            pd.slashes.push({
                mesh, dir,
                speed: 12 + Math.random() * 34,  // wide range -- sneaky slow to blink fast
                distTraveled: startDist,
                maxDist: pd.def.radius * 0.97,
                type: isDismantle ? 'dismantle' : 'cleave',
            });
        }

        // guaranteed hit burst on every wave -- the whole territory gets carved
        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            const np = npc.getPosition();
            const dx = np.x - pd.castPos.x;
            const dz = np.z - pd.castPos.z;
            if (Math.sqrt(dx * dx + dz * dz) < pd.def.radius) {
                npc.takeDamage(10);
            }
        }
    }

    // tick the player domain -- sphere is FIXED, damages npcs inside, enforces NPC boundary too
    public updatePlayerDomain(
        dt: number,
        playerPos: THREE.Vector3,
        npcs: Array<{ getPosition(): THREE.Vector3; takeDamage(d: number): void; isAlive(): boolean }>
    ): void {
        if (!this.playerDomain) return;
        const pd = this.playerDomain;
        // sphere does NOT move -- it stays at castPos
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

        let npcsInsideCount = 0;
        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            const np = npc.getPosition();
            const dx = np.x - pd.castPos.x;
            const dz = np.z - pd.castPos.z;
            const dToCenter = Math.sqrt(dx * dx + dz * dz);
            if (dToCenter < pd.def.radius) {
                npcsInsideCount++;
                npc.takeDamage(pd.def.npcDamage * dt);
                // bonus damage near throne pillars
                for (const pillar of pd.pillars) {
                    const pdx = np.x - pillar.position.x;
                    const pdz = np.z - pillar.position.z;
                    if (Math.sqrt(pdx * pdx + pdz * pdz) < 5) {
                        npc.takeDamage(25 * dt);
                    }
                }
                // EXECUTE: NPC below execute threshold gets obliterated
                // npcs have 40 base hp so executePct 0.12 = 4.8 hp threshold
                // just kill them -- throne doesn't do mercy
                if (dToCenter < pd.def.radius && pd.def.executeHpPct > 0) {
                    // we can't read npc hp directly from this interface so use a kill-shot damage
                    // this fires when they're very low -- the 22 DPS + 25 DPS pillar does this naturally but just in case
                    // deal a kill burst if they've been inside for a while (approximated by high dmg tick)
                    npc.takeDamage(pd.def.npcDamage * dt * 2); // double tick near execution phase
                }
                // NPC BOUNDARY: NPCs can't leave the throne either -- they're trapped too
                if (dToCenter > pd.def.radius - 1) {
                    // nudge them back toward center -- we can't teleport NPCs directly from here
                    // so just deal pushback damage as penalty for trying to escape
                    npc.takeDamage(30 * dt); // wall burns them if they press against it
                }
            }
        }
        // close-when-cleared -- throne collapses once every npc inside is dead. the hunt is over.
        if (npcsInsideCount > 0) pd.hasHadNPCsInside = true;
        if (pd.hasHadNPCsInside && npcsInsideCount === 0) {
            this.onPlayerDomainCleared?.();
            this.onPlayerDomainClose?.(pd.def.name);
            this.forceClosePlayerDomain();
            return;
        }
        // HARD LIFE TIMER: 15 seconds, no exceptions, throne collapses. you had your fun.
        pd.lifeTimer -= dt;
        if (pd.lifeTimer <= 0) {
            this.onPlayerDomainClose?.(pd.def.name);
            this.forceClosePlayerDomain();
            return;
        }

        // SLASH WAVE TIMER -- fire new malevolent shrine wave on interval
        pd.slashTimer -= dt;
        if (pd.slashTimer <= 0) {
            this.spawnPlayerSlashWave(pd, npcs);
            pd.slashTimer = 0.22 + Math.random() * 0.18; // 0.22-0.40s between waves -- way more frequent
        }

        // ANIMATE SLASHES: fly outward, scale grows, opacity fades at boundary, die at edge
        for (let si = pd.slashes.length - 1; si >= 0; si--) {
            const sl = pd.slashes[si];
            const delta = sl.speed * dt;
            sl.mesh.position.x += sl.dir.x * delta;
            sl.mesh.position.z += sl.dir.z * delta;
            sl.distTraveled += delta;

            const lifePct = sl.distTraveled / sl.maxDist;
            const smat = sl.mesh.material as THREE.MeshBasicMaterial;
            smat.opacity = Math.max(0, (1 - lifePct) * 0.95);

            // the cut expands slightly as it travels -- the energy spreads
            if (sl.type === 'dismantle') {
                sl.mesh.scale.set(1 + lifePct * 0.5, 1, 1 + lifePct * 1.4);
            } else {
                sl.mesh.scale.set(1, 1 + lifePct * 0.5, 1 + lifePct * 1.4);
            }

            if (sl.distTraveled >= sl.maxDist || smat.opacity <= 0.02) {
                this.scene.remove(sl.mesh);
                smat.dispose();
                sl.mesh.geometry.dispose();
                pd.slashes.splice(si, 1);
            }
        }

        // pulse shrine sigil marks -- subtle breathing, the throne is alive
        const now = Date.now();
        for (let mi = 0; mi < pd.shrineMarks.length; mi++) {
            const sm = pd.shrineMarks[mi];
            (sm.material as THREE.MeshBasicMaterial).opacity =
                0.3 + Math.sin(now * 0.003 + mi * 0.8) * 0.2;
        }

        // domain stays until forceClosePlayerDomain() -- but fire kill burst callback if it ends naturally
        // (handled by forceClosePlayerDomain in main)
    }

    public isPlayerDomainActive(): boolean { return this.playerDomain !== null; }
    public getPlayerDomainTimeRemaining(): number { return this.playerDomain ? 999 : 0; } // domain has no timer anymore -- 999 = still active
}
