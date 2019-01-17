import * as constants from './toast.constants';
import store from '../store';

export const createToast = (text, background) =>{
    store.dispatch(createToastAction(text, background));
}

export const removeToast = (id) =>{
    store.dispatch(removeToastAction(id));
}

export const removeToastAction = (id) => ({
    type: constants.REMOVE_TOAST,
    id
});

export const createToastAction = (text, background) => ({
    type: constants.ADD_TOAST,
    text,
    background
})