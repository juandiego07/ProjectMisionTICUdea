import React from "react";
import '../Style.css';

class Menu extends React.Component {
  render() {
      return (
        <div className="sidebar">
          <a className="logo" href="#bank">
            <div className="d-flex align-items-center">
              <span className="material-icons pe-2">account_balance</span>
              <span>Banco Estatal</span>
            </div>
          </a>
          <a href="/banco-del-estado-frontend/templates/login/login.html">
            <div className="d-flex align-items-center">
              <span className="material-icons pe-2">logout</span>
              <span>Cerrar sesión</span>
            </div>
          </a>
          <a href="/banco-del-estado-frontend/templates/user/list.html">
            <div className="d-flex align-items-center">
              <span className="material-icons pe-2">account_circle</span>
              <span>Usuarios</span>
            </div>
          </a>
          <a href="/banco-del-estado-frontend/templates/product/list.html">
            <div className="d-flex align-items-center">
              <span className="material-icons pe-2">home_repair_service</span>
              <span>Servicios</span>
            </div>
          </a>
          <a
            className="active"
            href="/banco-del-estado-frontend/templates/sales/list.html"
          >
            <div className="d-flex align-items-center">
              <span className="material-icons pe-2">receipt_long</span>
              <span>Ventas</span>
            </div>
          </a>
        </div>
      );};
}

export default Menu;

// class Menu extends React.Component{

//     render() {
//         return
//            <div>
//              <div class="sidebar">
//                <a class="logo" href="#bank">
//                  <div class="d-flex align-items-center">
//                    <span class="material-icons pe-2">account_balance</span>
//                    <span>Banco Estatal</span>
//                  </div>
//                </a>
//                <a href="/banco-del-estado-frontend/templates/login/login.html">
//                  <div class="d-flex align-items-center">
//                    <span class="material-icons pe-2">logout</span>
//                    <span>Cerrar sesión</span>
//                  </div>
//                </a>
//                <a href="/banco-del-estado-frontend/templates/user/list.html">
//                  <div class="d-flex align-items-center">
//                    <span class="material-icons pe-2">account_circle</span>
//                    <span>Usuarios</span>
//                  </div>
//                </a>
//                <a href="/banco-del-estado-frontend/templates/product/list.html">
//                  <div class="d-flex align-items-center">
//                    <span class="material-icons pe-2">home_repair_service</span>
//                    <span>Servicios</span>
//                  </div>
//                </a>
//                <a
//                  class="active"
//                  href="/banco-del-estado-frontend/templates/sales/list.html"
//                >
//                  <div class="d-flex align-items-center">
//                    <span class="material-icons pe-2">receipt_long</span>
//                    <span>Ventas</span>
//                  </div>
//                </a>
//              </div>
//            </div>;
//     }
// }

// export default Menu
