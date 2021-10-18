import { useState } from "react";
import {  Redirect } from "react-router-dom";
import { createUser, loginUser } from "../../Firebase";
import "./Style.css";
export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleRegister = async (e) => {
    if (user === "" || password === "" || confirmation === "") {
      alert("Todo los campos son requeridos");
    } else {
      if (password !== confirmation) {
        alert("Contraseñas no coinciden");
        setPassword("");
        setConfirmation("");
      } else if (password.length > 5) {
        const response = await createUser(user, password);
        console.log(response);
        alert("Usuario registrado");
        <Redirect to="/home" />;
        return response;
      } else {
        alert("Contraseñas debe contener minimo 6 caracteres");
      }
    }
  };

  const handleLogin = async () => {

      const loggedIn = await loginUser(user, password);

      if (loggedIn !== null) {
        <Redirect to="/home" />;
      } else {
        console.log("no entro");
      }
      return loggedIn;

  };

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
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Correo"
              />
            </div>
            <div className="col-12 col-sm-10 col-lg-8 m-auto mt-2">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Ingrese contraseña"
              />
            </div>
            <div className="divBotonLogin col-12 col-sm-10 col-lg-8 m-auto mt-3">
              <button
                onClick={handleLogin}
                id="btnIngresar"
                type="button"
                className="btn boton mx-2"
              >
                Ingresar
              </button>
              <button
                id="btnRegistrar"
                type="button"
                className="btn boton mx-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Registrarse
              </button>
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Registro de usuario
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="col-8 m-auto">
                        <input
                          value={user}
                          onChange={(e) => setUser(e.target.value)}
                          className="form-control my-2"
                          type="email"
                          placeholder="Corre electronico"
                        />
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control my-2"
                          type="password"
                          placeholder="Contraseña"
                          min="6"
                        />
                        <input
                          value={confirmation}
                          onChange={(e) => setConfirmation(e.target.value)}
                          className="form-control my-2"
                          type="password"
                          placeholder="Confirmar Contraseña"
                          min="6"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                      <button
                        id="guardar"
                        onClick={handleRegister}
                        type="button"
                        className="btn btn-primary"
                      >
                        Registrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
