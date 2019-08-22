import * as constants from './toast.constants';
import store from '../store';
import uuidv4 from 'uuid/v4';

export const createToast = (text, status) =>{
    store.dispatch(createToastAction(text, status));
}

export const removeToast = (id) =>{
    store.dispatch(removeToastAction(id));
}

export const removeToastAction = (id) => ({
    type: constants.REMOVE_TOAST,
    id
});

export const createToastAction = (text, status) => ({
    type: constants.ADD_TOAST,
    id: uuidv4(),
    text,
    status
});
