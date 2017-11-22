import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Login from './components/Login/Login';
import PostList from './components/Post/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Rpouter Example</h1>
        </header>
        <div className="App-intro">
            <Router>
                <div>
                    <Route path={'/'} exact={true} component={Login}/>
                    <Route path={'/postlist'} exact={true} component={PostList}/>

                </div>
            </Router>

        </div>
      </div>
    );
  }
}

export default App;
