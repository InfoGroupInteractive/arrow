import { createStore, combineReducers } from 'redux';
import { default as toastReducers } from './toast/toast.reducers';
import { default as themeReducers } from './theme/theme.reducers';

window.embeddedArrow = window.self.location !== window.top.location;
const store = createStore(combineReducers({ toasts: toastReducers, theme: themeReducers}));

window.addEventListener('message', (e)=>{
    //verify origin and check for type property (required for action)
    if(e.origin !== 'http://localhost:3000' || !e.data.type){
        return;
    }

    //assign key so we know not to process this action instead of proxy
    let action = Object.assign({
        __processAction__: true
    }, e.data);

    //dispatch that jazz
    store.dispatch(action);
});

if(window.embeddedArrow){
    window.top.postMessage({
        type: '__initialize__'
    },'http://localhost:3000');
}

export default store;