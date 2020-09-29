import React, { FC, Children, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import useMouseTrap from 'react-hook-mousetrap';

import Block from './block';
import { Container, Row } from './styles';

import { createGrid, IReducer, selectBlock, fillBlock } from 'reducers';

import { INDEX, BLOCK_COORDS, N, NUMBERS } from 'typings';

interface IState {
	selectedBlock?: BLOCK_COORDS;
	selectedValue?: N;
}

const Grid: FC = () => {
	const state = useSelector<IReducer, IState>(({ selectedBlock, workingGrid }) => ({
		selectedBlock,
		selectedValue: workingGrid && selectedBlock ? workingGrid[selectedBlock[0]][selectedBlock[1]] : 0
	}));
	const dispatch = useDispatch<Dispatch<AnyAction>>();
	const create = useCallback(() => dispatch(createGrid()), [ dispatch ]);
	const fill = useCallback(
		(n: NUMBERS) => {
			if (state.selectedBlock && state.selectedValue === 0) dispatch(fillBlock(state.selectedBlock, n));
		},
		[ dispatch, state.selectedBlock, state.selectedValue ]
	);
	useEffect(
		() => {
			create();
		},
		[ create ]
	);

	useMouseTrap('up', moveUp);
	useMouseTrap('down', moveDown);
	useMouseTrap('left', moveLeft);
	useMouseTrap('right', moveRight);
	useMouseTrap('1', () => fill(1));
	useMouseTrap('2', () => fill(2));
	useMouseTrap('3', () => fill(3));
	useMouseTrap('4', () => fill(4));
	useMouseTrap('5', () => fill(5));
	useMouseTrap('6', () => fill(6));
	useMouseTrap('7', () => fill(7));
	useMouseTrap('8', () => fill(8));
	useMouseTrap('9', () => fill(9));

	function moveUp() {
		if (state.selectedBlock && state.selectedBlock[1] > 0) {
			dispatch(selectBlock([ state.selectedBlock[0], (state.selectedBlock[1] - 1) as INDEX ]));
		}
	}

	function moveDown() {
		if (state.selectedBlock && state.selectedBlock[1] < 8) {
			dispatch(selectBlock([ state.selectedBlock[0], (state.selectedBlock[1] + 1) as INDEX ]));
		}
	}

	function moveLeft() {
		if (state.selectedBlock && state.selectedBlock[0] > 0) {
			dispatch(selectBlock([ (state.selectedBlock[0] - 1) as INDEX, state.selectedBlock[1] ]));
		}
	}

	function moveRight() {
		if (state.selectedBlock && state.selectedBlock[0] < 8) {
			dispatch(selectBlock([ (state.selectedBlock[0] + 1) as INDEX, state.selectedBlock[1] ]));
		}
	}

	return (
		<Container data-cy="grid-container">
			{Children.toArray(
				[ ...Array(9) ].map((_, rowIndex) => (
					<Row data-cy="grid-row-container">
						{Children.toArray(
							[ ...Array(9) ].map((_, colIndex) => (
								<Block colIndex={colIndex as INDEX} rowIndex={rowIndex as INDEX} />
							))
						)}
					</Row>
				))
			)}
		</Container>
	);
};

export default Grid;
