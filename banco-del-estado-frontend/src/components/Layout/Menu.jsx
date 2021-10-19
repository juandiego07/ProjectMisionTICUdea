import {Link} from "react-router-dom";
import "../Style.css";
import {loginGoogle, logOutUser} from "../../Firebase";

export default function Menu({isActive = null}) {
    async function handleClick() {
        logOutUser()
    }

    return (
        <div className="sidebar">
            <Link className="logo" to="/home">
                <div className="d-flex align-items-center">
                    <span className="material-icons pe-2">account_balance</span>
                    <span>Banco Estatal</span>
                </div>
            </Link>
            <Link to="/" onClick={handleClick}>
                <div className=" align-items-center">
                    {/*<a id="myBtnLogOut" type="button" onClick={handleClick}>*/}
                        <span className="material-icons pe-2">logout</span>
                        <span>Cerrar sesión</span>
                    {/*</a>*/}
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
