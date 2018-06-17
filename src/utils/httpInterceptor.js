import axios from 'axios';
import qs from 'qs';
import { API_REFRESH_TOKEN } from './../constants/apiRoutes';
import state from './../store/configureStore';

export const errorHandle = (error) => (Promise.reject(error.response.data));

const axiosInstance = axios.create({
    baseUrl: '/',
    timeout: 30000,
    paramsSerializer(params) {
        return qs.stringify(params);
    },
});

const _axiosInstance = axios.create({
    baseUrl: '/',
    timeout: 30000,
});

axiosInstance.interceptors.response.use(config => {
    state.retryCount = 0;
    return config;
}, error => {
    const config = error.config;

    // If we have no information to retry the request
    if (!config || error.response.status !== 401) {
        return Promise.reject(error);
    }

    return _axiosInstance.post(API_REFRESH_TOKEN, {})
        .then(() => (axiosInstance(config)))
        .catch(() => (Promise.reject(error)));
});

export default axiosInstance;
