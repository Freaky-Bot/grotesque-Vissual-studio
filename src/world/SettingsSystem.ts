// INTRODUCING: THE SETTINGS SYSTEM!! Everything you never knew you needed, and some stuff you did!!
// saves to localStorage so ur prefs survive page refresh. operates standalone, no THREE dependency.
// future-proof: just add a new key to the relevant section and it auto-saves/loads. ez. wow!!

// ---- SETTINGS SCHEMA ----
// each key has a type, default, and optional metadata for the UI to render it
// if a future dev adds a new key here it just works. no ceremony. no boilerplate. just add it.

export type SettingType = 'toggle' | 'slider' | 'select';

export interface SettingDef<T = unknown> {
    type: SettingType;
    label: string;
    default: T;
    min?: number;            // for sliders
    max?: number;            // for sliders
    step?: number;           // for sliders
    options?: string[];      // for selects
    optionLabels?: string[]; // display labels for select options
    description?: string;    // tooltip text -- future UI can show this
    category: SettingCategory;
    restartRequired?: boolean; // if true, show "restart to apply" note
    futureFeature?: boolean;  // show as greyed-out with "coming soon" label
}

export type SettingCategory = 'graphics' | 'sound' | 'accessibility' | 'gameplay' | 'debug';

// ---- all settings defined here. add future ones freely. ----
export const SETTING_DEFS: Record<string, SettingDef> = {

    // ============================
    //  GRAPHICS
    // ============================
    shadowQuality: {
        category: 'graphics', type: 'select', label: 'Shadow Quality',
        default: 'medium',
        options: ['off', 'low', 'medium', 'high'],
        optionLabels: ['Off', 'Low', 'Medium', 'High'],
        description: 'Lower shadows = more FPS. off = no shadows at all.',
        restartRequired: false,
    },
    particleEffects: {
        category: 'graphics', type: 'toggle', label: 'Particle Effects',
        default: true,
        description: 'Death bursts, sparks, etc. Turn off for big performance gain.',
    },
    drawDistance: {
        category: 'graphics', type: 'select', label: 'Draw Distance',
        default: 'medium',
        options: ['low', 'medium', 'high', 'ultra'],
        optionLabels: ['Low (100u)', 'Medium (200u)', 'High (350u)', 'Ultra (500u)'],
        description: 'how far you can see. lower = more FPS on big NPC counts.',
        futureFeature: true,
    },
    antialiasing: {
        category: 'graphics', type: 'toggle', label: 'Antialiasing',
        default: true,
        description: 'Smoothes jagged edges. tiny perf cost.',
        restartRequired: true,
    },
    domainFogDensity: {
        category: 'graphics', type: 'slider', label: 'Domain Fog Opacity',
        default: 88,
        min: 0, max: 100, step: 1,
        description: 'How dark domain interiors look. 0 = transparent walls.',
    },
    maxNPCs: {
        category: 'graphics', type: 'slider', label: 'Max NPCs',
        default: 40,
        min: 5, max: 120, step: 5,
        description: 'Hard cap on active NPCs. lower = better performance on potato PCs.',
    },
    showFPS: {
        category: 'graphics', type: 'toggle', label: 'Show FPS Counter',
        default: false,
        description: 'Shows frame rate in bottom-left corner.',
    },
    bloomEffect: {
        category: 'graphics', type: 'toggle', label: 'Bloom / Glow',
        default: true,
        description: 'glowing NPCs and domains look extra fancy.',
        futureFeature: true,
    },
    weatherEffects: {
        category: 'graphics', type: 'toggle', label: 'Weather Effects',
        default: true,
        description: 'rain, snow, fog events -- visual side of it.',
        futureFeature: true,
    },
    screenShakeEnabled: {
        category: 'graphics', type: 'toggle', label: 'Screen Shake',
        default: true,
        description: 'Screen shakes on crits and heavy hits.',
    },

    // ============================
    //  SOUND
    // ============================
    masterVolume: {
        category: 'sound', type: 'slider', label: 'Master Volume',
        default: 70,
        min: 0, max: 100, step: 1,
        description: 'controls everything at once.',
    },
    sfxVolume: {
        category: 'sound', type: 'slider', label: 'SFX Volume',
        default: 80,
        min: 0, max: 100, step: 1,
        description: 'hit sounds, death sounds, combat audio.',
    },
    musicVolume: {
        category: 'sound', type: 'slider', label: 'Music Volume',
        default: 60,
        min: 0, max: 100, step: 1,
        description: 'background music and domain themes.',
        futureFeature: true,
    },
    npcVoiceVolume: {
        category: 'sound', type: 'slider', label: 'NPC Voice Volume',
        default: 40,
        min: 0, max: 100, step: 1,
        description: 'knuckles clicking, NPC speech, etc.',
    },
    ambientVolume: {
        category: 'sound', type: 'slider', label: 'Ambient Sound',
        default: 50,
        min: 0, max: 100, step: 1,
        description: 'wind, environment, background atmosphere.',
        futureFeature: true,
    },
    muteAll: {
        category: 'sound', type: 'toggle', label: 'Mute All',
        default: false,
        description: 'emergency mute. overrides all volume sliders.',
    },
    domainAnnounceSound: {
        category: 'sound', type: 'toggle', label: 'Domain Announce Sound',
        default: true,
        description: 'the dramatic sting when a domain opens.',
    },

    // ============================
    //  ACCESSIBILITY
    // ============================
    reduceScreenShake: {
        category: 'accessibility', type: 'toggle', label: 'Reduce Screen Shake',
        default: false,
        description: 'cuts shake intensity by 80%. good for motion sensitivity.',
    },
    reduceFlashing: {
        category: 'accessibility', type: 'toggle', label: 'Reduce Flashing Effects',
        default: false,
        description: 'dims strobe/flash effects from domains and crits.',
    },
    colorblindMode: {
        category: 'accessibility', type: 'select', label: 'Colorblind Mode',
        default: 'none',
        options: ['none', 'deuteranopia', 'protanopia', 'tritanopia'],
        optionLabels: ['None', 'Deuteranopia (R/G)', 'Protanopia (R/G alt)', 'Tritanopia (B/Y)'],
        description: 'shifts color palette for accessibility.',
        futureFeature: true,
    },
    largeText: {
        category: 'accessibility', type: 'toggle', label: 'Large Text',
        default: false,
        description: 'increases HUD + chat text size by 40%.',
    },
    highContrast: {
        category: 'accessibility', type: 'toggle', label: 'High Contrast HUD',
        default: false,
        description: 'makes HP bars and UI elements more distinct.',
        futureFeature: true,
    },
    subtitles: {
        category: 'accessibility', type: 'toggle', label: 'Subtitles / Captions',
        default: false,
        description: 'shows NPC dialogue and event text as on-screen captions.',
        futureFeature: true,
    },
    hudScale: {
        category: 'accessibility', type: 'slider', label: 'HUD Scale',
        default: 100,
        min: 60, max: 150, step: 5,
        description: 'resize the whole HUD. 100 = default.',
        futureFeature: true,
    },

    // ============================
    //  GAMEPLAY
    // ============================
    showDamageNumbers: {
        category: 'gameplay', type: 'toggle', label: 'Floating Damage Numbers',
        default: true,
        description: 'numbers that pop above NPCs when hit.',
    },
    showKillFeed: {
        category: 'gameplay', type: 'toggle', label: 'Kill Feed',
        default: true,
        description: 'kill notifications top-right of screen.',
    },
    showStatusIcons: {
        category: 'gameplay', type: 'toggle', label: 'Status Effect Icons',
        default: true,
        description: 'icons showing active buffs/debuffs.',
    },
    showMinimap: {
        category: 'gameplay', type: 'toggle', label: 'Minimap',
        default: true,
        description: 'circular minimap bottom-right.',
    },
    minimapAlpha: {
        category: 'gameplay', type: 'slider', label: 'Minimap Opacity',
        default: 85,
        min: 20, max: 100, step: 5,
        description: 'how visible the minimap is.',
    },
    chatOpacity: {
        category: 'gameplay', type: 'slider', label: 'Chat Opacity',
        default: 90,
        min: 30, max: 100, step: 5,
        description: 'transparency of the event chat sidebar.',
    },
    showComboCounter: {
        category: 'gameplay', type: 'toggle', label: 'Combo Counter',
        default: true,
        description: 'shows kill streak counter.',
        futureFeature: true,
    },
    autoRespawn: {
        category: 'gameplay', type: 'toggle', label: 'Auto Respawn',
        default: true,
        description: 'respawn automatically after death. off = wait for button.',
        futureFeature: true,
    },
    npcAggressionRadius: {
        category: 'gameplay', type: 'slider', label: 'NPC Aggro Radius',
        default: 100,
        min: 20, max: 200, step: 10,
        description: 'how far NPCs detect and chase you.',
        futureFeature: true,
    },
    campfireRegen: {
        category: 'gameplay', type: 'toggle', label: 'Campfire HP Regen',
        default: true,
        description: 'campfires heal you when nearby.',
    },

    // ============================
    //  DEBUG (power user stuff)
    // ============================
    showHitboxes: {
        category: 'debug', type: 'toggle', label: 'Show Hitboxes',
        default: false,
        description: 'debug: renders combat hitboxes.',
        futureFeature: true,
    },
    showNPCPaths: {
        category: 'debug', type: 'toggle', label: 'Show NPC Paths',
        default: false,
        description: 'debug: renders NPC navmesh paths.',
        futureFeature: true,
    },
    logDomainEvents: {
        category: 'debug', type: 'toggle', label: 'Log Domain Events',
        default: false,
        description: 'debug: spams console with domain lifecycle events.',
    },
    fpsUnlock: {
        category: 'debug', type: 'toggle', label: 'Unlock Frame Rate',
        default: false,
        description: 'removes frame cap. may melt ur GPU. u were warned.',
        futureFeature: true,
    },
};

const STORAGE_KEY = 'cat_god_settings_v1';

export type SettingsValues = Record<string, boolean | number | string>;

export class SettingsSystem {
    private values: SettingsValues = {};

    constructor() {
        this.loadDefaults();
        this.loadFromStorage();
    }

    private loadDefaults(): void {
        for (const [key, def] of Object.entries(SETTING_DEFS)) {
            this.values[key] = def.default as boolean | number | string;
        }
    }

    private loadFromStorage(): void {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            const parsed = JSON.parse(raw);
            // only load keys that exist in the schema -- ignore ghost settings from old versions
            for (const key of Object.keys(SETTING_DEFS)) {
                if (key in parsed) {
                    this.values[key] = parsed[key];
                }
            }
        } catch {
            // corrupted / old storage format -- just use defaults. no drama.
            console.warn('[Settings] failed to parse saved settings, using defaults');
        }
    }

    public save(): void {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.values));
        } catch {
            console.warn('[Settings] localStorage not available, settings wont persist');
        }
    }

    public get<T = unknown>(key: string): T {
        return (this.values[key] ?? SETTING_DEFS[key]?.default) as T;
    }

    public set(key: string, value: boolean | number | string): void {
        if (!(key in SETTING_DEFS)) {
            console.warn(`[Settings] unknown key: ${key}`);
            return;
        }
        this.values[key] = value;
        this.save();
        this._notifyListeners(key, value);
    }

    public getAll(): SettingsValues {
        return { ...this.values };
    }

    // change listeners -- stuff like renderEngine can subscribe and react immediately
    private _listeners: Map<string, Array<(v: boolean | number | string) => void>> = new Map();

    public onChange(key: string, fn: (v: boolean | number | string) => void): void {
        if (!this._listeners.has(key)) this._listeners.set(key, []);
        this._listeners.get(key)!.push(fn);
    }

    private _notifyListeners(key: string, value: boolean | number | string): void {
        const fns = this._listeners.get(key);
        if (fns) fns.forEach(f => f(value));
    }

    public reset(): void {
        this.loadDefaults();
        this.save();
        // notify all keys
        for (const key of Object.keys(SETTING_DEFS)) {
            this._notifyListeners(key, this.values[key]);
        }
    }
}

// singleton export -- import this anywhere u need settings
export const settings = new SettingsSystem();
