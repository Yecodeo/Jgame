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
	 * create new game
	 * @param {ClassName} selector
	 * @param {Number} nbCard
	 */
	constructor(selector, nbCard = 14) {
		// pic up only n unique elements
		this.arrayFruits = fruits.slice(0, nbCard);
		this.cards = this.arrayFruits.concat([...this.arrayFruits]);
		this.platform = document.querySelector(selector);
		this.guess = [];
	}

	/**
	 * bind click event to cards
	 */
	bind() {
		if (this.flip) {
			for (const o of this.flip) {
				o.addEventListener('click', (event) => {
					event.target.children[0]?.classList.add('rotate');
					this.stack(event.target.children[0], event);
				});
			}
		}
	}

	/**
	 * 
	 * @param {*} ob 
	 * @param {*} e 
	 */
	stack(ob, e) {
		if (this.guess.length == 2) {
			this.guess = [];
		}
		this.guess.push(ob);
		const self = this;

		e.target.children[0]?.addEventListener('transitionend', function(tEvent) {
			if (self.guess.length == 2) {
				self.check();
			}
		});
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
		console.log(this);
		// 	// then check if are not the same
		const bashStyle = (style, cammand) => {
			for (const value in this.guess) {
				// check if key exists
				if (Object.prototype.hasOwnProperty.call(this.guess, value)) {
					this.guess[value]?.classList?.[cammand](style);
				}
			}
		};

		if (this.guess[0]?.classList?.value !== this.guess[1]?.classList?.value) {
			bashStyle('rotate', 'remove');
			this.guess = [];
		} else {
			bashStyle('found', 'add');
			this.guess = [];
		}
	}
}
export default Guess;
