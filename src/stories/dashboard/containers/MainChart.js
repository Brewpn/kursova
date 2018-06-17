import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import { Chart } from 'react-google-charts';

import {
    initialize
} from '../actionCreators';

@connect(
    state => ({
        stats: state.dashboard.list.languages
    })
)
export default class Dashboard extends Component {

    render () {
        const {stats} = this.props;

        return (
            <div className="col-md-6">
                <Chart
                    chartType="PieChart"
                    data={[['Age', 'Weight'], ...stats]}
                    options={{}}
                    graph_id="PieChart"
                    width="100%"
                    height="400px"
                    legend_toggle
                />
            </div>
        )
    }
}

const propTypes = {
    dispatch: PropTypes.func,
    stats   : PropTypes.array
};

Dashboard.propTypes = propTypes;
