import { useState, useEffect, Fragment } from "react";
import { getData } from "../../Firebase";
import Item from "./Item";

export default function List(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const dataLoad = async () => {
      const tempList = await getData("products");
      setProductList(tempList);
    };
    dataLoad();
  }, []);

  return (
    <Fragment>
      {productList.map((data) => {
        return <Item keys={data.id} value={data}></Item>;
      })}
    </Fragment>
  );
}
