import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';
import { default as dashboard } from '../stories/dashboard/reducers';

const rootReducer = combineReducers({
    form: formReducer,
    notifications,
    dashboard
});

export default rootReducer;