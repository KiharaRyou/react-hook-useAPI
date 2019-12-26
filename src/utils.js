export function urlWithKey(url, key) {
    return url[url.length - 1] === '/' ? url + key : url + '/' + key;
}

