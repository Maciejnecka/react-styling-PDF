/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Row from './Row';

const Box = () => {
    return (
        <>
            <Row type="dark" />
            <Row space="medium" />
        </>
    );
};

export default Box;
