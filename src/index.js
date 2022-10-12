import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Profile from './Profile'
import {Profile, UserName} from './Profile'

import User from './User'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile />
    <UserName />
 
  </React.StrictMode>
);

reportWebVitals();
