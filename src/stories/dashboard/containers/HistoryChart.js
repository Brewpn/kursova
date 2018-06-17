import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import { Chart } from 'react-google-charts';

import Loading from '../../../components/ui/Loading';

import {
    initialize
} from '../actionCreators';

@connect(
    state => ({
        pending: state.dashboard.list.pending,
        stats  : state.dashboard.list.historyChartData
    })
)
export default class Dashboard extends Component {

    render () {
        const {stats, pending} = this.props;

        return (
            <div className="col-md-6">
                {!pending ?
                    <Chart
                        chartType="LineChart"
                        data={[['Year', 'Total Repositories'], ...stats]}
                        options={{}}
                        graph_id="HistoryChart"
                        width="100%"
                        height="400px"
                        legend_toggle
                    /> : <Loading/>
                }
            </div>
        )
    }
}

const propTypes = {
    pending : PropTypes.bool,
    dispatch: PropTypes.func,
    stats   : PropTypes.array
};

Dashboard.propTypes = propTypes;
