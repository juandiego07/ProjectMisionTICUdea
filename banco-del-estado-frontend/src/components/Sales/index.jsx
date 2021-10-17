import { Fragment } from "react";
import { useParams } from "react-router";
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import Form from "../Sales/Form";
import List from "../Sales/List";
import "../Style.css";

export default function Sales(props) {
  const action = useParams();

  return (
    <Fragment>
      <Menu isActive={"sales"}></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"Ventas"} url={"sales"}></Banner>
          {action.id === undefined ? <List></List> : <Form></Form>}
        </div>
      </div>
    </Fragment>
  );
}
