import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Layout/Home";
import Login from "../Login";
import Sales from "../Sales";
import Products from "../Products";
import Users from "../Users";

export default function Routes() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login></Login>
        </Route>
        <Route path="/Home" exact>
          <Home></Home>
        </Route>
        <Route path="/Users" exact>
          <Users></Users>
        </Route>
        <Route path="/Products" exact>
          <Products></Products>
        </Route>
        <Route path="/Sales" exact>
          <Sales></Sales>
        </Route>
      </Switch>
    </Router>
  );
}
