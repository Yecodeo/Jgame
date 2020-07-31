/**
 * add or remove className
 * @param {*} array
 * @param {*} style
 * @param {*} cammand
 */
const stylish = (array, style, cammand) => {
	for (const value in array) {
		// check if key exists
		if (Object.prototype.hasOwnProperty.call(array, value)) {
			array[value]?.classList?.[cammand](style);
		}
	}
};
export default stylish;
