// JOJO'S BIZARRE CAT ADVENTURE
// References from Parts 1-6 because why not
// GURETO DAZE!!!

import * as THREE from 'three';

export class JojoSystem {
    // Part 1 - PHANTOM BLOOD
    private stoneMaskPower: number = 0; // when it reaches 100, VAMPIRE MODE
    
    // Part 2 - BATTLE TENDENCY  
    private hamonEnergy: number = 100; // RIPPLE!!! HAMON BREATHING
    private nextLineIsCorrect: boolean = false;
    
    // Part 3 - STARDUST CRUSADERS
    private standActive: boolean = false;
    private standName: string = "MEOW PLATINUM";
    private stardustItensity: number = 0;
    
    // Part 4 - DIAMOND IS UNBREAKABLE
    private hairInsultCounter: number = 0;
    private rohanDrawingPower: number = 0;
    
    // Part 5 - GOLDEN WIND
    private goldenDreamAwakened: boolean = false;
    private tortureDanceActive: boolean = false;
    
    // Part 6 - STONE OCEAN
    private stringFreePower: number = 0;
    private emporioEscapeProgress: number = 0;

    constructor() {
        console.log('🐱 JOJO MODE ACTIVATED!!!');
        console.log('*ゴゴゴ menacing energy radiates from the Cat God ゴゴゴ*');
    }

    // YOUR NEXT LINE IS...
    public predictNextAction(): string {
        const predictions = [
            "Your next line is: 'That's impossible!'",
            "I predict you will move right",
            "You're going to procreate with the Cat God!",
            "The Sage will use WASD next",
            "A hybrid will spawn in 3... 2... 1...",
            "You're asking 'What's the reference?'",
            "You just realized... IT WAS ME, DIO!",
            "The camera will rotate clockwise"
        ];
        return predictions[Math.floor(Math.random() * predictions.length)];
    }

    // YARE YARE DAZE
    public getYareYareDaze(): string {
        const lines = [
            "YARE YARE DAZE... another fool approaches",
            "YARE YARE... this game is truly bizarre",
            "YARE YARE DAZE! Such pathetic procreation!",
            "YARE YARE... you thought it would be different?"
        ];
        return lines[Math.floor(Math.random() * lines.length)];
    }

    // GURETO DAZE
    public getGuretoLines(): string {
        const lines = [
            "GURETO DAZE! This code is truly great!",
            "GURETO DAZE! Messy code is beautiful code!",
            "Is this your stand... sloppy coding?",
            "GURETO DAZE! I have become... SPECTACULAR!"
        ];
        return lines[Math.floor(Math.random() * lines.length)];
    }

    // ROAD ROLLER DA
    public activateRoadRollerDa(): string {
        return "ROAD ROLLER DA!!!! *compresses space-time* WRYYYYYYY";
    }

    // STONE MASK POWER
    public activateStoneMaskMode(): void {
        console.log('🧛 THE STONE MASK... IT AWAKENS THE VAMPIRE WITHIN');
        console.log('💀 WRYYYYYYY! I shall become the ultimate lifeform!');
        this.stoneMaskPower = 100;
    }

    // HAMON / RIPPLE BREATHING
    public breatheHamon(): string {
        this.hamonEnergy = 100;
        return "SENDO RIPPLE! The sound of victory! HI-HI-HI-HIIII!";
    }

    // STAND ACTIVATION - MEOW PLATINUM
    public activateStand(): string {
        this.standActive = true;
        return "*ORA ORA ORA ORA!* MEOW PLATINUM, ATTACK!";
    }

    // HAIR INSULT HANDLER (Part 4)
    public onHairInsult(): string {
        this.hairInsultCounter++;
        if (this.hairInsultCounter < 3) {
            return "You dare insult my fabulous fur?! I'm not angry... yet...";
        }
        return "DON'T YOU EVER INSULT MY HAIR AGAIN!! *poses dramatically*";
    }

    // TORTURE DANCE / GOLDEN WIND
    public activateTortureDance(): void {
        this.tortureDanceActive = true;
        this.goldenDreamAwakened = true;
        console.log('🎺 TORTURE DANCE ACTIVATED!');
        console.log('💛 GIORNO DREAMS OF A GOLDEN MEOW...');
    }

    // GOLDEN EXPERIENCE
    public goldExperienceRequiem(): string {
        return "GOLD EXPERIENCE REQUIEM! This is... the ultimate CAT FORM!";
    }

    // STONE FREE (Part 6)
    public activateStoneFree(): string {
        this.stringFreePower = 100;
        return "STONE FREE! Break these chains! I am liberated!";
    }

    // MENACING TEXT
    public getMenacingText(): string {
        return "ゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ";
    }

    // NIGERUNDAYO
    public nigerundayo(threat: string): string {
        return `NIGERUNDAYO!!! RUN AWAY FROM THE ${threat}!!!`;
    }

    // ZA WARUDO
    public zaWarudo(): string {
        return "ZA WARUDO!!! TIME STOPS! *world freezes* ...5 SECONDS HAVE PASSED";
    }

    // IT WAS ME, DIO!
    public revealDio(): string {
        return "KONO DIO DA!!! IT WAS ME, THE CAT GOD, ALL ALONG!";
    }

    // WRYYYYYYY
    public wryyyyy(): string {
        const duration = 5;
        return `WRYYYYYYYYYYYYY!!! *screams for ${duration} seconds*`;
    }

    // INFINI... INFINI... INFINITE LIVES!
    public infiniteLives(): string {
        return "I HAVE INFINITE LIVES! NINE TIMES INFINITY! THAT'S EVEN MORE NINE!";
    }

    // BIZARRE FACT CHECK
    public isBizarre(thing: string): boolean {
        // Everything in this game is bizarre, so true
        console.log(`Is ${thing} bizarre? YES! ABSOLUTELY BIZARRE!`);
        return true;
    }

    // GET A JOJO REFERENCE
    public getRandomJojoReference(): string {
        const references = [
            "OI JOSUKE! I just used ZA HANDO and erased all bugs!",
            "STICKY FINGERS! I opened a zipper in space!",
            "I'm gonna say the N-word... NIGERUNDAYO!",
            "Your next line is: 'I don't understand!'",
            "WRYYYYY... this code is truly evil!",
            "*Pillar Men theme plays*",
            "Is this a JoJo reference? YES!",
            "LEGENDARY MEGA... MEOW PLATINUM!",
            "GO BEYOND! PLUS ULTRA... wait wrong anime",
            "This game... is truly... BIZARRE",
            "MUDA MUDA MUDA! *punches ineffectively*",
            "The secret is... HAMON! *breathes mysteriously*",
            "*dramatically points at camera*",
            "BITES ZA DUSTO! *erases your action*",
            "Tell me... do you believe in gravity?",
            "STICKY FINGERS! *opens portal to another dimension*",
            "Tusk Act 4! INFINITE ROTATION MEOW!",
            "DIO'S WORLD... wait no, CAT GOD'S WORLD",
            "Part skipping is not real, you can't hurt me",
            "SAUCE SAUCE SAUCE! *dab dab dab*"
        ];
        return references[Math.floor(Math.random() * references.length)];
    }
}
