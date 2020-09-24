import { NUMBERS, GRID } from 'typings';

interface IInput {
	grid: GRID;
	column: number;
	value: NUMBERS;
}

function isInColumn({ grid, column, value }: IInput) {
	for (let i = 0; i < 9; i++) {
		if (value === grid[i][column]) return true;
	}
	return false;
}

export default isInColumn;
