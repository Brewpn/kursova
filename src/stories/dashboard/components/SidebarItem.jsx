import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SidebarItem extends Component {
    render () {
        const {
            title,
            icon,
            link,
            onlyActiveOnIndex,
        } = this.props;

        return (
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to={link}
                    activeClassName="active"
                    exact={onlyActiveOnIndex}
                >
                    {title}
                </NavLink>
            </li>
        );
    }
}
