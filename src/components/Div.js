/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
// import React from 'react';

// export default class Div extends React.Component {
//     render() {
//         const { style = {}, type } = this.props;
//         const bgColor = type === 'dark' ? '#c5aeb4' : '#fce2c2';

//         const defaultStyle = {
//             '--color-alfa': '#6cb2d1',
//             backgroundColor: bgColor,
//             border: '2px solid var(--color-alfa)',
//             color: 'var(--color-alfa)',
//             padding: '20px',
//         };
//         return <div style={{ ...defaultStyle, ...style }}>React: Styling</div>;
//     }
// }

import React from 'react';
import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
    --color-alfa: #6cb2d1;
    color: var(--color-alfa);
    background-color: #fce2c2;
    ${(props) =>
        props.type === 'dark' &&
        css`
            background-color: #c5aeb4;
            color: #fce2c2;
        `};

    border: 2px solid var(--color-alfa);
    padding: 20px;
    &:hover {
        background-color: #fcc5c2;
    }
    h1 {
        font-size: 20px;
    }
    p {
        font-size: 12px;
    }
`;
const Div = ({ style = {}, type }) => {
    return (
        <StyledDiv type={type}>
            <h1>React: Styled Components</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </StyledDiv>
    );
};
export default Div;
