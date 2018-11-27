const url = 'http://127.0.0.1:8000/pupille/v1/';

export const change = (url, token, method, body) => fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: body ? JSON.stringify(body) : {}
  })
    .then(response => method !== 'DELETE' ? response.json() : response);
  
  
  
export const get = (url, token) => 
    fetch(url, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
        }
    })
        .then( response => response.json() )
        .catch( error => error );


export const post = (url, token, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
        },
        body: JSON.stringify({
        ...data
        })
    })
        .then( response => response.json() )
        .catch( error => error );
}

export const postUser = (url, data) => {
    console.log(data, 'entrando22');

    return fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        ...data
        })
    })
        .then( response => response.json() )
        .catch( error => error );
}

//Get themes
/*
function* getThemesFromAPI() {
    const response = yield fetch(url, {
        method = 'GET', 
        headers: {
            Accept: 'application/json',
            'Content-Type':  'application/json', 
        },
        body: '', 
    });
    const themes = yield response.status === 200 ? JSON.parse(response.__bodyInit): []
    return themes;
}*/

export const Api = {
    url
};

