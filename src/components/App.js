/* eslint-disable react/function-component-definition */
// ./src/components/App.js
import React from 'react';

import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';
// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import { ThemeProvider } from 'styled-components';
import Box from './Box';
import themeSettings from './styled/theme';

const App = () => (
    <>
        <ResetStyle />
        <GlobalStyle />
        <ThemeProvider theme={themeSettings}>
            <Box />
        </ThemeProvider>
    </>
);

export default App;
