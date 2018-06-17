import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import NonAuthRoute from './NonAuthRoute';
import {
    ROUTE_TO_HOME_PAGE,
} from '../constants/routes';

import Dashboard from '../stories/dashboard/containers/Base';

export default class route extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Switch>
                {/* Authorization routes */}
                <NonAuthRoute path={ROUTE_TO_HOME_PAGE} component={Dashboard} />
            </Switch>
        );
    }
}

const propTypes = {};
const defaultProps = {};

route.propTypes = propTypes;
route.defaultProps = defaultProps;
