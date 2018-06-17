import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
    render () {
        const {
            options,
            input,
        } = this.props;
        return (
            <select {...input}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.title}</option>
                ))}
            </select>
        );
    }
}

const propTypes = {
    options : PropTypes.array,
    input   : PropTypes.object,
};
const defaultProps = {};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;