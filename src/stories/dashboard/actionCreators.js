import {
    INITIALIZE,
    GET_STATS_REQUESTED,
    GET_STATS_SUCCEEDED,
    GET_STATS_FAILED,
    SET_QUERY,
    GET_HISTORY_STATS_SUCCEEDED,
    GET_HISTORY_STATS_FAILED
} from './constants';

export const initialize = () => ({
    type: INITIALIZE
});

export const getStatsRequested = (payload) => ({
    type: GET_STATS_REQUESTED,
    payload
});

export const getStatsSucceeded = (payload) => ({
    type: GET_STATS_SUCCEEDED,
    payload
});

export const getStatsFailed = () => ({
    type: GET_STATS_FAILED
});

export const setQuery = payload => ({
    type: SET_QUERY,
    payload
});

export const getHistoryLanguagesSucceeded = payload => ({
    type: GET_HISTORY_STATS_SUCCEEDED,
    payload
});

export const getHistoryLanguagesFailed = payload => ({
    type: GET_HISTORY_STATS_FAILED,
    payload
});
