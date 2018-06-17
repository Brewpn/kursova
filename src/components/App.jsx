import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Routes from './routes';
import NotificationContainer from '../modules/notifications';

export default class App extends Component {
    render() {
        return (
            <div className="wrapp">
                <Routes />
                <NotificationContainer />
            </div>
        );
    }

}

App.propTypes = {};
App.defaultProps = {};
