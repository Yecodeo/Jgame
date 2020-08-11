import Guess from 'utils/Guess.js';
import './styles/fruits.sass';
import './styles/style.sass';
import './images/cards.png';
import './images/face.png';

document.addEventListener('DOMContentLoaded', () => {
	const game = new Guess('.platform', 12);
	game.deal();

	const el = document.querySelector('.new');
	el.addEventListener('click', () => {
		game.deal();
	});
});

