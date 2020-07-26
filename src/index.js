import Guess from 'utils/guess.js';
import './styles/fruits.scss';
import './styles/style.scss';
import './images/cards.png';

$(document).ready(function () {
	var game = new Guess();
	game.deal();
});