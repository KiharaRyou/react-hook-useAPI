function jsonToQuery(json) {
    let query = '';
    const keys = Object.keys(json);
    keys.forEach((item,i) => {
        query += `${item}=${json[item]}`;
        if(i + 1 !== keys.length) {
            query += '&';
        }
    })
    return query;
}

export default (url, options, handleError) => {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
  } else {
    if(newOptions.body) {
        url = `${url}?${jsonToQuery(newOptions.body)}`;
        delete newOptions.body;
    }
  }

  return fetch(url, newOptions)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        if (newOptions.method === 'DELETE' || response.status === 204) {
          return response.text();
        }
        return response.json();
      } else {
          if(handleError) {
            handleError(response);
          }
          return {error: true};
      }
      
    })
    .catch(err => console.log(err));
}
