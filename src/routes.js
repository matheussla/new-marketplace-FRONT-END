import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Sidebar from "./components/Sidebar";
import Registration from "./pages/registration";
import Checkout from "./pages/checkout";
import Home from "./pages/home";
import Shop from "./pages/shop";
import OrderStatus  from "./pages/orderStatus";

function Routes() {
  return (
  <BrowserRouter>  
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/orderStatus" exact component={OrderStatus} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/shop/:id" exact component={Shop} />
    </Switch>
  </BrowserRouter>  
  );
}

export default Routes;
