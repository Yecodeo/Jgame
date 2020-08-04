/**
 * Class handle queue
 */
class Queue {
	/**
	 * 
	 * @param {*} limit
	 */
	constructor(limit = 4) {
		this.data =  this.#getAll() || [];
	}
	/**
	 * add to queue
	 * @param {Any} r
	 */
	add(r) {
		this.data.unshift(r);
	}
	/**
	 * remove element from queue
	 * @param {Any} r
	 */
	remove(r) {
		this.data.pop(r);
	}
	/**
	 * 
	 */
	#getAll() {
		return  window.localStorage.getItem('history');
	}

	/**
	 * @return {Array}
	 */
	getStoredItems() {
		return this.data;
	}
	/**
	 * set data
	 * @param {Array} value
	 */
	setStoredItems(value) {
		this.data = value;
	}
}

export default Queue;
