

export const modifyUsername = (username) => ({
    type: 'USERNAME_INPUT',
    username: username
});

export const modifyPassword = (password) => ({
    type: 'PASSWORD_INPUT',
    password: password
});

export const clearForm = () => ({
    type: 'CLEAN_FORM'
});

export const acceptedLogin = () => ({
    type: "LOGIN_OK"
});

export const refuseLogin = () => ({
    type: "LOGIN_FAIL"
});

export const login = (username, password) => dispatch => {

    dispatch(acceptedLogin());

    setTimeout((/*response*/)=>{
        // volvio el login del backend
        // Despacho LOGIN_OK
        // Despacho LOGIN_FAIL
        console.log('volvio del server!');

        let response = { status : 503 };
        if (response.status == 201){
            console.log('tiro exito');
            dispatch(acceptedLogin())
        } else {
            console.log('tiro fail');
            dispatch(clearForm());
            dispatch(refuseLogin());
        }
    }, 2000)

};