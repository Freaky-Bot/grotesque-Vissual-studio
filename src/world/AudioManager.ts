// handles background music, nyan cat goes brrr
// starts on first user interaction because browsers are annoying about autoplay whatever

export class AudioManager {
    private audio: HTMLAudioElement;
    private started: boolean = false;
    private muted: boolean = false;
    private boundStart: () => void;

    constructor(src: string, volume: number = 0.4) {
        this.audio = new Audio(src);
        this.audio.loop = true;
        this.audio.volume = volume;

        // gotta wait for user gesture or browser yells at us lol
        this.boundStart = () => this.tryStart();
        document.addEventListener('keydown', this.boundStart);
        document.addEventListener('click', this.boundStart);

        // mute toggle with M key
        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'm') this.toggleMute();
        });
    }

    private tryStart(): void {
        if (this.started) return;
        this.started = true;
        // cleanup listeners so we dont call this a billion times, yikes
        document.removeEventListener('keydown', this.boundStart);
        document.removeEventListener('click', this.boundStart);

        this.audio.play().catch((err) => {
            // browser said no, whatever, try again next time i guess
            console.warn('audio failed to start, browser said no:', err);
            this.started = false;
            document.addEventListener('keydown', this.boundStart);
            document.addEventListener('click', this.boundStart);
        });
    }

    public toggleMute(): void {
        this.muted = !this.muted;
        this.audio.muted = this.muted;
        console.log('music ' + (this.muted ? 'muted (rip nyan cat)' : 'unmuted (nyan cat returns!!)'));
    }

    public setVolume(v: number): void {
        this.audio.volume = Math.max(0, Math.min(1, v)); // clamp it, no ears bleeding
    }

    public stop(): void {
        this.audio.pause();
        this.audio.currentTime = 0;
    }
}
