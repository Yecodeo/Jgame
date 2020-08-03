/**
 * Class handle queue
 */
class Queue {
	/**
	 * Constructor
	 */
	constructor() {
		this.data = [];
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
}

export default Queue;
