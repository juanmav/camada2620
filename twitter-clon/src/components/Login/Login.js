import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component{

    render(){
        return(
            <div>
                Login Form!

                <Link to={'/register'}> Registrar </Link>
            </div>
        )
    }
}

export default Login;