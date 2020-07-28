/**
 * handle event on transition take end
 * @param {*} event
 * @param {*} callback
 */
export default function transitionEnd(event, callback) {
	if (event && callback) {
		const types = [
			'webkitTransitionEnd', 'otransitionend',
			'oTransitionEnd', 'msTransitionEnd', 'transitionend',
		];
		types.forEach((type) => event.addEventListener(type, callback));
	}
}
