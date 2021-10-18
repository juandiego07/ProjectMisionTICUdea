import React, { Fragment, useEffect, useState } from "react";
import { getData } from "../../Firebase"
import Item from "./Item";

export default function List ()  {
    const [userList ,setUserList] = useState([]);
      useEffect(() => {
        const dataLoad = async () => {
          const tempList = await getData("listUsers");
          setUserList(tempList);
        };
        dataLoad();
      }, []);
    return (
      <Fragment>
        {userList.map((data) => {
          return <Item key={data.id} value={data}></Item>;
        })}
      </Fragment>
    );
}
