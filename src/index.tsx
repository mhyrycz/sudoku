import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { configureStore, unregister } from 'core';
import { GlobalStyles, theme } from 'styles';
import { Card, Content, Title, Grid } from 'components';

const store = configureStore();

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		{/* use can use data-cy to cypress e2e tests */}
		<Provider store={store}>
			<Content data-cy="content">
				<Title data-cy="title">Sudoku</Title>
				<Card data-cy="card">
					<Grid />
				</Card>
			</Content>
		</Provider>
	</ThemeProvider>,
	document.getElementById('root')
);

unregister();
