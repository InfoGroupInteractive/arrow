import { SET_THEME } from './theme.constants';
import ProxyEnhancer from '../proxy-enhancer';

export default ProxyEnhancer((state='light', action)=>{   
    switch(action.type){
        case SET_THEME:
            return action.theme;     
        default:
            return state;
    }
}, [SET_THEME]);