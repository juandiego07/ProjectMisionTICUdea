import { Link } from "react-router-dom";
// import './estilosLogin.css';

export default function Login() {

const formu =  document.getElementById('formulario')
function validar() {
  formu.addEventListener('submit', (e) => e.preventDefault())
}

  return (
    <div className="contenedor">
      <div className="imagenBanco">
        <span className="material-icons pe-2">account_balance</span>
        <span>Banco del Estado</span>
      </div>
      <div>
        <form action="/ventas" method="get" id="formulario">
          <input className="form-control" type="text" placeholder="Usuario" />
          <input
            type="text"
            className="form-control"
            placeholder="Contraseña"
          />
          <div className="divBotonLogin">
            <input
              className="btn boton"
              type="submit"
              onClick={validar}
              value="Ingresar"
            />
          </div>
          <div className="divBotonLogin">
            <Link to="/ventas" className="btn boton">
              Login con Google
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
