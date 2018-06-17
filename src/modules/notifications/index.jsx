import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

@connect(
    (state) => ({
        notifications: state.notifications,
    }),
)
export default class container extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { notifications } = this.props;

        const style = {
            NotificationItem: {
                DefaultStyle: {},
                success: {},
            },
        };

        return (
            <Notifications
                notifications={notifications}
                style={style}
            />
        );
    }

}

const propTypes = {
    notifications: PropTypes.array,
};
const defaultProps = {};

container.propTypes = propTypes;
container.defaultProps = defaultProps;
