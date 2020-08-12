import shuffle from 'utils/shuffle';

describe('Testing shuffle module', () => {
	test('it should shuffle array elements', () => {
		const animals = ['doncky', 'lion', 'cat', 'rabbit'];
		const shuffled = shuffle([...animals]);
		const animalsReduce = animals.reduce((v, s) => `${v}${s}`);
		const shuffledReduce = shuffled.reduce((v, s) => `${v}${s}`);
		expect(animalsReduce).not.toEqual(shuffledReduce);
	});
});
