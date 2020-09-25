import React, { FC, Children } from 'react';

import Block from './block';
import { Container, Row } from './styles';
import { createFullGrid } from 'utils';

const Grid: FC = () => {

	return (
		<Container data-cy="grid-container">
			{console.log(createFullGrid())}
			{/* You don't have to use index as key prop */}
			{Children.toArray(
				[ ...Array(9) ].map((_, rowIndex) => (
					<Row data-cy="grid-row-container">
						{Children.toArray(
							[ ...Array(9) ].map((_, colIndex) => <Block colIndex={colIndex} rowIndex={rowIndex} />)
						)}
					</Row>
				))
			)}
		</Container>
	);
};

export default Grid;
