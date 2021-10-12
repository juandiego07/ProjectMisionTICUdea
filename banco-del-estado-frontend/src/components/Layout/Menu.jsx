import "../Style.css";

export default function Menu() {
  return (
    <div className="sidebar">
      <a className="logo" href="#bank">
        <div className="d-flex align-items-center">
          <span className="material-icons pe-2">account_balance</span>
          <span>Banco Estatal</span>
        </div>
      </a>
      <a href="/">
        <div className="d-flex align-items-center">
          <span className="material-icons pe-2">logout</span>
          <span>Cerrar sesión</span>
        </div>
      </a>
      <a href="/">
        <div className="d-flex align-items-center">
          <span className="material-icons pe-2">account_circle</span>
          <span>Usuarios</span>
        </div>
      </a>
      <a href="/productos">
        <div className="d-flex align-items-center">
          <span className="material-icons pe-2">home_repair_service</span>
          <span>Servicios</span>
        </div>
      </a>
      <a
        className="active"
        href="/ventas"
      >
        <div className="d-flex align-items-center">
          <span className="material-icons pe-2">receipt_long</span>
          <span>Ventas</span>
        </div>
      </a>
    </div>
  );
}
