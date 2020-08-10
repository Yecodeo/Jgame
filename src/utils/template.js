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
	const date = document.createTextNode(value.date);
	const score = document.createTextNode(value.score);
	const alert = factory('div', ['alert', 'alert-info', 'p-3']);
	alert.setAttribute('rol', 'alert');
	const elDate = factory('span', ['m-1']);
	const elScore = factory('span', ['badge', 'badge-warning']);

	elDate.append(date);
	elScore.append(score);

	multiAppend(alert, elDate, elScore);
	return alert;
};

/**
 *  append multiple elements to parent
 * @param {*} parent
 * @return {NodeDOM}
 */
function multiAppend(parent, ...args) {
	if (parent) {
		Array.prototype.forEach.call(args, function(value) {
			parent.append(value);
		});
	}
	return parent;
}
/**
 * create element and it class name
 * @param {*} type
 * @param {*} className
 * @return {nodeDOm}
 */
function factory(type, className = []) {
	if (type) {
		const el = document.createElement(type);
		for (const n of className) {
			el.classList.add(n);
		}
		return el;
	}
}

export {card, scoreItem};
