import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Banner from "../Layout/Banner";
import Header from "../Layout/Header";
import Menu from "../Layout/Menu";
import Form from "./Form";
import List from "./List";

export default function Users() {
const action = useParams();

  return (
    <Fragment>
      <Menu isActive={"users"}></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"usuarios"}></Banner>
          {action.id === undefined ? <List></List> : <Form></Form>}
        </div>
      </div>
    </Fragment>
  );
}
