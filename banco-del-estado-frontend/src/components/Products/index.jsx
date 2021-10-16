import { Fragment, useState } from "react";
import Form from "./Form";
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import List from "./List";

export default function Products(props) {
  
  const [isForm, setIsForm] = useState(false);
  const handlerForm = () => {
    setIsForm(true);
  };

  const handlerCancel = () => {
    setIsForm(false);
  };

  return (
    <Fragment>
      <Menu isActive={"products"}></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner
            text={"productos"}
            isButton={true}
            handlerForm={handlerForm}
          ></Banner>
          {isForm ? <Form handlerCancel={handlerCancel}></Form> : <List></List>}
        </div>
      </div>
    </Fragment>
  );
}
