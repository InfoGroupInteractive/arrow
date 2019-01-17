import * as toastConstants from './toast/toast.constants';
import { SET_THEME } from './theme/theme.constants';

const PROXYABLE_TYPES = [
    toastConstants.ADD_TOAST,
    toastConstants.REMOVE_TOAST,
    SET_THEME
]

export default (store) => (next) => (action) => {
     //if we are embedded, proxy action to parent
     if(window.embeddedArrow && !action.__processAction__ && PROXYABLE_TYPES.indexOf(action.type) !== -1){
        console.log('postMessage');
        window.top.postMessage(action,'http://localhost:3000');
    } else {
        return next(action);        
    }    
};