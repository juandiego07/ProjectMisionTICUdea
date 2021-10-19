import { useState } from "react";
import { loginGoogle } from "../../Firebase";
import { Redirect } from "react-router-dom";
import "./Style.css";

export default function Login() {
  const [isLogIn, setIsLogIn] = useState(false)
  const handleGoogle = async () => {
    await loginGoogle();
    setIsLogIn(true);
  };

  return isLogIn ? (<Redirect to="/home"></Redirect>) : (
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
