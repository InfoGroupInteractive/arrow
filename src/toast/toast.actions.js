import * as constants from './toast.constants';
import store from '../store';

export const createToast = (text, background) =>{
    store.dispatch({
        type: constants.ADD_TOAST,
        text,
        background
    });
}

export const removeToast = (id) =>{
    store.dispatch({
        type: constants.REMOVE_TOAST,
        id
    });
}