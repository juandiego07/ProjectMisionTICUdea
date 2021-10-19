import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Layout/Home";
import Login from "../Login";
import Products from "../Products";
import Sales from "../Sales";
import Users from "../Users";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/products/:id" component={Products} exact />
        <PrivateRoute path="/users/:id" component={Users} exact />
        <PrivateRoute path="/sales/:id" component={Sales} exact />
        <PrivateRoute path="/products" component={Products} exact />
        <PrivateRoute path="/sales" component={Sales} exact />
        <PrivateRoute path="/users" component={Users} exact />
        <PrivateRoute path="/home" component={Home} exact />
        <Route path="/" component={Login} exact />
      </Switch>
    </Router>
  );
}
