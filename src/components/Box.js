/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Row from './styled/Row';

import Logo from '../images/logo.png';

const Box = () => {
    // eslint-disable-next-line
    console.log('source-maps');
    return (
        <>
            <h1>
                <img src={Logo} alt="" />
                devmentor.pl
            </h1>
            <p>
                Uczę się <em>efektywnie</em> pod okiem Mentora!
            </p>
            <Row type="dark" />
            <Row space="medium" />
        </>
    );
};

export default Box;
