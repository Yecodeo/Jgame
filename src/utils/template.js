/**
 * create card node to add
 * @param {*} props *
 * @return {NodeDOM}
 */
export default function card(props) {
	const flip = factory('div', ['m-1', 'flip']);
	const c = factory('div', ['carte']);
	const hidden = factory('div', ['hiddens']);
	const picture = factory('div', ['picture', props]);

	hidden.append(picture);
	c.append(hidden);
	flip.append(c);
	return flip;
}

/**
 * create element and it class name
 * @param {*} type
 * @param {*} className
 * @return {nodeDOm}
 */
function factory(type, className = []) {
	if (type && className) {
		const el = document.createElement(type);
		for (const n of className) {
			el.classList.add(n);
		}
		return el;
	}
}
