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
