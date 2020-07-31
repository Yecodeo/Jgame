import shuffle from 'utils/shuffle';
import fruits from 'utils/fruits';
import card from 'utils/template';
import stylish from 'utils/stylish';
/**
 * no parameters
 */
class Guess {
	/**
	 * initialize the game
	 * @param {ClassName} selector
	 * @param {Number} nbCard
	 */
	constructor(selector, nbCard = 14) {
		// pic up only n unique elements
		this.arrayFruits = fruits.slice(0, nbCard);
		this.cards = this.arrayFruits.concat([...this.arrayFruits]);
		this.platform = document.querySelector(selector);
		this.guess = [];
		this.scoor = 0;
	}

	/**
	 * bind click event to cards
	 */
	bind() {
		if (this.flip) {
			for (const o of this.flip) {
				o.addEventListener('click', (event) => {
					new Promise((resolve, reject) => {
						try {
							// prevent clicking on multiple cards max 2
							this.platform.classList.add('disable');
							// show selected card
							event.target.children[0]?.classList.add('rotate');
							// add it to stack
							this.stack(event.target.children[0], event);
							resolve();
						} catch (err) {
							reject(err);
						}
					});
				});
			}
		}
	}

	/**
	 * handle stack of cards
	 * @param {*} ob
	 * @param {*} e
	 */
	stack(ob, e) {
		if (this.guess.length == 2) {
			this.guess = [];
		}
		this.guess.push(ob);
		const self = this;
		/** trigger check function after transition take ends */
		e.target.children[0]?.addEventListener('transitionend', function(tEvent) {
			if (self.guess.length == 2) {
				self.check();
			}
			// transition and check done, unlock the click again
			self.platform.classList.remove('disable');
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
		/** if pair match keep them shown and unclickable */
		if (this.guess[0]?.classList?.value !== this.guess[1]?.classList?.value) {
			stylish(this.guess, 'rotate', 'remove');
			this.guess = [];
		} else {
			// keep cards returned and disable click on them
			stylish(this.guess, 'found', 'add');
			this.guess[0]?.closest('.flip')?.classList.add('disable');
			this.guess[1]?.closest('.flip')?.classList.add('disable');
			this.guess = [];
		}
		this.scoor += 1;
	}
}
export default Guess;
