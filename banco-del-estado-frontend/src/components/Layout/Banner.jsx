import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

export default function Banner({
  text = "",
  home = false,
  handlerForm,
  url
}, props) {


  const action = useParams();

  return (
    <Fragment>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              {home ? (
                <p className="text-primary module-title">{text}</p>
              ) : (
                <p className="text-primary module-title">Listado de {text}</p>
              )}
              {action.id !== "create" && (
                <Link
                  to={`/${url}/create`}
                  onClick={handlerForm}
                  className="btn btn-primary registrar me-4"
                >
                  Registrar {text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
