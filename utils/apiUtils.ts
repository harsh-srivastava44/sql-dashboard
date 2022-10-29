const request = (url: string, params = {}, method = 'GET') => {
    let options: any = {
        method
    }
    if ('GET' === method) {
        url += '?' + (new URLSearchParams(params)).toString();
    } else {
        options['body'] = JSON.stringify(params);
    }

    return fetch(url, options).then(response => response.json());
};
const get = (url: string, params: object) => request(url, params, 'GET');
const post = (url: string, params: object) => request(url, params, 'POST');

export { get, post }