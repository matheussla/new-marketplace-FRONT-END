import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Registration from "./pages/registration";
import Checkout from "./pages/checkout";
import Home from "./pages/home";
import AddProduct from "./pages/addProduct";
import OrderStatus  from "./pages/orderStatus";

function Routes() {
  return (
    <>
      <Router>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" exact component={Registration} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/addProduct" exact component={AddProduct} />
      <Route path="/orderStatus" exact component={OrderStatus} />
      </Router>
    </>
  );
}

export default Routes;
