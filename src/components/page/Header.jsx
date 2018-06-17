import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';
import autobind from 'autobind-decorator';
import {
    submitLogoutRequested,
} from '../../stories/auth/actionCreators';
import { ROUTE_TO_CHANGE_PASSWORD } from '../../constants/routes';

@connect(
    state => ({
        profile: state.authorization.profile,
    }),
    {
        submitLogoutRequested,
    }
)
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { profile, dropdown, toggleDropdown } = this.props;
        const submitLogoutRequested = this.props.submitLogoutRequested;

        return (
            <div className="main-header fixed-top">
                <nav className="navbar justify-content-between">
                    <div className={classNames('user-dropdown', { active: dropdown })}>
                        <p className="user-name">{profile.fullName}</p>
                        <span className="user-role">{profile.accessRole}</span>
                        <i
                            className="icon-arrow-down"
                            onClick={toggleDropdown}
                        />
                        <ul className="user-dropdown-list">
                            <li className="user-dropdown-list-item"><Link to={ROUTE_TO_CHANGE_PASSWORD}>Change Password</Link></li>
                            <li className="user-dropdown-list-item" onClick={submitLogoutRequested}>Logout</li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

const propTypes = {
    toggleDropdown: PropTypes.func,
};
const defaultProps = {};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
