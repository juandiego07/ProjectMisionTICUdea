import { Fragment, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import Form from "./Form";
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import List from "./List";
import { UserContext } from "../context/UserContex";

export default function Products(props) {
  const action = useParams();
  const comeBack = useHistory();
  const { setUserLogged } = useContext(UserContext);

  useEffect(() => {
    if (setUserLogged?.rol !== "Administrador") return comeBack?.push("/");
  }, [comeBack, setUserLogged]);

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
