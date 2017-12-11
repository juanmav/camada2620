import React from 'react'
import * as actions from './actions.js';
import { connect } from 'react-redux';


// <Login username={...} password={...} loginUrl={auth.myhost.com}>

const Login = (props) => {
    return (
        <div>
            { props.loginUrl }<br/>
            username: <input value={props.username} onChange={(event) => props.modifyUsername(event.target.value)}/><br/>
            password: <input value={props.password} onChange={(event) => props.modifyPassword(event.target.value)}/><br/>
            { props.isValid ? '' : 'Usuario o contrasenia incorrectos!' } <br/>
            <button onClick={props.clearForm}>Limpiar</button><br/>
            <button onClick={() => props.login(props.username, props.password)}>Login</button>
        </div>
    )
};



const mapStateToProps = (state, ownProps) => {
    let { loginUrl }= ownProps;
    return { ...state, loginUrl };
};

const mapDispatchToProps = (dispatch) => {
    return {
        modifyUsername: (username) => dispatch(actions.modifyUsername(username)),
        modifyPassword: (password) => dispatch(actions.modifyPassword(password)),
        clearForm: () => dispatch(actions.clearForm()), // { type: 'CLEAN_FORM' }
        login: (username, password) => {
            dispatch(actions.login(username, password))

        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);