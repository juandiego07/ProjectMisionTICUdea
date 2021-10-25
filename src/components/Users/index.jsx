import { Fragment, useContext, useEffect } from "react"; //
import { useHistory, useParams } from "react-router-dom"; //  ,  Redirect
import swal from "sweetalert";
import { UserContext } from "../context/UserContex";
import Banner from "../Layout/Banner";
import Header from "../Layout/Header";
import Menu from "../Layout/Menu";
// import Login from "../Login";
import Form from "./Form";
import List from "./List";

export default function Users() {
  const action = useParams();
  const comeBack = useHistory();
  const { userLogged } = useContext(UserContext);

  useEffect(() => {
    // if (userLogged?.rol !== "Administrador") return comeBack.push("/");
    if (!userLogged) {
      return comeBack.push("/");
    } else if (userLogged?.rol !== "Administrador") {
      swal("No posee accesos!", "Presione OK para continuar...!", "info");
      return comeBack.push("/");
    }
  }, [userLogged, comeBack]);

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
