import { Fragment } from "react";

export default function Item({ 
    id,
    date,
    name,
    personalId,
    product,
    price,
    sellerId,
    amount
 }) {

  return (
    <Fragment>
      <div className="card pb-3 pt-3 mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-11 pe-0">
              <div className="row">
                <div className="col-12 col-md-3 col-sm-6">
                  <p className="text-muted text-capitalize mb-0">
                    Identificador
                  </p>
                  <div>{id}</div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                  <p className="text-muted text-capitalize mb-0">
                    Documento identidad
                  </p>
                  <div>{personalId}</div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                  <p className="text-muted text-capitalize mb-0">
                    Nombre cliente
                  </p>
                  <div>{name}</div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                  <p className="text-muted text-capitalize mb-0">Valor venta</p>
                  <div>{amount}</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-1">
              <div>
                <a
                  className="gx-btn gx-btn-lg gx-flat-btn text-muted p-1 m-0"
                  data-toggle="tooltip"
                  title="Editar"
                  href="/ventas"
                >
                  <span className="material-icons">edit</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
