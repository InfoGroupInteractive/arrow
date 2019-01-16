import * as toastConstants from './toast.constants';

export default ((state=[], action)=>{
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