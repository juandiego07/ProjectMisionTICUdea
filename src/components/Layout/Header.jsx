import "../Style.css";
import {useState} from "react";

export default function Header(props) {
    const [busqueda, setBusqueda] = useState("");

    const handleChange = e => {
        setBusqueda(e.target.value);
    }

    const handleSearch= () => {
      props.onHandleSearch(busqueda);
    }

    return (

        <nav className="navbar navbar-light bg-light mb-3">
            <div className="container-fluid justify-content-end">
                <form className="d-flex ">
                    <input
                        className="form-control me-2"
                        type="search"
                        value={busqueda}
                        placeholder="Buscar"
                        aria-label="Search"
                        onChange={handleChange}
                    />
                    <button className="btn btn-primary text-dark" type="button" onClick={handleSearch}>
                        <span className="material-icons">search</span>
                    </button>
                </form>
            </div>
        </nav>
    );
}
