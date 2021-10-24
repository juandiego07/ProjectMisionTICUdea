import { useContext } from "react";
import { getItemField, loginGoogle } from "../../Firebase";
import { Redirect } from "react-router-dom";
import "./Style.css";
import { UserContext } from "../context/UserContex";

export default function Login() {
  const { setIsLogIn, isLogIn } = useContext(UserContext);
  const { setUserLogged } = useContext(UserContext);
  // const { setIsLogIn } = useContext(UserContext);
  // const { isLogIn } = useContext(UserContext);

  const handleGoogle = async () => {
    const responseFb = await loginGoogle();
    const responseDb = await getItemField(
      "listaUsuarios",
      "email",
      responseFb.email
    );
    const userData = {
      email: responseDb[0]?.email,
      name: responseDb[0]?.displayName,
      state: responseDb[0]?.state,
      rol: responseDb[0]?.rol,
    };
    setIsLogIn(true);
    setUserLogged(userData);
  };

  return isLogIn ? (
    <Redirect to="/home"></Redirect>
  ) : (
    <div className="body container-fluid ">
      <div className="row">
        <div className="imagenBanco col-12 col-sm-10 col-lg-8 m-auto mt-2">
          <span className="material-icons pe-2">account_balance</span>
          <span>Banco del Estado</span>
        </div>
        <div>
          <form>
            <div className="divBotonLogin col-12 col-sm-10 col-lg-8 m-auto mt-3">
              <button
                id="btnRegistrar"
                type="button"
                className="btn boton mx-2"
                onClick={handleGoogle}
              >
                <i className="bi bi-google"> Inicio de sesión</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
