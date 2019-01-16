export default (reducer, proxyableTypes) => {
    const proxiedReducer = (state, action) => {
        //if we are embedded, proxy
        if(window.embeddedArrow && !action.__processAction__ && proxyableTypes.indexOf(action.type) !== -1){
            console.log('postMessage');
            window.top.postMessage(action,'http://localhost:3000');
            return state;
        }
        return reducer(state, action);
    }
    return proxiedReducer;
    //const curriedReducer = (state, action) => prod
}
