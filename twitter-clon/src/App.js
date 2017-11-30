import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login/Login';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
            Aca es el centro de la app
            <Router>
                <div>
                    <Route path="/" exact={true} component={Login}/>
                </div>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;
