// INTERACTION SYSTEM
// aka: pressing buttons and hoping for the best lol

export class InteractionSystem {
    private keyStates: Record<string, boolean> = {};
    private clickCount: number = 0;
    private clickMultiplier: number = 1;
    private isDragging: boolean = false;

    constructor() {
        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        // keyboard go brrrr
        document.addEventListener('keydown', (e) => {
            this.keyStates[e.key.toLowerCase()] = true;
            console.log(`key pressed: ${e.key} UwU`);
        });

        document.addEventListener('keyup', (e) => {
            this.keyStates[e.key.toLowerCase()] = false;
        });

        // clicky clicky
        document.addEventListener('mousedown', () => {
            this.isDragging = true;
        });

        document.addEventListener('mouseup', () => {
            this.isDragging = false;
        });

        document.addEventListener('click', () => {
            this.clickCount++;
            this.clickMultiplier = Math.min(10, 1 + this.clickCount * 0.1); // chaos scaling lol

            if (this.clickCount % 10 === 0) {
                console.log('🎉 click streak x' + this.clickCount);
            }

            // reset after 2 seconds of no clicks
            setTimeout(() => {
                if (this.clickCount > 0) {
                    this.clickCount = Math.max(0, this.clickCount - 1);
                    this.clickMultiplier = Math.max(1, this.clickMultiplier - 0.1);
                }
            }, 2000);
        });
    }

    public isKeyPressed(key: string): boolean {
        return this.keyStates[key.toLowerCase()] || false;
    }

    public getClickMultiplier(): number {
        return this.clickMultiplier;
    }

    public isDraggingMouse(): boolean {
        return this.isDragging;
    }

    // secret konami code vibes
    public checkSecretCode(): boolean {
        // just some silliness lol
        // TODO: actually implement this? maybe? nah
        return false;
    }
}
