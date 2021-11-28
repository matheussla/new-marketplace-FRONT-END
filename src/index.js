import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./styles/global.scss";
import { Provider } from 'react-redux';
//import Registration from './pages/registration'
import Home from './pages/home'
import AddProduct from './pages/addProduct'
import OrderStatus from './pages/orderStatus'

// ReactDOM.render(
//   <Provider store={store} >
//     <Routes />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <OrderStatus />
  </React.StrictMode>,
  document.getElementById('root')
);