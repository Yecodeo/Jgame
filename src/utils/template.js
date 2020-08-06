/**
 * create card node to add
 * @param {*} props *
 * @return {NodeDOM}
 */
const card = (props) => {
	const flip = factory('div', ['m-3', 'flip']);
	const c = factory('div', ['carte']);
	const hidden = factory('div', ['hiddens']);
	const picture = factory('div', ['picture', props]);
	hidden.append(picture);
	c.append(hidden);
	flip.append(c);
	return flip;
};

/**
 *  return Domnode
 * @param {*} value 
 * @return {DOMNode}
 */
const scoreItem = (value) => {
	const alert = factory('div', ['alert', 'alert-success']);
	alert.setAttribute('rol', 'alert');
	alert.innerHTML = value;
	return alert;
};

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

export {card, scoreItem};
