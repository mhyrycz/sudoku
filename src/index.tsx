import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './core';
import { GlobalStyles } from './styles'

ReactDOM.render(
    <>
        <GlobalStyles />
        <div>Hello World!</div>
    </>, document.getElementById('root'));

unregister();
