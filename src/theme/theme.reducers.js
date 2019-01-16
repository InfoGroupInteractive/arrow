import { SET_THEME } from './theme.constants';
import ProxyEnhancer from '../proxy-enhancer';
import { LIGHT } from './theme.constants';

export default ProxyEnhancer((state=LIGHT, action)=>{   
    switch(action.type){
        case SET_THEME:
            return action.theme || LIGHT;     
        default:
            return state;
    }
}, [SET_THEME]);