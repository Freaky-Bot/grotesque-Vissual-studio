// COMBO SYSTEM -- interact with things fast enough and get a flashy combo counter
// purely vibes, no gameplay impact, just makes u feel cool
// the overlay element must exist in index.html with id="combo-overlay"

export class ComboSystem {
    private combo: number = 0;
    private comboTimer: number = 0;
    private readonly COMBO_WINDOW: number = 3.2; // seconds to keep combo alive
    private overlayEl: HTMLElement | null = null;
    private hideTimeout: ReturnType<typeof setTimeout> | null = null;

    constructor() {
        this.overlayEl = document.getElementById('combo-overlay');
        if (!this.overlayEl) {
            // try again once dom is loaded, idk why this sometimes fails
            setTimeout(() => { this.overlayEl = document.getElementById('combo-overlay'); }, 500);
        }
    }

    public update(deltaTime: number): void {
        if (this.combo > 0) {
            this.comboTimer -= deltaTime;
            if (this.comboTimer <= 0) {
                this.breakCombo();
            }
        }
    }

    // call this when player does something cool (talks to npc, picks up item, procreates etc)
    public registerInteraction(): void {
        this.combo++;
        this.comboTimer = this.COMBO_WINDOW; // reset window
        if (this.combo >= 3) {
            this.displayCombo();
        }
    }

    private displayCombo(): void {
        if (!this.overlayEl) return;

        const label = this.getComboLabel();
        this.overlayEl.textContent = `${label} x${this.combo}!`;
        this.overlayEl.style.display = 'block';
        this.overlayEl.style.opacity = '1';
        this.overlayEl.style.color = this.getComboColor();
        this.overlayEl.style.fontSize = Math.min(22 + this.combo * 2.5, 72) + 'px';
        this.overlayEl.style.textShadow = `0 0 20px ${this.getComboColor()}`;

        // lil pop scale effect
        this.overlayEl.style.transform = 'translate(-50%, -50%) scale(1.35)';
        setTimeout(() => {
            if (this.overlayEl) this.overlayEl.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 120);

        // auto hide after a bit
        if (this.hideTimeout) clearTimeout(this.hideTimeout);
        this.hideTimeout = setTimeout(() => {
            if (this.overlayEl) this.overlayEl.style.opacity = '0';
        }, 2200);

        if (this.combo === 10) {
            console.log('%c😸 PURRFECT COMBO x10!!! THIS IS PEAK CAT', 'color: gold; font-size: 20px; font-weight: bold');
        }
        if (this.combo === 20) {
            console.log('%c🐱‍👤 LEGENDARY PURRFECT COMBO x20!!! THE VOID IS IMPRESSED', 'color: #ff00ff; font-size: 24px; font-weight: bold');
        }
    }

    private getComboLabel(): string {
        if (this.combo >= 20) return '🐱‍👤 LEGENDARY PURRFECT';
        if (this.combo >= 10) return '😸 PURRFECT COMBO';
        if (this.combo >= 5) return '🐱 MEOW COMBO';
        return '💬 CHAT COMBO';
    }

    private getComboColor(): string {
        if (this.combo >= 20) return '#ff00ff';
        if (this.combo >= 10) return '#ffd700';
        if (this.combo >= 5) return '#ff8800';
        return '#ffffff';
    }

    private breakCombo(): void {
        if (this.combo >= 5) {
            console.log(`%c😿 combo of ${this.combo} broken......`, 'color: gray');
        }
        this.combo = 0;
        if (this.overlayEl) {
            this.overlayEl.style.opacity = '0';
        }
    }

    public getComboCount(): number {
        return this.combo;
    }
}
