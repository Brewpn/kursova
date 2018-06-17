export const getHistoryStatsRequested = (state, payload) => ({
    ...state,
    list: {
        ...state.list,
        pending: true,
        historyChartData: [],
        query: {
            ...state.list.query,
            ...payload
        }
    }
});

export const getHistoryStatsSucceeded = (state, payload) => ({
    ...state,
    list: {
        ...state.list,
        pending: false,
        historyChartData: [
            ...payload
        ]
    }
});

export const getHistoryStatsFailed = (state) => ({
    ...state,
    list: {
        ...state.list,
        pending: false,
        historyChartData: []
    }
});