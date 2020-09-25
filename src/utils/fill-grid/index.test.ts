import { GRID } from 'typings';

import fillGrid from './';

describe('fillGrid', () => {
	it('fills an empty grid', () => {
		const grid: GRID = [
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
		];
		fillGrid(grid);
		//my approach with loop
		for (let row of grid)
			for (let column of row) {
				expect(column).toBeGreaterThanOrEqual(1);
				expect(column).toBeLessThanOrEqual(9);
			}
	});

	it('fills a valid partially filled grid', () => {
		const grid: GRID = [
			[ 0, 4, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 3, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 2, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 6 ],
			[ 0, 5, 0, 0, 0, 0, 0, 0, 0 ]
		];
		fillGrid(grid);
		for (let row in grid)
			for (let column in grid[row]) {
				expect(grid[row][column]).toBeGreaterThanOrEqual(1);
				expect(grid[row][column]).toBeLessThanOrEqual(9);
			}
	});
});
