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
            onSearch,
        } = this.props;
        return (
            <div className="form-group card-search icon">
                <input
                    {...input}
                    type={type}
                    className="form-control"
                    placeholder={placeholder}
                />
                <i className="icon-search" onClick={onSearch} />
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
    onSearch    : PropTypes.func,
};
const defaultProps = {};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
