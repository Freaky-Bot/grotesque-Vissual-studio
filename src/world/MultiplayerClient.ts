// multiplayer client -- handles websocket connection to the game server
// sends player position at ~20hz and receives other players' updates
// if the server isnt running it just silently fails, game still works solo yolo

export interface PlayerState {
    id: string;
    username: string;
    x: number;
    y: number;
    z: number;
    ry: number; // rotation Y
}

export class MultiplayerClient {
    private ws: WebSocket | null = null;
    private playerId: string = '';
    private username: string;
    private connected: boolean = false;
    private lastSendTime: number = 0;
    private serverUrl: string;
    private readonly SEND_INTERVAL = 50; // 20hz update rate -- server doesnt need 60fps spam

    // callbacks -- set these from main.ts to react to network events
    public onPlayerJoin: ((player: PlayerState) => void) | null = null;
    public onPlayerLeave: ((id: string) => void) | null = null;
    public onPlayerMove: ((id: string, x: number, y: number, z: number, ry: number) => void) | null = null;
    public onPlayerChat: ((id: string, username: string, text: string) => void) | null = null;
    public onConnected: ((id: string, players: PlayerState[]) => void) | null = null;
    public onDisconnected: (() => void) | null = null;
    public onStatusChange: ((status: string) => void) | null = null;

    constructor(serverUrl: string, username: string) {
        this.username = username;
        this.serverUrl = serverUrl;
        this.connect();
    }

    private connect(): void {
        try {
            this.ws = new WebSocket(this.serverUrl);
        } catch (e) {
            console.warn('multiplayer: failed to connect, server probably not running', e);
            this.onStatusChange?.('offline');
            return;
        }

        this.onStatusChange?.('connecting...');

        this.ws.onopen = () => {
            this.connected = true;
            console.log('%cmultiplayer: connected!! joining as ' + this.username, 'color: cyan; font-weight: bold');
            this.send({ type: 'join', username: this.username });
            this.onStatusChange?.('connecting...');
        };

        this.ws.onmessage = (event) => {
            try {
                const msg = JSON.parse(event.data as string);
                this.handleMessage(msg);
            } catch (e) {
                console.warn('multiplayer: bad message from server, ignoring', e);
            }
        };

        this.ws.onclose = () => {
            this.connected = false;
            console.log('multiplayer: disconnected, retrying in 3s...');
            this.onDisconnected?.();
            this.onStatusChange?.('reconnecting...');
            // auto reconnect after 3 seconds -- keep trying forever basically
            setTimeout(() => this.connect(), 3000);
        };

        this.ws.onerror = () => {
            // errors always precede onclose so we dont need to do much here
            console.warn('multiplayer: connection error (is server.js running?)');
            this.onStatusChange?.('offline (no server)');
        };
    }

    private handleMessage(msg: Record<string, unknown>): void {
        switch (msg.type) {
            case 'welcome':
                this.playerId = msg.yourId as string;
                this.onConnected?.(this.playerId, (msg.players ?? []) as PlayerState[]);
                this.onStatusChange?.('online');
                console.log('%cmultiplayer: got welcome! id=' + this.playerId, 'color: lime');
                break;

            case 'playerJoined':
                this.onPlayerJoin?.(msg.player as PlayerState);
                break;

            case 'playerLeft':
                this.onPlayerLeave?.(msg.id as string);
                break;

            case 'playerMoved':
                this.onPlayerMove?.(
                    msg.id as string,
                    msg.x as number,
                    msg.y as number,
                    msg.z as number,
                    msg.ry as number
                );
                break;

            case 'playerChat':
                this.onPlayerChat?.(msg.id as string, msg.username as string, msg.text as string);
                break;

            default:
                // unknown message type, just ignore it
                break;
        }
    }

    private send(data: object): void {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(data));
        }
    }

    // called from animate loop -- internally throttled to ~20hz
    public sendPosition(x: number, y: number, z: number, ry: number): void {
        const now = Date.now();
        if (now - this.lastSendTime < this.SEND_INTERVAL) return;
        this.lastSendTime = now;
        this.send({ type: 'move', x, y, z, ry });
    }

    // send a chat message to other players
    public sendChat(text: string): void {
        this.send({ type: 'chat', text });
    }

    public isConnected(): boolean {
        return this.connected;
    }

    public getId(): string {
        return this.playerId;
    }

    public getUsername(): string {
        return this.username;
    }

    public disconnect(): void {
        this.ws?.close();
    }
}
