import { combineReducers } from 'redux';

const username = (state = '', action) => {
    //action.type  'username_input'
    console.log('reducer usernama');
    switch (action.type){
        case 'USERNAME_INPUT':
            return action.username.toUpperCase();
        case 'CLEAN_FORM':
            return '';
        default:
            return state;
    }
};

const password = (state = '', action) => {
    console.log('reducer password');
    switch (action.type){
        case 'PASSWORD_INPUT':
            return action.password;
        case 'CLEAN_FORM':
            return '';
        default:
            return state;
    }
};

const isValid = (state = true, action) => {

    console.log(action.type);
    switch (action.type){
        case 'LOGIN_OK':
            return true;
        case 'LOGIN_FAIL':
            return false;
        default:
            return state;
    }
};

export default combineReducers({ username, password, isValid });