import { Fragment, useEffect } from "react";
import "../Style.css";
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import { Redirect } from "react-router";
// import Item from "./Item";
// import { guardarRegistro } from '../../Firebase'

export default function Sales(state) {
  // const obj = { "1":1, "dos": 2}

  // async function guardar() {
  //   const response = await guardarRegistro(obj);
  //     console.log(response);
  // }
console.log(state.state);
useEffect(() => {
  if (!state.state) {
    <Redirect to={{pathname:"/"}} />;
    console.log("entro");
  }
},[])

  return (
    <Fragment>
      <Menu></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"Lista de Ventas"}></Banner>
          {/* <button onClick={guardar}>Guardar</button> */}
        </div>
      </div>
    </Fragment>
  );
}
