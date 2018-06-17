import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import { Switch, Route } from 'react-router-dom';

import Dashboard from  './Dashboard';

export default class Base extends Component {

    render() {

        return (
            <div>
                <Switch>
                    <Route path="/" component={Dashboard}/>
                </Switch>
            </div>
        );
    }
}

const propTypes = {};
const defaultProps = {};

Base.propTypes = propTypes;
Base.defaultProps = defaultProps;
