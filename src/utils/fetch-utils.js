export const doFetch = (url, options = {}) => {
    return fetch(url, options)
        .then((res) => {
            if (res.ok) {
                return res;
            }
            throw Error(res.statusText);
        })
        .then((res) => res.json());
};