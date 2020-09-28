import React, { FC } from 'react';

import { AnyAction, Dispatch } from 'redux';

import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';

import { IReducer, selectBlock } from 'reducers';

import { N, INDEX } from 'typings';

interface IProps {
	colIndex: INDEX;
	rowIndex: INDEX;
}

interface IState {
	value: N;
	isActive: boolean;
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
	const state = useSelector<IReducer, IState>(({ grid, selectedBlock }) => ({
		value: grid ? grid[colIndex][rowIndex] : 0,
		isActive: selectedBlock ? selectedBlock[0] === colIndex && selectedBlock[1] === rowIndex : false
	}));
	const dispatch = useDispatch<Dispatch<AnyAction>>();
	const select = () => dispatch(selectBlock([ colIndex, rowIndex ]));

	return (
		<Container active={state.isActive} data-cy={`block-${rowIndex}-${colIndex}`} onClick={select}>
			{state.value === 0 ? '' : state.value}
		</Container>
	);
};

export default Block;
