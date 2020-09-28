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
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
	const state = useSelector<IReducer, IState>(({ grid }) => ({ value: grid ? grid[colIndex][rowIndex] : 0 }));
	const dispatch = useDispatch<Dispatch<AnyAction>>();
	const select = () => dispatch(selectBlock([ colIndex, rowIndex ]));

	return (
		<Container data-cy={`block-${rowIndex}-${colIndex}`} onClick={select}>
			{state.value === 0 ? '' : state.value}
		</Container>
	);
};

export default Block;
