import { createStore } from 'redux';
import uuidv4 from 'uuid/v4';
import * as toastConstants from './toast/toast.constants';
import { SET_THEME } from './theme/theme.constants';

const store = createStore((state={ toasts: []}, action)=>{
    //if we are embedded, proxy
    if(window.embeddedArrow && !action.__processAction__){
        console.log('postMessage');
        window.top.postMessage(action,'http://localhost:3000');
        return state;
    }
   
    var newState;
    switch(action.type){
        case SET_THEME:
            newState = Object.assign({}, state);
            newState.selectedTheme = action.theme;
            return newState;
        case toastConstants.ADD_TOAST:
            newState = Object.assign({}, state);
            newState.toasts = state.toasts.slice();
            newState.toasts.push({
                id: uuidv4(),
                text: action.text,
                background: action.background
            });
            return newState;
        case toastConstants.REMOVE_TOAST:
            newState = Object.assign({}, state);
            newState.toasts = state.toasts.slice();
            var toastIndex = newState.toasts.findIndex(n=>n.id===action.id);
            if(toastIndex !== -1){
                newState.toasts.splice(toastIndex, 1);
            }
            
            return newState;            
        default:
            return state;
    }
});


window.addEventListener('message', (e)=>{
    //verify origin
    if(e.origin !== 'http://localhost:3000'){
        return;
    }

    //assign key so we know not to process this action instead of proxy
    let action = Object.assign({
        __processAction__: true
    }, e.data);

    //dispatch that jazz
    store.dispatch(action);
});

export default store;