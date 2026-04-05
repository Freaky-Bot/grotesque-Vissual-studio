// chat system -- press enter to open, type stuff, press enter to send
// also used for announcing game events cuz why not
// this is basically discord but worse and inside a cat game

export type ChatMessageType = 'player' | 'event' | 'system' | 'knuckles' | 'catgod';

export interface ChatMessage {
    type: ChatMessageType;
    text: string;
    timestamp: number;
}

export class ChatSystem {
    private messages: ChatMessage[] = [];
    private isOpen: boolean = false;
    private readonly MAX_MESSAGES = 50; // dont keep a billion messages whatever
    private onPlayerSend: ((text: string) => void) | null = null; // hook for player chat bubble

    // dom elements -- grabbed once at init so we dont query dom every frame like animals
    private chatBox: HTMLElement;
    private chatLog: HTMLElement;
    private chatInputWrapper: HTMLElement;
    private chatInput: HTMLInputElement;

    private boundKeyDown: (e: KeyboardEvent) => void;

    constructor() {
        // grab elements from dom, they should exist from index.html
        this.chatBox = document.getElementById('chat-box')!;
        this.chatLog = document.getElementById('chat-log')!;
        this.chatInputWrapper = document.getElementById('chat-input-wrapper')!;
        this.chatInput = document.getElementById('chat-input') as HTMLInputElement;

        this.boundKeyDown = (e: KeyboardEvent) => this.handleKey(e);
        document.addEventListener('keydown', this.boundKeyDown);

        // welcome message lol
        this.addMessage('system', 'Welcome to Cat God World. Press ENTER to chat.');
        this.addMessage('system', 'Events will be announced here.');
    }

    private handleKey(e: KeyboardEvent): void {
        if (e.key === 'Enter') {
            if (!this.isOpen) {
                // open chat
                this.open();
                e.preventDefault();
            } else {
                // send message if there's text, or just close if empty
                const text = this.chatInput.value.trim();
                if (text.length > 0) {
                    this.sendPlayerMessage(text);
                    this.chatInput.value = '';
                } else {
                    this.close();
                }
                e.preventDefault();
            }
        } else if (e.key === 'Escape' && this.isOpen) {
            this.chatInput.value = '';
            this.close();
            e.preventDefault();
        }
    }

    private open(): void {
        this.isOpen = true;
        this.chatInputWrapper.style.display = 'flex';
        this.chatBox.style.opacity = '1';
        // gotta use setTimeout or the keydown 'Enter' will instantly re-trigger focus stuff
        setTimeout(() => this.chatInput.focus(), 10);
    }

    private close(): void {
        this.isOpen = false;
        this.chatInputWrapper.style.display = 'none';
        this.chatBox.style.opacity = '0.6'; // fade a lil when closed
        this.chatInput.blur();
    }

    private sendPlayerMessage(text: string): void {
        // sanitize input a tiny bit -- no html injection in my cat game thanks
        const safe = text.replace(/</g, '&lt;').replace(/>/g, '&gt;').substring(0, 200);
        this.addMessage('player', `You: ${safe}`);
        this.onPlayerSend?.(safe); // show bubble above player too
    }

    public setOnPlayerSend(fn: (text: string) => void): void {
        this.onPlayerSend = fn;
    }

    public addMessage(type: ChatMessageType, text: string): void {
        const msg: ChatMessage = { type, text, timestamp: Date.now() };
        this.messages.push(msg);

        // trim old messages -- no memory leaks today
        if (this.messages.length > this.MAX_MESSAGES) {
            this.messages.shift();
        }

        this.renderMessage(msg);
    }

    private renderMessage(msg: ChatMessage): void {
        const el = document.createElement('div');
        el.classList.add('chat-msg', `chat-msg-${msg.type}`);

        // timestamp -- just seconds since epoch truncated, no one cares about real time
        const time = new Date(msg.timestamp);
        const timeStr = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;

        el.innerHTML = `<span class="chat-time">[${timeStr}]</span> ${msg.text}`;
        this.chatLog.appendChild(el);

        // auto scroll to bottom, always
        this.chatLog.scrollTop = this.chatLog.scrollHeight;

        // flash the chat box when closed so they notice something happened
        if (!this.isOpen) {
            this.chatBox.style.opacity = '1';
            setTimeout(() => {
                if (!this.isOpen) this.chatBox.style.opacity = '0.6';
            }, 2000);
        }
    }

    public announceEvent(text: string): void {
        this.addMessage('event', `📢 ${text}`);
    }

    public announceKnuckles(text: string): void {
        this.addMessage('knuckles', `🦔 ${text}`);
    }

    public announceCatGod(text: string): void {
        this.addMessage('catgod', `🐱 ${text}`);
    }

    public isInputOpen(): boolean {
        return this.isOpen; // so game can block wasd while typing
    }
}
