import * as constants from './toast.constants';
import store from '../store';
import uuidv4 from 'uuid/v4';

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
    id: uuidv4(),
    text,
    background
});

export const addEphemeralToast = (text, background, delay = 3000) => {
    const action = createToastAction(text, background);

    store.dispatch(action);

    setTimeout(() => {
        removeToast(action.id)
    }, delay)
};