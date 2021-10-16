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
        <Route path="/Products" exact>
          <Products></Products>
        </Route>
        <Route path="/Users" exact>
          <Users></Users>
        </Route>
        <Route path="/Sales" exact>
          <Sales></Sales>
        </Route>
        <Route path="/Home" exact>
          <Home></Home>
        </Route>
        <Route path="/" exact>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}
