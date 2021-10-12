import { Fragment } from "react";
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Item from "./Item";
import Banner from "../Layout/Banner";
import { obtenerRegistro } from "../../Firebase";

export default function Products() {
  const response = [];
  async function getDatos() {
    const datos = await obtenerRegistro("products");
    datos.forEach(function(item){
      // console.log(item.data())
      response.push(item.data())
    }) 
  }
  getDatos();
  // console.log(response);

  // const prueba = [
  //   { uno: 1, dos: 2, tres: 3, cuatro: 6 },
  //   { uno: 1, dos: 2, tres: 3, cuatro: 6 },
  // ];
  // console.log(prueba)
  return (
    <Fragment>
      <Menu></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"Lista de produtos"}></Banner>
          {
            response.forEach((item) =>{
              <Item key={item.id} data={item}></Item>;
              console.log(item)
            })
          }
        </div>
      </div>
    </Fragment>
  );
}
