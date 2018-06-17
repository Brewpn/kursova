import defaultState from './defaultState';
import  {
    INITIALIZE,
    GET_STATS_REQUESTED,
    GET_STATS_SUCCEEDED,
    GET_STATS_FAILED,
    SET_QUERY,
    GET_HISTORY_STATS_SUCCEEDED,
    GET_HISTORY_STATS_FAILED
} from '../constants';
import { setQuery, getStatsSucceeded, getStatsFailed, getStatsRequested, initialize } from './getStats';
import { getHistoryStatsSucceeded, getHistoryStatsFailed } from './getHistoryStats';

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch(type) {
        case INITIALIZE:
            return initialize(state);

        case GET_STATS_REQUESTED:
            return getStatsRequested(state, payload);

        case GET_STATS_SUCCEEDED:
            return getStatsSucceeded(state, payload);

        case GET_STATS_FAILED:
            return getStatsFailed(state);

        case SET_QUERY:
            return setQuery(state, payload);

        case GET_HISTORY_STATS_SUCCEEDED:
            return getHistoryStatsSucceeded(state, payload);

        case GET_HISTORY_STATS_FAILED:
            return getHistoryStatsFailed(state);

        default:
            return state;
    }
}

export const getQueries = state => state.dashboard.list.query;
export const getSelectedLanguage = state => state.form.chooseLanguage.values.value;
