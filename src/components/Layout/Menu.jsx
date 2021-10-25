import { useContext } from "react";
import { Link } from "react-router-dom"; // , Redirect
import { logOutUser } from "../../Firebase";
import { UserContext } from "../context/UserContex";
import "../Style.css";

export default function Menu({ isActive = null }) {
  const { setUserLogged, setIsLogIn } = useContext(UserContext); 

  const handleLogout = async () => {
    await logOutUser();
    setIsLogIn(false);
    setUserLogged(undefined);
  };

  return (
    <div className="sidebar">
      <Link className="logo" to="/home">
        <div className="d-flex align-items-center">
          <span className="material-icons pe-2">account_balance</span>
          <span>Banco Estatal</span>
        </div>
      </Link>
      <Link to="/" onClick={handleLogout}>
        <div className="d-flex align-items-center">
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
      <Link className={isActive === "sales" ? "active" : ""} to="/sales">
        <div className="d-flex align-items-center">
          <span className="material-icons pe-2">receipt_long</span>
          <span>Ventas</span>
        </div>
      </Link>
    </div>
  );
}
