import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
    render () {
        const {
            input: {
                name,
            },
            meta: {
                touched,
                error,
            },
            className,
            input,
            type,
            placeholder,
            value
        } = this.props;
        const style ={
            border: "1px solid red"
        };

        return (
            <div>
                <input
                    {...input}
                    style={touched && error ? style : {}}
                    type={type}
                    placeholder={placeholder}
                />
            </div>
        );
    }
}

const propTypes = {
    input       : PropTypes.object,
    meta        : PropTypes.object,
    className   : PropTypes.string,
    type        : PropTypes.string,
    placeholder : PropTypes.string,
    value       : PropTypes.string,
};
const defaultProps = {};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
