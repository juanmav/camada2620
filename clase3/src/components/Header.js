import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
    render(){
        helper();
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
        )
    }
}

function helper(){
    console.log('holis no me ves');
}

export default Header;