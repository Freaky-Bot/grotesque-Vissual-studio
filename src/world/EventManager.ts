// WORLD EVENTS SYSTEM
// aka: chaotic random stuff that happens
// absolutely NO WAY this could be buggy haha

export enum EventType {
    CAT_UPRISING = 'cat_uprising',
    METEOR_SHOWER = 'meteor_shower',
    CAT_PARTY = 'cat_party',
    EVERYTHING_IS_FINE = 'everything_is_fine',
    THE_VOID = 'the_void',
    SILLY_MODE = 'silly_mode'
}

export class WorldEvent {
    public type: EventType;
    public duration: number;
    public timeRemaining: number;
    public intensity: number; // how chaotic lol

    constructor(type: EventType, duration: number, intensity: number = 1) {
        this.type = type;
        this.duration = duration;
        this.timeRemaining = duration;
        this.intensity = intensity;
    }

    public update(deltaTime: number): boolean {
        this.timeRemaining -= deltaTime;
        return this.timeRemaining > 0; // still happening!
    }
}

export class EventManager {
    private currentEvent: WorldEvent | null = null;
    private eventTimer: number = 0;
    private eventInterval: number = 20; // events every 20 seconds (or whenever)

    constructor() {}

    public update(deltaTime: number): void {
        // update current event if it exists
        if (this.currentEvent) {
            if (!this.currentEvent.update(deltaTime)) {
                console.log(`❌ Event ended: ${this.currentEvent.type}`);
                this.currentEvent = null;
            }
        }

        // roll for new event lol
        this.eventTimer += deltaTime;
        if (this.eventTimer >= this.eventInterval) {
            this.triggerRandomEvent();
            this.eventTimer = 0;
            this.eventInterval = 15 + Math.random() * 20; // chaos interval
        }
    }

    private triggerRandomEvent(): void {
        // NO TOUCHY the RNG gods will decide
        const eventChance = Math.random();

        if (eventChance < 0.2) {
            this.startEvent(EventType.CAT_UPRISING, 8, 2);
        } else if (eventChance < 0.35) {
            this.startEvent(EventType.METEOR_SHOWER, 5, 1.5);
        } else if (eventChance < 0.55) {
            this.startEvent(EventType.CAT_PARTY, 10, 0.8);
        } else if (eventChance < 0.65) {
            this.startEvent(EventType.THE_VOID, 3, 3);
        } else if (eventChance < 0.8) {
            this.startEvent(EventType.SILLY_MODE, 7, 1);
        }
        // else... nothing happens... for now... UwU
    }

    private startEvent(type: EventType, duration: number, intensity: number): void {
        this.currentEvent = new WorldEvent(type, duration, intensity);
        console.log(`🎉 EVENT STARTED: ${type} (intensity: ${intensity})`);

        // do event-specific stuff here maybe??
        switch (type) {
            case EventType.CAT_UPRISING:
                console.log('🐱 THE CATS RISE AGAINST THEIR OPPRESSORS!!!');
                break;
            case EventType.METEOR_SHOWER:
                console.log('☄️ SPACE ROCKS GO BONK');
                break;
            case EventType.CAT_PARTY:
                console.log('🎊 MEOW MEOW PARTY TIME!!!');
                break;
            case EventType.THE_VOID:
                console.log('💀 THE ANCIENT VOID OPENS...');
                break;
            case EventType.SILLY_MODE:
                console.log('🤪 EVERYTHING IS CHAOS NOW');
                break;
            case EventType.EVERYTHING_IS_FINE:
                console.log('✨ this is fine ✨');
                break;
        }
    }

    public getCurrentEvent(): WorldEvent | null {
        return this.currentEvent;
    }

    public isEventActive(eventType: EventType): boolean {
        return this.currentEvent !== null && this.currentEvent.type === eventType;
    }

    public getEventIntensity(): number {
        return this.currentEvent ? this.currentEvent.intensity : 0;
    }
}
