import { GRID, NUMBERS } from 'typings';
import { shuffle } from 'utils';

const gridExample: GRID = [
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

const numbers: NUMBERS[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

/**
 *  A backtracing/recursive function to check all the possible 
 * combinations of numbers until a solution is found
 * @param grid 9x9 sudoku grid
 */
function fillGrid(grid: GRID) {
	let row = 0;
	let column = 0;
	for (let i = 0; i < 81; i++) {
		row = Math.floor(i / 9);
		column = i % 9;

		if (grid[row][column] === 0) {
			shuffle(numbers);
			break;
		}
	}
}

export default fillGrid;
