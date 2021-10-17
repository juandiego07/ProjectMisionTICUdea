import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from "../Layout/Home";
import Login from "../Login";
import Products from "../Products";
import Sales from "../Sales";
import Users from "../Users";

export default function Routes() {

  return (
    <Router>
      <Switch>
        <Route path="/products/:id" exact>
          <Products></Products>
        </Route>
        <Route path="/sales/:id" exact>
          <Sales></Sales>
        </Route>
        <Route path="/products" exact>
          <Products></Products>
        </Route>
        <Route path="/sales" exact>
          <Sales></Sales>
        </Route>
        <Route path="/users" exact>
          <Users></Users>
        </Route>
        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Route path="/" exact>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}
