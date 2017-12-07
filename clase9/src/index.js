import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './components/Login/reducers'

const middlewares = [thunk];

const store = createStore(reducers,applyMiddleware(...middlewares));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
