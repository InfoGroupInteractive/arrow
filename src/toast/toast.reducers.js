import * as toastConstants from './toast.constants';
import uuidv4 from 'uuid/v4';

export default ((state=[], action)=>{
    var newState;
    switch(action.type){
        case toastConstants.ADD_TOAST:           
            newState = state.slice();
            newState.push({
                id: uuidv4(),
                text: action.text,
                background: action.background
            });
            return newState;
        case toastConstants.REMOVE_TOAST:           
            newState = state.slice();
            var toastIndex = newState.findIndex(n=>n.id===action.id);
            if(toastIndex !== -1){
                newState.splice(toastIndex, 1);
            }            
            return newState;            
        default:
            return state;
    }
});