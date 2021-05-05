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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/reset" component={ResetPassword} />
        <PrivateRoute path="/confirm" component={ConfirmPassword} />
        <PrivateRoute path="/bag" component={MyBag} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
