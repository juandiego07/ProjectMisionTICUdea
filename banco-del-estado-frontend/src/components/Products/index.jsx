import { Fragment } from "react";
import { useParams } from "react-router";
import Form from "./Form";
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import List from "./List";

export default function Products(props) {

  const action = useParams();

  return (
    <Fragment>
      <Menu isActive={"products"}></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"Productos"} url={"products"}></Banner>
          {action.id === undefined ? <List></List> : <Form></Form>}
        </div>
      </div>
    </Fragment>
  );
}
