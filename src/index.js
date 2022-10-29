import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import App from './App';
// import Profile from './Profile'
// import {Profile, UserName} from './Profile'

import User from './User'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Profile />
    <UserName /> */}
    <User />



  </React.StrictMode>
);

reportWebVitals();
=======
import Home from './Home'
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

>>>>>>> d491c81 (new code)
