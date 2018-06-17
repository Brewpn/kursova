import {
    error,
    warning,
    info,
    success,
} from 'react-notification-system-redux';

const defaultOptions = {
    position: 'tc',
    autoDismiss: 4,
};

export const successNotification = (message = 'N/A') => (dispatch) => {
    return dispatch(success({
        ...defaultOptions,
        title: 'Success',
        message,
    }));
};

export const warningNotification = (message = 'N/A') => (dispatch) => {
    return dispatch(warning({
        ...defaultOptions,
        title: 'Warning',
        message,
    }));
};

export const errorNotification = (message = 'N/A') => (dispatch) => {
    return dispatch(error({
        ...defaultOptions,
        title: 'Error',
        message,
    }));
};

export const infoNotification = (message = 'N/A') => (dispatch) => {
    return dispatch(info({
        ...defaultOptions,
        title: 'Information',
        message,
    }));
};
