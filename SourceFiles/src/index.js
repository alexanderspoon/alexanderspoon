import React from 'react';
import ReactDOM from 'react-dom/client';

import './CSS/Main.css';
import './CSS/SharedStyles.css';
import './CSS/Projects.css';
import './CSS/Account.css';
import './CSS/Dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App/App';

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './Redux/index';

//Redux
const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

