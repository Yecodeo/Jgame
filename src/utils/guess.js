import shuffle from 'utils/shuffle';
import fruits from 'utils/fruits';
import card from 'utils/template';

const types = [
	'webkitTransitionEnd', 'otransitionend',
	'oTransitionEnd', 'msTransitionEnd', 'transitionend',
];

/**
 * no parameters
 */
class Guess {
	/**
	 * Constructor
	 */
	constructor() {
		this.arrayFruits = fruits.slice(0, 14); // pic up only 14 unique elements
		this.cards = this.arrayFruits.concat([...this.arrayFruits]);
		this.platform = document.querySelector('.platform');
		this.guess = [];
	}

	/**
	 * bind click event to cards
	 */
	bind() {
		if (this.flip) {
			for (const o of this.flip) {
				o.addEventListener('click', (event) => {
					event.target.children[0].classList.add('rotate');
					this.stack(event.target.children[0]);
				});
			}
		}
	}
	/**
	 * manager selected card
	 * @param {DOMNode} ob
	 */
	stack(ob) {
		if (this.guess.length == 2) {
			this.guess = [];
			this.guess.push(ob);
		} else {
			this.guess.push(ob);
			types.forEach((type) => event.target.children[0].addEventListener(type, this.check()));
		}
	}

	/**
	 * card dealer
	 */
	deal() {
		this.cards = shuffle(this.cards);
		for (const key of this.cards) {
			const carte = card(key);

			if (carte) {
				this.platform.appendChild(carte);
			}
		}
		this.flip = document.querySelectorAll('.flip');
		this.bind();
	}
	/**
	 * check the selected
	 */
	check() {
		// check if two cards are selected
		if (this.guess.length === 2) {
			// then check if are the same
			for (const value in this.guess) {
				// check if key exists
				if (Object.prototype.hasOwnProperty.call(this.guess, value)) {
					this.guess[value].remove('rotate');
				}
			}

			// this.guess?.one.classList.remove('rotate');
			// this.guess?.two.classList.remove('rotate');
			this.guess = {};
		}
	}
}
export default Guess;
