import { Fragment, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContex";
import Banner from "../Layout/Banner";
import Header from "../Layout/Header";
import Menu from "../Layout/Menu";
import Form from "./Form";
import List from "./List";

export default function Users() {
  const action = useParams();
  const comeBack = useHistory();
  const { setUserLogged } = useContext(UserContext);

  useEffect(() => {
    if (setUserLogged?.rol !== "Administrador") return comeBack?.push("/");
  }, [comeBack, setUserLogged]);

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
