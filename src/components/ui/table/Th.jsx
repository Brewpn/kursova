import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Th extends Component {
    render () {
        const {id, orderBy, order, thName, onThClick} = this.props;

        return (
            <th
                className="no-wrap"
                onClick={onThClick}
                style={id === orderBy ? {backgroundColor: "black"} : {}}
                id={id}>
                <span>{thName}</span>
                {id === orderBy &&
                    <i className={"icon-arrow-down " + (order === "asc" ? "" : "icon-rotate-180")}/>
                }
            </th>
        )
    }
}

const propTypes = {
    id          : PropTypes.string,
    orderBy     : PropTypes.string,
    order       : PropTypes.string,
    thName      : PropTypes.string,
    onThClick   : PropTypes.func.isRequired,
};
const defaultProps = {};

Th.propTypes = propTypes;
Th.defaultProps = defaultProps;