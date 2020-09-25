import { SQUARE, NUMBERS } from 'typings';

interface IInput {
	square: SQUARE;
	value: NUMBERS;
}

function isInSquare({ square, value }: IInput): boolean {
	return square.flat().includes(value);
}

export default isInSquare;
