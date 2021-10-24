import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <Fragment>
      <div className="card pb-3 pt-3 mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-11 pe-0">
              <div className="row">
                <div className="col-12 col-md-3 col-sm-6">
                  <p className="text-muted text-capitalize mb-0">
                    Nombre de Usuario
                  </p>
                  <div>{props.value.displayName}</div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                  <p className="text-muted text-capitalize mb-0">
                    Correo de registro
                  </p>
                  <div>{props.value.email}</div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                  <p className="text-muted text-capitalize mb-0">Estado</p>
                  <div>{props.value.state}</div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                  <p className="text-muted text-capitalize mb-0">Rol</p>
                  <div>{props.value.rol}</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-1">
              <div>
                <Link
                  className="gx-btn gx-btn-lg gx-flat-btn text-muted p-1 m-0"
                  data-toggle="tooltip"
                  title="Editar"
                  to={`/users/${props.value.id}`}
                >
                  <span className="material-icons">edit</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
