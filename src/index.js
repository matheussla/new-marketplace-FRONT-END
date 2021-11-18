import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./styles/global.scss";
import { Provider } from 'react-redux';
import store from './store';
import Registration from './pages/registration'

// ReactDOM.render(
//   <Provider store={store} >
//     <Routes />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <Registration />
  </React.StrictMode>,
  document.getElementById('root')
);