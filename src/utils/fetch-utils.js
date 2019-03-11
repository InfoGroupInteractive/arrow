export const doFetch = (url, method='GET', body, headers={
    'Content-Type': 'application/json'    
}) => {
    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers
    })
        .then((res) => {
            if (res.ok) {
                return res;
            }
            throw Error(res.statusText);
        })
        .then((res) => res.json());
};