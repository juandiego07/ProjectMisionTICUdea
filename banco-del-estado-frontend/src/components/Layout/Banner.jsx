import { Fragment } from "react";

export default function Banner({
  text = "",
  isButton = false,
  home = false,
  handlerForm,
}, props) {
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
              {isButton && (
                <button
                  onClick={handlerForm}
                  className="btn btn-primary registrar me-4"
                >
                  Registrar {text}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
