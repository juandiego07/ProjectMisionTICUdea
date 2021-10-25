import React from 'react'
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({component : Component, ...rest}) {
  const auth = true;
  return <Route {...rest}>{auth ? <Component /> : <Redirect to="/" />}</Route>;
}
