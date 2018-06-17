export const setQuery = (state, payload) => ({
    ...state,
    list: {
        ...state.list,
        query: {
            ...state,
            ...payload
        }
    }
});

export const getStatsRequested = (state, payload) => ({
    ...state,
    list: {
        ...state.list,
        pending: true,
        query: {
            ...state.list.query,
            ...payload
        }
    }
});

export const getStatsSucceeded = (state, payload) => ({
    ...state,
    pending: false,
    list: {
        ...state.list,
        languages: [
            ...payload
        ]
    }
});

export const getStatsFailed = (state) => ({
    ...state,
    pending: false,
    list: {
        ...state.list,
        languages: []
    }
});

export const initialize = (state) => ({
    ...state,
    pending: true
});
