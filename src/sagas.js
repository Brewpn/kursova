import { all } from 'redux-saga/effects';
import dashboard from './stories/dashboard/saga';

function * mySaga() {
    return yield all([
        ...dashboard
    ])
}

export default mySaga;