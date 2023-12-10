/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
import classNames from 'classnames';

const Row = (props) => {
    const { type, space } = props;

    const className = classNames('Row', {
        [`Row--${type}`]: type,
        [`Row--space-${space}`]: space,
    });
    return <div className={className}>React: Styling, classnames</div>;
};

export default Row;
