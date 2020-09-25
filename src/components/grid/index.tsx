import React, { FC, Children } from 'react';

import Block from './block';
import { Container, Row } from './styles';
import { fillGrid } from 'utils';
import { GRID } from 'typings';

const Grid: FC = () => {
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

	return (
		<Container data-cy="grid-container">
			{console.log(grid)}
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
