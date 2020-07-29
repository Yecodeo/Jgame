import Guess from 'utils/guess.js';
import './styles/fruits.scss';
import './styles/style.scss';
import './images/cards.png';

$(document).ready(function() {
	const game = new Guess('.platform', 14);
	game.deal();
});
