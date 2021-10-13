import { Fragment } from "react";
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";

export default function Products() {
  return (
    <Fragment>
      <Menu isActive={"products"}></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"Listado de productos"}></Banner>
        </div>
      </div>
    </Fragment>
  );
}
