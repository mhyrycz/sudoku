import React, { FC, Children } from 'react';

const Grid: FC = () => {
	return (
		<div data-cy="grid-container">
			{/* You don't have to use index as key prop */}
			{Children.toArray(
				[ ...Array(9) ].map((_) =>
					Children.toArray([ ...Array(9) ].map((_, colIndex) => <div>{colIndex}</div>))
				)
			)}
		</div>
	);
};

export default Grid;
