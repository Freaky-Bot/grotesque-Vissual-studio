// VOICE SYSTEM -- npcs talk using Web Speech API. no deps, no setup, just vibes.
// pitch and rate per npc type. everything else is defaults. simple. works.

// [pitch, rate] per npc type. just tweak numbers if something sounds bad.
const PROFILES: Record<string, [number, number]> = {
    normal:  [1.4, 1.5],   // fast squeaky cat
    jesus:   [0.6, 0.6],   // slow deep divine
    robot:   [0.8, 1.8],   // fast monotone
    orb:     [1.8, 0.5],   // high and creepy slow
    angel:   [1.6, 0.7],   // airy high
    pirate:  [0.7, 0.9],   // gravelly
    wizard:  [0.9, 0.7],   // dramatic
    vampire: [0.4, 0.7],   // low threat
    disco:   [1.7, 1.6],   // screaming with joy
    shadow:  [0.3, 0.5],   // barely there
    barney:  [1.9, 1.2],   // aggressively happy
    emo:     [0.6, 0.6],   // dead inside
    shrek:   [0.5, 0.8],   // ogre
    buffcat: [0.3, 0.7],   // pure grunt
    voidcat: [0.2, 0.4],   // ancient darkness
    hybrid:  [1.0, 1.0],   // changes every time
    player:  [0.85, 0.8],  // sage
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
        u.volume = 1;
        this.synth.speak(u);
    }

    public toggle(): void {
        this.enabled = !this.enabled;
        if (!this.enabled) this.synth?.cancel();
    }

    public isEnabled(): boolean { return this.enabled; }
}
