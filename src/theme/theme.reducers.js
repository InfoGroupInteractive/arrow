import { SET_THEME } from './theme.constants';
import { LIGHT } from './theme.constants';

export default (state=LIGHT, action)=>{   
    switch(action.type){
        case SET_THEME:
            return action.theme || LIGHT;     
        default:
            return state;
    }
};