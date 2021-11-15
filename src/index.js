import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css'
//import Home from './pages/home';
import Registration from './pages/registration'

ReactDOM.render(
  <React.StrictMode>
    <Registration />
  </React.StrictMode>,
  document.getElementById('root')
);