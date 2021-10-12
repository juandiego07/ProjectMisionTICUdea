import "./Style.css";
export default function Login() {
  return (
    <div className="contenedor container-fluid">
      <div className="row">
        <div className="imagenBanco col-8 col-sm-6 col-md-5 col-lg-3 m-auto">
          <span className="material-icons pe-2">account_balance</span>
          <span>Banco del Estado</span>
        </div>
        <div>
          <form id="formulario" action="/ventas">
            <div className="col-8 col-sm-6 col-md-5 col-lg-3 m-auto">
              <input
                className="form-control"
                type="text"
                placeholder="Usuario"
              />
            </div>
            <div className="col-8 col-sm-6 col-md-5 col-lg-3 m-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>

            <div className="divBotonLogin col-5 col-sm-4 col-md-3 col-lg-2 m-auto mt-3">
              <button id="btnIngresar" type="submit" className="btn boton ">
                Ingresar con google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
