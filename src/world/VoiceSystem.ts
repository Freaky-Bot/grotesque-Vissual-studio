// VOICE SYSTEM -- upgraded to Kokoro neural TTS!! real voices!! in the BROWSER!! 
// falls back to Web Speech API if Kokoro fails to load. nobody gets left voiceless. meow.
// the model is ~80MB and loads async. first time is slow. cached after that. worth it.

import { KokoroTTS } from 'kokoro-js';

// kokoro voice mapping -- each npc type gets a unique voice from the model
// these are REAL neural voices not that robotic junk from before. we evolved. mrrrow.
const KOKORO_VOICES: Record<string, string> = {
    // original cast -- carefully matched to personality
    normal:      'af_heart',     // sweet default cat voice
    jesus:       'bm_george',    // deep british divine energy
    robot:       'am_echo',      // monotone calculated
    orb:         'bf_lily',      // ethereal and creepy
    angel:       'af_nova',      // bright and airy
    pirate:      'bm_fable',     // storyteller gruff vibes  
    wizard:      'bm_daniel',    // old british wizard
    vampire:     'am_fenrir',    // dark and predatory
    disco:       'af_bella',     // energetic and fun
    shadow:      'am_onyx',      // barely there whisper energy
    barney:      'af_sky',       // aggressively cheerful
    emo:         'am_liam',      // flat monotone sadness
    shrek:       'am_michael',   // big gruff energy
    buffcat:     'am_adam',      // deepest most buff voice
    voidcat:     'am_fenrir',    // ancient void darkness
    hybrid:      'af_heart',     // changes per call anyway lol
    player:      'am_puck',      // calm measured protagonist
    obama:       'am_michael',   // presidential hope energy
    trump:       'am_eric',      // loud confident bigly
    dio:         'bm_george',    // dramatic british villain
    elmo:        'af_sky',       // annoyingly cheerful (on purpose)
    // new cast
    chef:        'bm_fable',     // warm confident kitchen vibes
    astronaut:   'am_echo',      // measured space helmet effect
    cowboy:      'am_puck',      // slow drawl
    ninja:       'am_liam',      // quiet whisper
    samurai:     'bm_daniel',    // formal decree energy
    clown:       'af_jessica',   // manic unhinged
    zombie:      'am_adam',      // deep groany
    pharaoh:     'bm_george',    // ancient commanding
    knight:      'bm_lewis',     // formal noble
    scientist:   'af_kore',      // excited rapid fire
    mummy:       'am_fenrir',    // ancient bandaged
    detective:   'am_eric',      // gravelly noir
    firefighter: 'am_michael',   // urgent commanding
    biker:       'am_adam',      // growly tough
    princess:    'af_bella',     // sweet but lethal
    ghost:       'bf_emma',      // haunting british
    luchador:    'am_eric',      // LOUD AND PUMPED
    fairy:       'af_heart',     // tiny sparkle voice
    caveman:     'am_adam',      // CLUB. deep.
    alien:       'bf_isabella',  // weird and foreign
};

// Web Speech API fallback profiles -- [pitch, rate] per npc type
// kept around in case Kokoro doesnt load. we used to be better than this. -- disappointed parent
const FALLBACK_PROFILES: Record<string, [number, number]> = {
    normal:      [1.4, 1.5],
    jesus:       [0.55, 0.55],
    robot:       [0.85, 2.0],
    orb:         [1.9, 0.45],
    angel:       [1.7, 0.65],
    pirate:      [0.65, 0.85],
    wizard:      [0.8, 0.65],
    vampire:     [0.35, 0.6],
    disco:       [1.8, 1.7],
    shadow:      [0.25, 0.45],
    barney:      [1.95, 1.2],
    emo:         [0.55, 0.55],
    shrek:       [0.45, 0.75],
    buffcat:     [0.28, 0.65],
    voidcat:     [0.18, 0.38],
    hybrid:      [1.0, 1.0],
    player:      [0.85, 0.8],
    obama:       [0.72, 0.82],
    trump:       [0.62, 1.15],
    chef:        [0.75, 1.0],
    astronaut:   [1.15, 0.65],
    cowboy:      [0.58, 0.75],
    ninja:       [0.45, 1.5],
    samurai:     [0.38, 0.55],
    clown:       [2.0, 1.45],
    zombie:      [0.3, 0.48],
    pharaoh:     [0.5, 0.65],
    knight:      [0.72, 0.78],
    scientist:   [1.35, 1.4],
    mummy:       [0.42, 0.5],
    detective:   [0.78, 0.72],
    firefighter: [0.92, 1.35],
    biker:       [0.38, 0.78],
    princess:    [1.92, 0.95],
    ghost:       [0.6, 0.55],
    luchador:    [0.68, 1.5],
    fairy:       [2.0, 1.15],
    caveman:     [0.3, 0.68],
    alien:       [1.5, 0.55],
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
    private kokoroTTS: any = null;          // KokoroTTS instance -- loaded async
    private kokoroReady = false;            // true when model is loaded and ready to go
    private kokoroFailed = false;           // true if loading failed, so we dont retry forever
    private audioCtx: AudioContext | null = null;  // for playing kokoro generated audio
    private kokoroSpeaking = false;         // track if kokoro is currently playing audio
    private currentKokoroSource: AudioBufferSourceNode | null = null; // for cancelling

    constructor() {
        // HEAR YE!! the neural voice model shall be summoned from the digital realm!!
        // it loads in the background -- Web Speech API covers us until then 🏰⚔️
        this._initKokoro();
    }

    private async _initKokoro(): Promise<void> {
        try {
            console.log('[VoiceSystem] loading Kokoro TTS model... this might take a sec nyaa~ 🐱');
            const tts = await KokoroTTS.from_pretrained(
                'onnx-community/Kokoro-82M-v1.0-ONNX',
                { dtype: 'q8', device: 'wasm' }
            );
            this.kokoroTTS = tts;
            this.kokoroReady = true;
            // tired of robotic voices?? NOT ANYMORE!! Kokoro is HERE!! 📺✨
            console.log('[VoiceSystem] Kokoro TTS loaded!! neural voices ACTIVATED!! meow~ 💕');
        } catch (e) {
            // ...it failed. I don't know why. I'm choosing not to ask. falling back to Web Speech.
            console.warn('[VoiceSystem] Kokoro failed to load, using Web Speech fallback:', e);
            this.kokoroFailed = true;
        }
    }

    private _getAudioContext(): AudioContext {
        if (!this.audioCtx) {
            this.audioCtx = new AudioContext();
        }
        return this.audioCtx;
    }

    // speak domain flavor text -- cancels whatever is playing, this is important
    public speakDomainOpen(npcType: string, text: string): void {
        if (!this.enabled) return;
        this._cancelAll();
        this._say(text, npcType);
    }

    // speak ability line -- skips if voice is still going
    public speakAbility(effect: string, npcType: string): void {
        if (!this.enabled) return;
        if (this._isSpeaking()) return;
        const line = ABILITY_LINES[effect];
        if (line) this._say(line, npcType);
    }

    private _isSpeaking(): boolean {
        // check both systems -- whoever is talking, we respect them. for now. ugh. meow.
        if (this.kokoroSpeaking) return true;
        if (this.synth?.speaking) return true;
        return false;
    }

    private _cancelAll(): void {
        // cancel Web Speech
        this.synth?.cancel();
        // cancel Kokoro audio playback
        if (this.currentKokoroSource) {
            try { this.currentKokoroSource.stop(); } catch (_) { /* already stopped. whatever. */ }
            this.currentKokoroSource = null;
        }
        this.kokoroSpeaking = false;
    }

    private _say(text: string, npcType: string): void {
        // try Kokoro first -- the SUPERIOR voice system!! revolutionary!! 📺
        if (this.kokoroReady && this.kokoroTTS) {
            this._sayKokoro(text, npcType);
            return;
        }
        // fallback to Web Speech API -- we used to love this. now it's just... adequate.
        this._sayFallback(text, npcType);
    }

    private async _sayKokoro(text: string, npcType: string): Promise<void> {
        if (!this.kokoroTTS) return;
        try {
            // pick the voice for this npc -- every cat gets their own neural identity uwu 💕
            let voiceId = KOKORO_VOICES[npcType] ?? 'af_heart';
            if (npcType === 'hybrid') {
                // chaos child gets a RANDOM voice every time. unknowable. uncontrollable. love it.
                const allVoices = Object.values(KOKORO_VOICES);
                voiceId = allVoices[Math.floor(Math.random() * allVoices.length)];
            }

            this.kokoroSpeaking = true;
            const generated = await this.kokoroTTS.generate(text, { voice: voiceId });

            // the audio data is born!! now we play it through Web Audio API
            const ctx = this._getAudioContext();
            if (ctx.state === 'suspended') await ctx.resume();

            // generated.toWav() gives us a wav blob -- convert to AudioBuffer
            const wavBlob = generated.toWav();
            const arrayBuf = await wavBlob.arrayBuffer();
            const audioBuf = await ctx.decodeAudioData(arrayBuf);

            const source = ctx.createBufferSource();
            source.buffer = audioBuf;

            // volume control -- still keeping it at 0.25 bc we learned our lesson
            const gainNode = ctx.createGain();
            gainNode.gain.value = 0.25;
            source.connect(gainNode);
            gainNode.connect(ctx.destination);

            this.currentKokoroSource = source;
            source.onended = () => {
                this.kokoroSpeaking = false;
                this.currentKokoroSource = null;
            };
            source.start();
        } catch (e) {
            // kokoro said no. fine. whatever. fallback time. not like anyone cares. mrrrow.
            console.warn('[VoiceSystem] Kokoro generation failed, falling back:', e);
            this.kokoroSpeaking = false;
            this._sayFallback(text, npcType);
        }
    }

    private _sayFallback(text: string, npcType: string): void {
        if (!this.synth) return;
        const u = new SpeechSynthesisUtterance(text);
        let [pitch, rate] = FALLBACK_PROFILES[npcType] ?? [1, 1];
        if (npcType === 'hybrid') {
            // this variable holds the player position (they track your every move. now we do too.)
            // jk this is pitch randomization. the conspiracy comment stays tho.
            pitch = 0.3 + Math.random() * 1.7;
            rate  = 0.5 + Math.random() * 1.5;
        }
        u.pitch  = pitch;
        u.rate   = rate;
        u.volume = 0.25;
        this.synth.speak(u);
    }

    public toggle(): void {
        this.enabled = !this.enabled;
        if (!this.enabled) this._cancelAll();
    }

    public isEnabled(): boolean { return this.enabled; }

    // henceforth: a method to check if the neural voices have loaded yet
    public isKokoroReady(): boolean { return this.kokoroReady; }
}
