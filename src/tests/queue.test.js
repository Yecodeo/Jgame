import Queue from 'utils/queue';

describe('Testing queue module', () => {
	test('test last element added', () => {
		const queue = new Queue();
		for (let i = 0; i < 4; i++) {
			queue.add(i);
		}
		const list = queue.get();
		expect(list[0]).toBe(3);
	});
	test('it should remove last element', () => {
		const queue = new Queue();
		for (let i = 0; i < 5; i++) {
			queue.add(i);
		}
		const list = queue.get();
		expect(list[0]).toBe(4);
		expect(list[3]).toBe(1);
	});
});
