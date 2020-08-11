import shuffle from 'utils/shuffle';
import fruits from 'utils/fruits';
import {card, scoreItem} from 'utils/template';
import stylish from 'utils/stylish';
import Queue from 'utils/Queue';
import date from 'utils/date';
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
		this.nbCard = nbCard;
		this.arrayFruits = fruits.slice(0, nbCard);
		this.cards = this.arrayFruits.concat([...this.arrayFruits]);
		this.platform = document.querySelector(selector);
		this.guess = [];
		this.queue = new Queue(4);
		this.state = this.createState(
			{
				score: 0,
				guessed: 0,
				history: this.queue.get(),
			});
		this.renderHistory();
	}
	/**
	 * bind data to view
	 * @param {Object} state
	 * @return {Object}
	 */
	createState(state) {
		return new Proxy(state, {
			set: (object, key, value) => {
				object[key] = value;
				this.render();
				return true;
			},
		});
	}
	/**
	 * render element or update state
	 */
	render() {
		if (this.state.guessed == this.nbCard) {
			console.log('win');
			const score = {
				date: date(new Date()),
				score: this.state.score,
			};
			this.queue.add(score).save();
		}
	}
	/**
	 * Render histoire scores
	 */
	renderHistory() {
		const parent = document.querySelector('.history');
		for (const iterator of this.state.history) {
			const elements = scoreItem(iterator);
			parent.append(elements);
		}
	}
	/**
	 * bind click event to cards
	 */
	bind() {
		if (this.flip) {
			for (const o of this.flip) {
				o.addEventListener('click', (event) => {
					new Promise((resolve, reject) => {
						const el = event.target;
						try {
							// prevent clicking on multiple cards max 2
							this.platform.classList.add('disable');
							// show selected card
							el.children[0]?.classList.add('rotate');
							// add it to stack
							this.stack(el.children[0], event);
							this.state.score += 1;
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
		// if array length is two cards then wipe it
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
		this.#empty();
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
			Array.prototype.forEach.call(this.guess, (el) => {
				el?.closest('.flip')?.classList.add('disable');
			});
			this.guess = [];
			this.state.guessed += 1;
		}
	}

	#empty() {
		// flush all cards
		while (this.platform.firstChild) {
			this.platform.removeChild(this.platform.firstChild);
		}
		this.guess = [];
		this.state =
			{
				score: 0,
				guessed: 0,
				history: this.queue.get(),
			};
	}
}
export default Guess;
