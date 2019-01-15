import { createStore } from 'redux';
import uuidv4 from 'uuid/v4';
import * as toastConstants from './toast/toast.constants';

export default createStore((state={ toasts: []}, action)=>{
    //if we are embedded, proxy
    if(window.embeddedArrow){
        console.log('postMessage');
        window.top.postMessage(action,'http://localhost:3000');
        return state;
    }
   
    var newState;
    switch(action.type){
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