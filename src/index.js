import Guess from 'utils/guess.js';
import './styles/fruits.sass';
import './styles/style.sass';
import './images/cards.png';
import './images/face.png';

document.addEventListener('DOMContentLoaded', () => {
	const game = new Guess('.platform', 12);
	game.deal();
});

