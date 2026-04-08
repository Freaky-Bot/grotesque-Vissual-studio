
// hewwo fwom da void~ UwU
// starting menu logic, nyaaa!

function showGameArea() {
	// Remove menu and show placeholder game area
	const menu = document.getElementById('start-menu');
	if (menu) menu.style.display = 'none';
	let game = document.getElementById('game-area');
	if (!game) {
		game = document.createElement('div');
		game.id = 'game-area';
		game.style.position = 'absolute';
		game.style.top = '0';
		game.style.left = '0';
		game.style.width = '100vw';
		game.style.height = '100vh';
		game.style.display = 'flex';
		game.style.alignItems = 'center';
		game.style.justifyContent = 'center';
		game.style.color = '#fff';
		game.style.fontSize = '2rem';
		game.style.background = 'linear-gradient(135deg, #232946 0%, #393e46 100%)';
		game.innerHTML = 'Game will start here! UwU';
		document.body.appendChild(game);
	}
}

window.addEventListener('DOMContentLoaded', () => {
	const startBtn = document.getElementById('start-btn');
	if (startBtn) {
		startBtn.addEventListener('click', showGameArea);
	}

	// Load patch notes from dist/patchnotes.json
	fetch('./patchnotes.json')
		.then(r => r.json())
		.then(notes => {
			const pn = document.getElementById('patch-notes');
			if (pn && Array.isArray(notes)) {
				pn.innerHTML = '<b>Patch Notes:</b><br>' + notes.slice(0, 5).map(n =>
					`<div style='margin-bottom:0.5em;'><span style='color:#b8b8ff;'>${n.date}</span> <span style='color:#fff;'>${n.msg}</span></div>`
				).join('');
			}
		});
});