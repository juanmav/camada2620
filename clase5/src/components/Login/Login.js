import React from 'react';

class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }



    generatedHandleAttribute = (attributeName) => { // email o password
        /*
        * handleEmail = (event) => {
        *    this.setState({ email: event.target.value })
        *    };
        *
        * */
        return (event) => {
            let newState =  {};
            newState[attributeName] = event.target.value;
            this.setState(newState); //{ email: event.target.value } o { password: event.target.value }
        };
    };

    login = () => {
        console.log('me voy a loguear!');
        console.log(this.state);
        this.setState({ loading : true});
        setTimeout(() => {
            this.setState({ loading : false});
            window.location.href = '/postlist';
        }, 1500);
    };

    render(){
        console.log(this.state);
        return (
            <div>
                email: <input onChange={this.generatedHandleAttribute('email')}/><br/>
                password: <input type="password" onChange={this.generatedHandleAttribute('password')}/><br/>
                <button onClick={this.login} disabled={this.state.loading}>Login!</button>
            </div>
        )
    }
}

export default Login;