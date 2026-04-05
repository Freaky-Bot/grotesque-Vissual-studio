// Cat God World -- multiplayer server
// simple websocket relay: connects players, broadcasts positions and chat
// NO rooms, NO auth, NO persistence -- just pure chaos with your friends
//
// HOW TO RUN:
//   npm install        (installs ws package)
//   node server.js     (start this in a separate terminal while running npm run dev)
//
// Server listens on ws://localhost:8080
// Players connect automatically when the game loads

import { WebSocketServer } from 'ws';
import { randomUUID } from 'crypto';

const PORT = 8080;

const wss = new WebSocketServer({ port: PORT });

// all currently connected players -- id -> player data
// nothing is persisted, if server restarts everyone gets kicked out, oh well
const players = new Map();

// send a json message to everyone except the one player (if excludeId is set)
function broadcast(data, excludeId = null) {
    const msg = JSON.stringify(data);
    for (const [id, player] of players) {
        if (id !== excludeId && player.ws.readyState === 1 /* OPEN */) {
            try {
                player.ws.send(msg);
            } catch (e) {
                // player probably disconnected mid-broadcast, ignore
            }
        }
    }
}

wss.on('connection', (ws) => {
    const id = randomUUID();
    let hasJoined = false; // track if they sent the join message yet

    console.log(`new connection: ${id.slice(0, 8)}... (total sockets: ${wss.clients.size})`);

    ws.on('message', (raw) => {
        let msg;
        try {
            msg = JSON.parse(raw.toString());
        } catch {
            // bad json, kick them or just ignore?? lets just ignore it
            return;
        }

        if (msg.type === 'join' && !hasJoined) {
            // sanitize username -- no html injection in my cat game
            const username = String(msg.username || 'anon')
                .replace(/</g, '&lt;').replace(/>/g, '&gt;')
                .substring(0, 20) || 'anon';

            players.set(id, { ws, username, x: 0, y: 2, z: 0, ry: 0 });
            hasJoined = true;

            // send them a welcome with the list of all other current players
            const currentPlayers = [...players.entries()]
                .filter(([pid]) => pid !== id)
                .map(([pid, p]) => ({
                    id: pid,
                    username: p.username,
                    x: p.x, y: p.y, z: p.z, ry: p.ry
                }));

            ws.send(JSON.stringify({
                type: 'welcome',
                yourId: id,
                players: currentPlayers
            }));

            // announce to everyone else that this player joined
            broadcast({ type: 'playerJoined', player: { id, username, x: 0, y: 2, z: 0, ry: 0 } }, id);

            console.log(`+ ${username} joined! players online: ${players.size}`);
        }

        else if (msg.type === 'move' && hasJoined) {
            const player = players.get(id);
            if (!player) return;

            // clamp positions to world bounds so nobody escapes the cat god
            player.x = Math.max(-250, Math.min(250, +msg.x || 0));
            player.y = Math.max(0, Math.min(50, +msg.y || 2));
            player.z = Math.max(-250, Math.min(250, +msg.z || 0));
            player.ry = +msg.ry || 0;

            // relay to everyone else -- no need to send back to the sender
            broadcast({ type: 'playerMoved', id, x: player.x, y: player.y, z: player.z, ry: player.ry }, id);
        }

        else if (msg.type === 'chat' && hasJoined) {
            const player = players.get(id);
            if (!player) return;

            // sanitize chat text -- anti-xss even though this is a cat game lol
            const text = String(msg.text || '')
                .replace(/</g, '&lt;').replace(/>/g, '&gt;')
                .substring(0, 200)
                .trim();

            if (!text) return;

            broadcast({ type: 'playerChat', id, username: player.username, text }, id);
            console.log(`[chat] ${player.username}: ${text}`);
        }
    });

    ws.on('close', () => {
        const player = players.get(id);
        players.delete(id);

        if (player) {
            // tell everyone this player is gone
            broadcast({ type: 'playerLeft', id });
            console.log(`- ${player.username} left. players online: ${players.size}`);
        }
    });

    ws.on('error', (e) => {
        console.warn(`socket error (${id.slice(0, 8)}...):`, e.message);
        // onclose will fire after this anyway
    });
});

wss.on('error', (e) => {
    console.error('server error:', e);
});

console.log(`
  ╔══════════════════════════════════════════╗
  ║   Cat God World -- Multiplayer Server    ║
  ║   ws://localhost:${PORT}                   ║
  ║                                          ║
  ║   DO U KNO DA WEY                        ║
  ╚══════════════════════════════════════════╝
`);
console.log('waiting for players...');
