import Guess from 'utils/guess.js';
import './styles/fruits.sass';
import './styles/style.sass';
import './images/cards.png';
import './images/face.png';
import 'hover.css';

document.addEventListener('DOMContentLoaded', () => {
	const game = new Guess('.platform', 14);
	game.deal();
});

