import shuffle from './';

describe('shuffle', () => {
	it('returns an array with the same length after being shuffled', () => {
		const array = [ 1, 2, 3, 4 ];
		shuffle(array);
		expect(array).toHaveLength(4);
	});

	it('returns an array with the same elements after being shuffled', () => {
		const array = [ 1, 2, 3, 4 ];
		shuffle(array);
		expect(array).toContain(1);
		expect(array).toContain(2);
		expect(array).toContain(3);
		expect(array).toContain(4);
	});
});
