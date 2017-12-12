import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component{


    constructor(){
        super();
        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
    }

    fieldGenerator = (fieldname) => {
        return {
            onChange: (event) => {
                let user = this.state.user;
                user[fieldname] = event.target.value;
                this.setState({user});
            },
            value: this.state.user[fieldname]
        }
    };

    login = () => {
        console.log('Logueame!!!');
        console.log(this.state.user);

        fetch('http://159.203.190.127:4000/login',{
            method: 'POST',
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.user)
        })
            .then( response => {
                if (response.status == 201){
                    return response.json();
                } else {
                    throw response
                }
            })
            .then(data => {
                console.log(data.token);
                alert('Login exitoso!');
                localStorage.setItem('token', data.token);
                localStorage.setItem('email', this.state.user.email);
                window.location.href = '/';
            })
            .catch( err => {
                console.log(err);
                alert('Credenciales invalidas!');
            })

    };

    render(){
        return(
            <div>
                <h1>Login Form!</h1>
                email: <input {...this.fieldGenerator('email')}/><br/>
                password: <input {...this.fieldGenerator('password')} type="password" /><br/>
                <button onClick={this.login}>Login!!</button>
                <Link to={'/register'}> Registrar </Link>
            </div>
        )
    }
}

export default Login;