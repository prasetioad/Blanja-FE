import "../../App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PublicRoute from "./module/PublicRoute";
import PrivateRoute from "./module/PrivateRoute";

import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ResetPassword from "../../pages/ResetPassword";
import ConfirmPassword from "../../pages/ConfirmPassword";
import Home from "../../pages/Home";
import MyBag from "../../pages/MyBag";
import Product from '../../pages/Product'
import Category from '../../pages/Category'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/reset" component={ResetPassword} />
        <PrivateRoute path="/confirm" component={ConfirmPassword} />
        <PrivateRoute path="/bag" component={MyBag} />
        <Route path="/product" component={Product}/>
        <Route path="/category" component={Category} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
