import { Fragment } from "react";
import Banner from "../Layout/Banner";
import Header from "../Layout/Header";
import Menu from "../Layout/Menu";

export default function Users() {
  return (
    <Fragment>
      <Menu isActive={"users"}></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"usuarios"}></Banner>
        </div>
      </div>
    </Fragment>
  );
}
