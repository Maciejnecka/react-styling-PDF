/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider } from 'styled-components';

import Row from './styled/Row';

const Box = () => {
    const rowStyle = {
        padding: '100px',
    };

    return (
        <>
            <Row type="dark" />
            <ThemeProvider theme={{ colorAlfa: 'blue' }}>
                <Row style={rowStyle} />
            </ThemeProvider>
        </>
    );
};

export default Box;
