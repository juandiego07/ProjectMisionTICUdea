import { Fragment, useContext, useEffect } from "react";
import "../Style.css";
import Menu from "./Menu";
import Header from "./Header";
import Banner from "./Banner";
import { UserContext } from "../context/UserContex";
import { useHistory } from "react-router";
// import { Redirect } from "react-router";
// import Login from "../Login";

export default function Home() {
  const comeBack = useHistory();
  const { userLogged } = useContext(UserContext);

  useEffect(() => {
    if (!userLogged) return comeBack.push("/");
  });

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
