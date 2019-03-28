export const doFetch = (url, method='GET', body, headers={
    'Content-Type': 'application/json'
}, signal) => {
    let abortController;
    if(typeof signal === 'undefined'){
        abortController = new AbortController();        
        signal = abortController.signal;
    }
    const plomise = new Promise((resolve, reject)=>{
        fetch(url, {
            method,
            body: JSON.stringify(body),
            headers,
            signal
        })
            .then((res) => {
                if (res.status === 204){
                    resolve();
                } else {
                    res.json()
                        .then((json)=>{
                            if(res.ok){ // 200 level response
                                resolve(json);
                            } else {
                                reject(json); //fail with error response from server
                            }
                        })
                        .catch((e)=>reject(e)); //error processing json response
                }
            })
            .catch((e)=>{
                if(e.name !== 'AbortError'){
                    reject(e);                    
                }                
            }); //fetch error
    })

    if(typeof abortController !== 'undefined'){
        plomise.abort = abortController.abort.bind(abortController);  //b/c clean code is mean code
    }
    
    return plomise;
};
