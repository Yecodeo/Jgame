import Queue from 'utils/Queue';

/**
 * serialize class to local storage
 */
class Store {
	#item;
	/**
	 * Constructor
	 * @param {Number} limit
	 */
	constructor(limit) {
		this.#item = JSON.parse(window.localStorage.getItem('history')) ?? new Queue();
	}
	/**
	 * get the stored class
	 * @return {class}
	 */
	getItem() {
		return this.#item;
	}
	/**
	 * save class
	 * @param {class} item
	 */
	setItem(item) {
		this.#item = item;
		window.localStorage.setItem('history', JSON.stringify(this.#item));
	}
}
export default Store;
