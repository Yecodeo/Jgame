import date from 'utils/date';

describe('Testing date module', () => {
	test('get date', () => {
		const result = date(new Date('2020-09-22T15:00:00'));
		expect(result).toBe('2020-09-22 15:00');
	});
});
