import React from 'react';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            username : '',
            password: ''
        };
    }

    login = () => {
        console.log(this.state);
    };

    handleUsername = (event) => {
        console.log('cambio el nombre!');
        console.log(event.target.value);
        this.setState({ username: event.target.value })
    };

    handlePassword = (event) => {
        console.log('cambio el nombre!');
        console.log(event.target.value);
        this.setState({ password: event.target.value })
    };

    render(){
        console.log('renderizoooooooooooooooooooooooooo-------------------')
        return(
            <div>
                <label>Username</label>
                <input onChange={this.handleUsername} type="text"/>
                { this.state.username.length < 3 ? 'faltan caracteres' : ''}
                <br/>
                <label>password</label>
                <input onChange={this.handlePassword} type="password" />
                <br/>
                <button onClick={this.login }>Login</button>
            </div>
        )
    }
}

export default Form;