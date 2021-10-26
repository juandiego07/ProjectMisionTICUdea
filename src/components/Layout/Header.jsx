import "../Style.css";

export default function Header() {

  const search = (e) => {
    e.preventDefault();
  }

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container-fluid justify-content-end">
        <form className="d-flex ">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button
            onClick={search}
            className="btn btn-primary text-dark"
            type="submit"
          >
            <span className="material-icons">search</span>
          </button>
        </form>
      </div>
    </nav>
  );
}
