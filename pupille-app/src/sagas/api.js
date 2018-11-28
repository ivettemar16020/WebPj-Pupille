export const API_URL = 'http://localhost:8000/pupille/v1';

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
    return fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
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

export const fetchThemes = (url, data) => {
    return fetch(url, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        },
        body: '',
        })
    })
    .then( response => response.json() )
    .catch( error => error );
}
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

