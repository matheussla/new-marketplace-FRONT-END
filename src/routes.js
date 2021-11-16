import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Registration from "./pages/Registration";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function Routes() {
  return (
    <>
      <Router>
        <Sidebar />
        <Route path="/" exact component={Home} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/checkout" exact component={Checkout} />
      </Router>
    </>
  );
}

export default Routes;
