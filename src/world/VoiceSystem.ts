// VOICE SYSTEM -- npcs talk using Web Speech API. no deps, no setup, just vibes.
// pitch and rate per npc type. everything else is defaults. simple. works.

// [pitch, rate] per npc type. every single one is unique now. u r welcome.
// they were all the same before. we used to be better than this. -- disappointed parent
const PROFILES: Record<string, [number, number]> = {
    // original cast
    normal:      [1.4, 1.5],   // fast squeaky cat
    jesus:       [0.55, 0.55], // slow, deep, divine, absolutely above this
    robot:       [0.85, 2.0],  // fast monotone machine
    orb:         [1.9, 0.45],  // high and creepy slow -- the orb breathes differently
    angel:       [1.7, 0.65],  // airy, floaty, slightly too high
    pirate:      [0.65, 0.85], // gravelly sea dog
    wizard:      [0.8, 0.65],  // dramatic old man energy
    vampire:     [0.35, 0.6],  // low, patient, predatory
    disco:       [1.8, 1.7],   // screaming with joy at all times
    shadow:      [0.25, 0.45], // barely audible, barely there, maybe not real
    barney:      [1.95, 1.2],  // aggressively, uncomfortably cheerful
    emo:         [0.55, 0.55], // dead inside. flat. checked out.
    shrek:       [0.45, 0.75], // ogre. loud. swamp.
    buffcat:     [0.28, 0.65], // pure grunt. lowest pitch possible.
    voidcat:     [0.18, 0.38], // ancient darkness barely forming words
    hybrid:      [1.0, 1.0],   // changes every time. unknowable.
    player:      [0.85, 0.8],  // sage. calm. slightly threatening.
    obama:       [0.72, 0.82], // measured. presidential. hope voice.
    trump:       [0.62, 1.15], // loud. very confident. bigly.
    // 20 new ones -- every personality has its own acoustic fingerprint now
    chef:        [0.75, 1.0],  // warm, confident, Gordon Ramsay energy
    astronaut:   [1.15, 0.65], // slightly echo-y, deliberate, space helmet effect
    cowboy:      [0.58, 0.75], // slow drawl, YEEHAW implied
    ninja:       [0.45, 1.5],  // fast and quiet -- you barely hear it
    samurai:     [0.38, 0.55], // deep, slow, each word a decree
    clown:       [2.0, 1.45],  // manic high pitch, unhinged
    zombie:      [0.3, 0.48],  // slow groany undead
    pharaoh:     [0.5, 0.65],  // commanding, ancient authority
    knight:      [0.72, 0.78], // formal, declarative, slightly echo-y
    scientist:   [1.35, 1.4],  // excited rapid fire, very fast
    mummy:       [0.42, 0.5],  // ancient slow, like speaking through bandages
    detective:   [0.78, 0.72], // gravelly noir, cigarette voice implied
    firefighter: [0.92, 1.35], // urgent, loud, CODE RED
    biker:       [0.38, 0.78], // growly, low, says few words
    princess:    [1.92, 0.95], // sweet but the pitch is unnerving
    ghost:       [0.6, 0.55],  // haunting, echoes slightly, slow
    luchador:    [0.68, 1.5],  // LOUD AND PUMPED
    fairy:       [2.0, 1.15],  // tiny, high, sparkle voice
    caveman:     [0.3, 0.68],  // grunt. lowest possible. club.
    alien:       [1.5, 0.55],  // weird slow high -- definitely not from here
};

const ABILITY_LINES: Record<string, string> = {
    ability_normal:       'Meow meow meow meow meow!',
    ability_jesus:        'I forgive you.',
    ability_robot:        'Attack permissions revoked.',
    ability_orb:          'Come closer.',
    ability_angel:        'Feel the weight of grace.',
    ability_pirate:       'Fire!',
    ability_wizard:       'You are lost now.',
    ability_vampire:      'Your blood is mine.',
    ability_disco:        'You cannot leave the dance floor.',
    ability_shadow:       'Black flash.',
    ability_barney:       'I love you. Come here.',
    ability_emo:          'Nobody understands.',
    ability_shrek:        'This is my swamp.',
    ability_buffcat:      'Iron fist.',
    ability_voidcat:      'You never had a HUD.',
    ability_hybrid_dmg:   'Chaos.',
    ability_hybrid_heal:  'I choose myself.',
    ability_hybrid_chaos: 'Neither do I.',
    ability_obama:        'Yes we can.',
    ability_trump:        'Tremendous.',
    // INTRODUCING: 20 brand new ability calls!! actors said we COULDN'T!! we proved them WRONG!! ✨
    ability_chef:        'This is RAW.',
    ability_astronaut:   'Houston. Problem.',
    ability_cowboy:      'Draw.',
    ability_ninja:       '...',
    ability_samurai:     'Bushido.',
    ability_clown:       'HONK.',
    ability_zombie:      'Braaaaains.',
    ability_pharaoh:     'Kneel.',
    ability_knight:      'For honor.',
    ability_scientist:   'EUREKA.',
    ability_mummy:       'The curse activates.',
    ability_detective:   'I knew it.',
    ability_firefighter: 'Stand back.',
    ability_biker:       '...',
    ability_princess:    'Off with it.',
    ability_ghost:       'Boo.',
    ability_luchador:    'LUCHA.',
    ability_fairy:       'I grant: pain.',
    ability_caveman:     'CLUB.',
    ability_alien:       'Resistance is inefficient.',
    execute_player:       'It is over.',
    domain_timeout:       'I grow bored.',
};

export class VoiceSystem {
    private synth = 'speechSynthesis' in window ? window.speechSynthesis : null;
    private enabled = true;

    // speak domain flavor text -- cancels whatever is playing, this is important
    public speakDomainOpen(npcType: string, text: string): void {
        if (!this.enabled || !this.synth) return;
        this.synth.cancel();
        this._say(text, npcType);
    }

    // speak ability line -- skips if domain voice is still going
    public speakAbility(effect: string, npcType: string): void {
        if (!this.enabled || !this.synth) return;
        if (this.synth.speaking) return;
        const line = ABILITY_LINES[effect];
        if (line) this._say(line, npcType);
    }

    private _say(text: string, npcType: string): void {
        if (!this.synth) return;
        const u = new SpeechSynthesisUtterance(text);
        let [pitch, rate] = PROFILES[npcType] ?? [1, 1];
        if (npcType === 'hybrid') {
            // idk why this works. ngl kinda scared to touch it
            pitch = 0.3 + Math.random() * 1.7;
            rate  = 0.5 + Math.random() * 1.5;
        }
        u.pitch  = pitch;
        u.rate   = rate;
        u.volume = 0.25; // reduced by 75%. we used to be so loud. I just expected better from us.
        this.synth.speak(u);
    }

    public toggle(): void {
        this.enabled = !this.enabled;
        if (!this.enabled) this.synth?.cancel();
    }

    public isEnabled(): boolean { return this.enabled; }
}
