import { Link, useHistory } from "react-router-dom";
import { logOutUser } from "../../Firebase";
import "../Style.css";

export default function Menu({ isActive = null }) {
  const comeBack = useHistory();

const handleLogout = async () => {
  const response = await logOutUser();
  console.log(response);
  return comeBack.push("/");
}

  return (
    <div className="sidebar">
      <Link className="logo" to="/home">
        <div className="d-flex align-items-center">
          <span className="material-icons pe-2">account_balance</span>
          <span>Banco Estatal</span>
        </div>
      </Link>
      <Link to="/home">
        <div
          onClick={handleLogout}
          className="d-flex align-items-center"
          to="/"
        >
          <span className="material-icons pe-2">logout</span>
          <span>Cerrar sesión</span>
        </div>
      </Link>
      <Link className={isActive === "users" ? "active" : ""} to="/users">
        <div className="d-flex align-items-center">
          <span className="material-icons pe-2">account_circle</span>
          <span>Usuarios</span>
        </div>
      </Link>
      <Link className={isActive === "products" ? "active" : ""} to="/products">
        <div className="d-flex align-items-center">
          <span className="material-icons pe-2">home_repair_service</span>
          <span>Servicios</span>
        </div>
      </Link>
      <Link
        className={isActive === "sales" ? "active" : ""}
        href="/sales"
        to="/sales"
      >
        <div className="d-flex align-items-center">
          <span className="material-icons pe-2">receipt_long</span>
          <span>Ventas</span>
        </div>
      </Link>
    </div>
  );
}
