import { Fragment } from "react";
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import "../Style.css";

export default function Sales() {

  return (
    <Fragment>
      <Menu isActive={"sales"}></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"ventas"}></Banner>
        </div>
      </div>
    </Fragment>
  );
}
