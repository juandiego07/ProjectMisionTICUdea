import React, { Fragment, useEffect, useState } from "react";
import { getData } from "../../Firebase";
import Item from "./Item";

export default function List(props) {
  const [salesList, setSalesList] = useState([]);
  const [defaultSalesList, setDefaultSalesList] = useState([]);

  let terminoBusqueda = props.searchTerm;
      console.log("lista",terminoBusqueda)

  useEffect(() => {
    const dataLoad = async () => {
        const tempList = await getData("sales");
      setSalesList(tempList);
      setDefaultSalesList(tempList);
      if (props.searchTerm !== '') {
        console.log("entro",terminoBusqueda)
        const tempList = defaultSalesList.filter((elemento)=>{
        if(elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ){
          return elemento;
        }
      });
        setSalesList(tempList);
      }

    };
    dataLoad();
  }, []);



  return (
    <Fragment>
      {salesList.map((data) => {
        return <Item key={data.id} value={data}></Item>;
      })}
    </Fragment>
  );
}
