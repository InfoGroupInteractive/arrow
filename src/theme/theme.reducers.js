import { SET_THEME } from './theme.constants';

export default ((state='light', action)=>{   
    switch(action.type){
        case SET_THEME:
            return action.theme;     
        default:
            return state;
    }
});