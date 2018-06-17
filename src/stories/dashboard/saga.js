import { takeLatest, select, call, put, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {reset} from 'redux-form';
import queueCall from '../../utils/queueCall';
import httpInterceptor, {errorHandle} from './../../utils/httpInterceptor';

import { getQueries, getSelectedLanguage } from './reducers';
import { successNotification, errorNotification  } from './../../modules/notifications/actionCreators';

import {
    API_LIST_LANGUAGES
} from './../../constants/apiRoutes';

import {
    INITIALIZE,
    GET_STATS_REQUESTED,
    LANGUAGES,
    YEARS
} from './constants';

import {
    getStatsSucceeded,
    getStatsFailed,
    getHistoryLanguagesSucceeded,
    getHistoryLanguagesFailed
} from './actionCreators'

import Headers from '../../constants/accessHeaders';

const headers = Headers();

const getLanguagesStats = query => (
    httpInterceptor.get(`${API_LIST_LANGUAGES}${query}`, headers)
        .then(response => {
            const data = response.data;

            return [
                query,
                data.total_count
            ]
        })
        .catch(errorHandle)
);

const getHistoryLanguagesStats = (query, year, yearTo) => (
    httpInterceptor.get(`${API_LIST_LANGUAGES}${query}%20created:${year.value}..${yearTo}`, headers)
        .then(response => {
            const data = response.data;

            return [
                year.title,
                data.total_count
            ]
        })
        .catch(errorHandle)
);

export default [
    takeLatest(INITIALIZE, function * () {
        try {
            const data = yield all([
                call(getLanguagesStats, LANGUAGES[0].value),
                call(getLanguagesStats, LANGUAGES[1].value),
                call(getLanguagesStats, LANGUAGES[2].value),
                call(getLanguagesStats, LANGUAGES[3].value),
                call(getLanguagesStats, LANGUAGES[4].value),
            ]);

            yield put(getStatsSucceeded(data));

            const historyData = yield all([
                call(getHistoryLanguagesStats, LANGUAGES[0].value, YEARS[1], YEARS[2].value),
                call(getHistoryLanguagesStats, LANGUAGES[0].value, YEARS[2], YEARS[3].value),
                call(getHistoryLanguagesStats, LANGUAGES[0].value, YEARS[3], YEARS[4].value),
                call(getHistoryLanguagesStats, LANGUAGES[0].value, YEARS[4], YEARS[5].value),
                call(getHistoryLanguagesStats, LANGUAGES[0].value, YEARS[5], YEARS[6].value),
            ]);

            yield put(getHistoryLanguagesSucceeded(historyData))
        } catch (ex) {
            yield put(getStatsFailed());
            yield put(getHistoryLanguagesFailed());
            yield  put(errorNotification(ex.message));
        }
    }),
    takeLatest(GET_STATS_REQUESTED, function * () {
        try {
            const selectedLanguage = yield select(getSelectedLanguage);

            const historyData = yield all([
                call(getHistoryLanguagesStats, selectedLanguage, YEARS[1], YEARS[2].value),
                call(getHistoryLanguagesStats, selectedLanguage, YEARS[2], YEARS[3].value),
                call(getHistoryLanguagesStats, selectedLanguage, YEARS[3], YEARS[4].value),
                call(getHistoryLanguagesStats, selectedLanguage, YEARS[4], YEARS[5].value),
                call(getHistoryLanguagesStats, selectedLanguage, YEARS[5], YEARS[6].value),
            ]);

            yield put(getHistoryLanguagesSucceeded(historyData));
            yield  put(successNotification('Stats were successfully loaded'));
        } catch (ex) {
            yield put(getStatsFailed());
            yield put(getHistoryLanguagesFailed());
            yield  put(errorNotification(ex.message));
        }
    }),
]