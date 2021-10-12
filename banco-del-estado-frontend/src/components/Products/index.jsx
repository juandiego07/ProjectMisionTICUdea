import { Fragment } from "react";
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import Form from "./Form";

export default function Products() {
  return (
    <Fragment>
      <Menu></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"Lista de produtos"}></Banner>
          <Form></Form>
        </div>
      </div>
    </Fragment>
  );
}
