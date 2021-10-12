import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Sales from "../Sales";
import Login from "../Login";
import Products from "../Products";
import Form from "../Products/Form";
import React from "react";

export default function Routes() {

  const [isLogedd, setIsLogedd] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login></Login>
        </Route>
        <Route path="/ventas" exact>
          <Sales state={isLogedd}></Sales>
        </Route>
        <Route path="/productos" exact>
          <Products></Products>
        </Route>
        <Route path="/productos/registrar" exact>
          <Form></Form>
        </Route>
      </Switch>
    </Router>
  );
}
