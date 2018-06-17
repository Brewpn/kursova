import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import autobind from 'autobind-decorator';
import { LANGUAGES } from '../constants';

import {
    getStatsRequested
} from '../actionCreators';

import Select from '../../../components/ui/input/Select';
import Loading from '../../../components/ui/Loading';
import MainChart from './MainChart';
import HistoryChart from './HistoryChart';


const style = {
    textAlign: 'center'
};

@connect(
    state => ({
        pending      : state.dashboard.pending,
        initialValues: LANGUAGES[0]
    })
)
@reduxForm({
    form: 'chooseLanguage'
})
export default class Dashboard extends Component {

    @autobind
    handleChange() {
        const { dispatch } = this.props;
        dispatch(getStatsRequested());
    }

    render () {
        const { pending } = this.props;

        return (
            <div>
                { !pending ?
                    (
                        <div>
                            <div className="row">
                                <HistoryChart/>
                                <form className="col-md-6" onChange={this.handleChange} style={style}>
                                    <Field name="value"
                                           label="Language"
                                           placeholder={'Select language'}
                                           options={LANGUAGES}
                                           autoComplete="off"
                                           component={Select}
                                    />
                                </form>
                            </div>
                        </div>
                    ) :
                    <Loading/>
                }
            </div>
        )
    }
}

const propTypes = {
    pending : PropTypes.bool,
    dispatch: PropTypes.func
};

Dashboard.propTypes = propTypes;
