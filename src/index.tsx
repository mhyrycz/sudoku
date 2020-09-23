import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { unregister } from './core';
import { GlobalStyles, theme } from './styles';
import { Card, Content, Title } from './components';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		{/* use can use data-cy to cypress e2e tests */}
		<Content data-cy="content">
			<Title data-cy="title">Sudoku</Title>
			<Card data-cy="card">Work in progress</Card>
		</Content>
	</ThemeProvider>,
	document.getElementById('root')
);

unregister();
