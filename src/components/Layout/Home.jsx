import { Fragment } from "react";
import "../Style.css";
import Menu from "./Menu";
import Header from "./Header";
import Banner from "./Banner";

export default function Home() {
  return (
    <Fragment>
      <Menu></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"Bienvenido al sistema"} home={true}></Banner>
        </div>
      </div>
    </Fragment>
  );
}
