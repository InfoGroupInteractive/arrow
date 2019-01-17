import { SET_THEME } from './theme.constants';
import store from '../store';

export const setTheme = (theme) =>{
    store.dispatch({
        type: SET_THEME,
        theme
    });
}