import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import sagaMiddleware, { runSaga } from '../middlewares/saga';
import loggerMiddleware from '../middlewares/logger';

export const history = createHistory();

function configureStoreProd(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        thunk,
        reactRouterMiddleware,
        sagaMiddleware,
    ];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares),
        ),
    );

    runSaga();
    return store;
}

function configureStoreDev(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        // Add other middleware on this line...
        loggerMiddleware,
        // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
        reduxImmutableStateInvariant(),

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
        thunk,
        reactRouterMiddleware,
        sagaMiddleware,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares),
        ),
    );

    if(module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    runSaga();

    window.devToolsExtension ? window.devToolsExtension() : devTools => devTools;

    return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
