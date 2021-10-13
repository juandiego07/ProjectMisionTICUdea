import { Link } from "react-router-dom";
import "./Style.css";
export default function Login() {
  return (
    <div className="body container-fluid ">
      <div className="row">
        <div className="imagenBanco col-12 col-sm-10 col-lg-8 m-auto mt-2">
          <span className="material-icons pe-2">account_balance</span>
          <span>Banco del Estado</span>
        </div>
        <div>
          <form id="formulario" action="/home">
            <div className="col-12 col-sm-10 col-lg-8 m-auto mt-2">
              <input
                className="form-control"
                type="text"
                placeholder="Usuario"
              />
            </div>
            <div className="col-12 col-sm-10 col-lg-8 m-auto mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>

            <div className="divBotonLogin col-12 col-sm-10 col-lg-8 m-auto mt-3">
              {/* <button id="btnIngresar" type="submit" className="btn boton ">
                Ingresar con google
              </button> */}
              <Link className="btn boton" to="/home">
                Ingresar con google
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
