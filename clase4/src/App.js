import React, { Component } from 'react';
import './App.css';
import LifeCycle from './components/LifeCycle';
import PostList from './components/Post/PostList';
import Form from './components/Form/Form';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Form/>
                { /* <PostList/> */ }
            </div>
        );
    }
}

export default App;
