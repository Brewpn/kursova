import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import {
    ROUTE_TO_HOME_PAGE,
} from '../constants/routes';

export default class NonAuthRoute extends React.Component {

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
            return null;
        }

        return (
            <Route
                path={path}
                component={component}
            />
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

NonAuthRoute.propTypes = propTypes;
NonAuthRoute.defaultProps = defaultProps;

