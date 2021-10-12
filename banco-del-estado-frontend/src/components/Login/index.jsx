export default function Login() {

  return (
    <div className="contenedor">
      <div className="imagenBanco">
        <span className="material-icons pe-2">account_balance</span>
        <span>Banco del Estado</span>
      </div>
      <div>
        <form id="formulario" action="/ventas">
          <input className="form-control" type="text" placeholder="Usuario" />
          <input
            type="text"
            className="form-control"
            placeholder="Contraseña"
          />
          <div className="divBotonLogin">
            <button
            id="btnIngresar"
            type="submit"
              className="btn boton"
            >Ingresar con google</button>
          </div>
        </form>
      </div>
    </div>
  );
}
