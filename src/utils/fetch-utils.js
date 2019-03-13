export const doFetch = (url, method='GET', body, headers={
    'Content-Type': 'application/json'
}) => {
    const plomise = new Promise((resolve, reject)=>{
        fetch(url, {
            method,
            body: JSON.stringify(body),
            headers
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
            .catch((e)=>reject(e)); //fetch error
    })
    
    return plomise;
};


export const doGet = (url, body) => doFetch(url, 'POST', body)
    .then((response) => {
        if (typeof response === 'undefined'){
            // TODO: make this error more better
            throw Error('Not Found');
        }
        return response[0];
    });
