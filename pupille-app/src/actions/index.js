import * as types from '../types';

export const createUser = (
    username,  
    email,
    password,
) => ({
    type: types.REQUEST_USER_SIGNIN, 
    payload: {
        username, 
        email, 
        password,
    }
});

export const signIn = (
) => ({
    type: types.USER_CREATED, 
    payload: {}
});

export const logIn = (token, id, email) => ({
    type: types.USER_LOGGED_IN, 
    payload: {
        token,
        id, 
        email,
    }
});

export const requestLogIn = (id, email, password) => ({
    type: types.REQUEST_USER_LOGIN, 
    payload: {
        id, 
        email,
        password,
    }
});

export const receiveLogIn = (token, id, email) => ({
    type: types.RECEIVE_USER_LOGIN, 
    payload: {
        id, 
        token,
        email,
    }
});


export const logOut = (id,email,password) => ({
    type: types.USER_LOGGED_OUT, 
    payload: {
        id, 
        email,
        password
    }
});

export const createCard = (
    id, 
    question, 
    answer, 
) => ({
    type: types.CARD_CREATED, 
    payload: {
        id, 
        question, 
        answer,
    }
});

export const deleteCard = id => ({
    type: types.CARD_DELETED, 
    payload: {
        id, 
    }
});

export const createTheme = (
    id, 
    name,
    cards, 
) => ({
    type: types.THEME_CREATED, 
    payload: {
        id, 
        name,
        cards, 
    }
});

export const deleteTheme = id => ({
    type: types.CARD_CREATED, 
    payload: {
        id, 
    }
});

export const createSubject = (
    id, 
    name,
    themes, 
) => ({
    type: types.THEME_CREATED, 
    payload: {
        id, 
        name,
        themes, 
    }
});


export const deleteSubject = id => ({
    type: types.SUBJECT_DELETED, 
    payload: {
        id, 
    }
});


export const shareSubject = id => ({
    type: types.SUBJECT_SHARED, 
    payload: {
        id, 
    }
});

export const addComment = (
    id, 
    username,
    text,
) => ({
    type: types.COMMENT_ADDED, 
    payload: {
        id, 
        username,
        text,
    }
});


