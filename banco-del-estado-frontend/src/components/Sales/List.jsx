import React, { Fragment, useEffect, useState } from "react";
import { getData } from "../../Firebase";
import Item from "./Item";

export default function List(props) {
  const [salesList, setSalesList] = useState([]);


  useEffect(() => {
    const dataLoad = async () => {
      const tempList = await getData("sales");
      setSalesList(tempList);
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
