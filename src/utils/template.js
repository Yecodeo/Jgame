export default function card(props) {
	const flip = factory('div', ['m-1', 'flip']);
	const c = factory('div', ['carte']);
	const hidden =  factory('div', ['hiddens']); 
	const picture = factory('div', ['picture', props]); 

	hidden.append(picture);
	c.append(hidden);
	flip.append(c);
	return flip;
}
/**
 * create element and it class name
 * @param {node type} type 
 * @param {class name} className 
 */
function factory(type, className = []) {
	if (type && className) {
		let el = document.createElement(type);
		for (const n of className) {
			el.classList.add(n);
		}
		return el;
	}
}