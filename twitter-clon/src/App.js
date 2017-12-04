import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

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
                    <Route path="/register" exact={true} component={Register}/>
                </div>
            </Router>
        </div>
      </div>
    );
  }
}

let token = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTI1Yzk1YWJlYTVmODIwMThmNjllNTgiLCJlbWFpbCI6Imp1YW5jaXRvQG1haWwuY29tIiwibmFtZSI6Ikp1YW5jdGlvIiwibGFzdG5hbWUiOiJSb2JlcnNvbiIsImlzQWRtaW4iOmZhbHNlLCJfX3YiOjAsImlhdCI6MTUxMjQyNjA3N30.MyjyQMD_mBbVyTqOJIjbsp1G9Y2SsYFhNWVRtewg3_Y"
}

export default App;
