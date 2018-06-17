import shortId from 'shortid';
import { call } from 'redux-saga/effects';

const operations = new Map();

const run = async (apiRequest, ...args) => {
    while (operations.size) {
        for (const [key, value] of operations) {
            try {
                await value;
            } catch (error) {
                await error;
            }
            operations.delete(key);
        }
    }

    const id = shortId();
    const promise = apiRequest(...args);

    operations.set(id, promise);

    return promise;
};

export default function * (...args) {
    return yield call(run, ...args);
}
