import React, { Fragment } from "react";
import "../Style.css";

export default function FormSales() {
  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <div className="card-header border-primary">
            <strong className="text-primary">Venta</strong>
          </div>
          <div className="card-body">
            <form className="row g-3 needs-validation">
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Identificador <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="identificador"
                  required
                />
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Fecha de la venta <span>*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="fecha"
                  required
                />
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label fclassName="form-label">
                  Nombre del cliente <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  required
                />
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Documento de identidad <span>*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="documento"
                  required
                />
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Producto <span>*</span>
                </label>
                <div className="d-flex">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="producto"
                    required
                  >
                    {/* <option selected></option>
                    <option value="1">Cuenta ahorro</option>
                    <option value="2">Cuenta corriente</option>
                    <option value="3">Crédito de vivienda</option>
                    <option value="4">Crédito de libre inversión</option>
                    <option value="5">Crédito de vehiculo</option>
                    <option value="6">Crédito de libranza</option>
                    <option value="7">Crédito de estudio</option>
                    <option value="8">Tarjeta de debito</option>
                    <option value="9">Tarjeta de credito</option>
                    <option value="10">Seguro de vida</option> */}
                  </select>
                </div>
                <div className="invalid-feedback">
                  Campo obligatorio <span>*</span>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Precio unitario <span>*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="preciounitario"
                  required
                />
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Identificador del vendedor <span>*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="idVendedor"
                  required
                />
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Valor total venta <span>*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="totalVenta"
                  required
                />
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  id="descripcion"
                  rows="3"
                ></textarea>
              </div>
              <div className="container-fluid text-center">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
