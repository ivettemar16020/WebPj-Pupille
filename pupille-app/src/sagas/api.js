const url = 'http://127.0.0.1:8000/pupille/v1/';

//Post user 
function* postUser (url, email, password) {
    const user = JSON.stringify({
        email: email,
        password: password,
    })
    console.log(user)
    const response = yield fetch(url, {
        method: 'POST',
        body: user,
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then( response => response.json() )
      .catch( e => console.log(e))
}


//Get themes
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
}

export const Api = {
    url,
    getThemesFromAPI, 
    postUser
};

