/**
 * shuffle an arrau of elements
 * @param {number} o
 * @return {Object} object
 */
export default function shuffle(o) {
	return o.sort(() => Math.random() - 0.5);
}
