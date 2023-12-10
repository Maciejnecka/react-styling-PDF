/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const StyledLoginPanel = styled.section`
    border: 1px solid #dcdcdc;
    padding: 20px;
`;
const Title = styled.h3`
    text-align: center;
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
`;
const RowWithButton = styled(Row)`
    justify-content: center;
    margin-top: 20px;
`;
const Label = styled.label.attrs((props) => ({
    htmlFor: `field-${props.fieldName}`,
}))`
    border-left: 5px solid #e2e2e2;
    padding-left: 5px;
`;
const Field = styled.input.attrs(({ name, type }) => ({
    id: name ? `field-${name}` : null,
    // eslint-disable-next-line no-unneeded-ternary
    type: type ? type : name,
}))`
    border: none;
    border-bottom: 1px solid #e2e2e2;
    &:focus {
        outline: 0;
        border-color: #57c7f3;
    }
`;

const Submit = styled.input.attrs(() => ({
    type: 'submit',
}))`
    background-color: #fff;
    border: 1px solid #e2e2e2;
    cursor: pointer;
    padding: 5px 10px;
`;

const LoginPanel = (props) => {
    return (
        <StyledLoginPanel>
            <Title>Login Form</Title>
            <form>
                <Row>
                    <Label fieldName="email">Email</Label>
                    <Field name="email" />
                </Row>
                <Row>
                    <Label fieldName="password">Password</Label>
                    <Field name="password" />
                </Row>
                <RowWithButton>
                    <Submit />
                </RowWithButton>
            </form>
        </StyledLoginPanel>
    );
};

export default LoginPanel;
