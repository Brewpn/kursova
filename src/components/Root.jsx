import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider, connect } from 'react-redux';
import { initialize } from '../stories/dashboard/actionCreators';
import App from './App';

@connect(
    () => ({}),
    { initialize }
)
export default class Root extends Component {
    componentDidMount() {
       this.props.initialize();
    }

    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        );
    }
}

Root.propTypes = {
    store       : PropTypes.object.isRequired,
    history     : PropTypes.object.isRequired,
    initialize  : PropTypes.func
};
