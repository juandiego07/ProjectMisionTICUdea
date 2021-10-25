import { Fragment, useContext, useEffect } from "react"; //
import { useHistory, useParams } from "react-router"; //  , Redirect
import Form from "./Form";
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import List from "./List";
import { UserContext } from "../context/UserContex";
import swal from "sweetalert";
// import Login from "../Login";

export default function Products(props) {
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
