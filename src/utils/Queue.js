/**
 * Class handle queue
 */
class Queue {
	#data;
	#limit = 4;
	/**
	 * Constructor
	 * @param {*} limit
	 */
	constructor(limit = 4) {
		this.#data = JSON.parse(window.localStorage.getItem('history')) || [];
		this.#limit = limit;
	}
	/**
	 * add to queue
	 * @param {Any} r
	 * @return {this}
	 */
	add(r) {
		if (this.#data.length == this.#limit) {
			this.remove();
		}
		this.#data.unshift(r);
		return this;
	}
	/**
	 * remove element from queue
	 *  @return {this}
	 */
	remove() {
		this.#data.pop();
		return this;
	}

	/**
	 * @return {Array}
	 */
	get() {
		return this.#data;
	}
	/**
	 * set data
	 * @param {Array} value
	 * @return {this}
	 */
	set(value) {
		this.#data = value;
		return this;
	}
	/**
	 * save array to local storage
	 * @return {this}
	 */
	save() {
		window.localStorage.setItem('history', JSON.stringify(this.#data));
		return this;
	}
}

export default Queue;
