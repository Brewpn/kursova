import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import {
    ROUTE_TO_LOGIN_PAGE,
} from '../constants/routes';

@connect(
    state => ({
        accessAllowed: state.authorization.state === 'authorized',
        pending: state.authorization.state === 'pending',
    }),
)
export default class PrivateRoute extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {
            component,
            path,
            accessAllowed,
            pending,
        } = this.props;

        if (pending) {
            return (
                <div className="page-loader" />
            );
        }

        if (accessAllowed) {
            return (
                <Route
                    path={path}
                    component={component}
                />
            );
        }

        return (
            <Redirect to={ROUTE_TO_LOGIN_PAGE} />
        );
    }

}

const propTypes = {
    component: PropTypes.func,
    path: PropTypes.string,
    accessAllowed: PropTypes.bool,
    pending: PropTypes.bool,
};
const defaultProps = {};

PrivateRoute.propTypes = propTypes;
PrivateRoute.defaultProps = defaultProps;

