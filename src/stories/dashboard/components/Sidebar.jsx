import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sidebarProcurementItems, sidebarOtherItems} from './../../../constants/sidebar';
import {submitLogoutRequested} from '../../auth/actionCreators';
import autobind from 'autobind-decorator';

import SidebarItem from './SidebarItem';

@connect(
    state => ({
        user: state.authorization.profile
    }),
    {submitLogoutRequested}
)
export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentWillMount() {
        this.setState({
            items: sidebarProcurementItems,
        });
    }

    @autobind
    handleClick () {
        this.props.submitLogoutRequested();
    }

    render() {
        const {items} = this.state;
        const {user} = this.props;
        const itemList = items.map((item) => (
            <SidebarItem
                key={item.title}
                {...item}
            />
        ));
        const style = {
            width: '70px',
            height: '70px',
            marginLeft: '10px',
            marginRight: '20px'
        };
        const li = {
            padding: '20px'
        };
        const span = {
            marginTop: '10px'
        };

        return (
            <div className="col-3 col-lg-2 sidebar">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item row" style={li}>
                        <img style={style} className="col-xs-4" src={user.avatar_url} alt=""/>
                        <span style={span} className="col-xs-8">{user.login}</span>
                    </li>
                    { itemList }
                    <li className="nav-item row" style={li}>
                        <span className="nav-link" onClick={this.handleClick}>Logout</span>
                    </li>
                </ul>
            </div>
        );
    }
}

const propTypes = {
    role: PropTypes.string,
    user: PropTypes.object
};
const defaultProps = {};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
