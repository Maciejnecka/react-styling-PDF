/* eslint-disable react/function-component-definition */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Div from './Div';

const Box = () => {
    const divStyle = {
        padding: '100px',
    };
    return (
        <>
            <Div type="dark" />
            <Div style={divStyle} />
        </>
    );
};

export default Box;
