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
                res.json()
                    .then((json)=>{
                        if(res.ok){ //200 level error
                            resolve(json);
                        } else {
                            reject(json); //fail with error response from server
                        }
                    })
                    .catch((e)=>reject(e)); //error processing json response      
            })
            .catch((e)=>reject(e)); //fetch error   
    })
    
    return plomise;
};