import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import TweetList from './components/Tweets/TweetList';

class App extends React.Component {

    constructor(){
        super();
        this.token = localStorage.getItem('token');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    Aca es el centro de la app

                    <Router>

                        {
                            this.token ?
                                <div>
                                    <Route path="/" exact={true} component={TweetList}/>
                                </div>
                                :
                                <div>
                                    <Route path="/" exact={true} component={Login}/>
                                    <Route path="/register" exact={true} component={Register}/>
                                </div>
                        }


                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
