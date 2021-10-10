import React from "react";
import "../Style.css";

class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light mb-3">
        <div class="container-fluid justify-content-end">
          <form class="d-flex ">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-primary text-dark" type="submit">
              <span class="material-icons">search</span>
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Header;
