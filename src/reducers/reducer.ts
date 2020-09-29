import { AnyAction } from 'redux';

import { compareArrays, copyGrid, createFullGrid, removeNumbers } from 'utils';

import { IReducer } from './interfaces';
import { GRID } from 'typings';
import * as types from './types';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction) {
	switch (action.type) {
		case types.CREATE_GRID:
			const solvedGrid = createFullGrid();
			const gridCopy = copyGrid(solvedGrid);
			const challengeGrid = removeNumbers(gridCopy);
			const workingGrid = copyGrid(challengeGrid);
			return {
				...state,
				solvedGrid,
				challengeGrid,
				workingGrid
			};
		case types.SELECT_BLOCK:
			return {
				...state,
				selectedBlock: action.coords
			};
		case types.FILL_BLOCK:
			if (state.solvedGrid && state.workingGrid) {
				if (state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value) {
					alert('Incorrect Option');
					return state;
				}
				state.workingGrid[action.coords[0]][action.coords[1]] = action.value;
				if (compareArrays(state.workingGrid, state.solvedGrid)) {
					alert('Completed!');
				}
				return {
					...state,
					workingGrid: [ ...state.workingGrid ] as GRID
				};
			}
			return {
				...state,
				selectedBlock: action.coords
			};
		default:
			return state;
	}
}

export default reducer;
