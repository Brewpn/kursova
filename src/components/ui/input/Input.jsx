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
        } = this.props;
        return (
            <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
                <input
                    {...input}
                    type={type}
                    className="form-control bordered"
                    placeholder={placeholder}
                />
               {touched && error ? (<span className="error">{error}</span>) : ''}
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
