import { Fragment } from "react";
import "../Style.css";
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
// import Item from "./Item";
// import { guardarRegistro } from '../../Firebase'

export default function Sales() {
  // const obj = { "1":1, "dos": 2}

  // async function guardar() {
  //   const response = await guardarRegistro(obj);
  //     console.log(response);
  // }
  return (
    <Fragment>
      <Menu></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"Lista de Ventas"}></Banner>
        </div>
      </div>
    </Fragment>
  );
}
