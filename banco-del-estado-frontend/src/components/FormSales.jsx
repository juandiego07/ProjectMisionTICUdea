import React, { Fragment } from "react";
import '../Style.css';

class FormSales extends React.Component{

    render() {
        return (
            <Fragment>
        <div class="container">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <p class="text-primary module-title">Registro de Ventas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header border-primary">
                    <strong class="text-primary">Venta</strong>
                </div>
                <div class="card-body">
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-12 col-md-6 mb-3">
                            <label for="identificador" class="form-label">Identificador <span>*</span></label>
                            <input type="text" class="form-control" id="identificador" required/>
                            <div class="invalid-feedback">Campo obligatorio</div>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <label for="fecha" class="form-label">Fecha de la venta <span>*</span></label>
                            <input type="date" class="form-control" id="fecha" required/>
                            <div class="invalid-feedback">Campo obligatorio</div>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <label for="nombre" class="form-label">Nombre del cliente <span>*</span></label>
                            <input type="text" class="form-control" id="nombre" required/>
                            <div class="invalid-feedback">Campo obligatorio</div>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <label for="documento" class="form-label">Documento de identidad <span>*</span></label>
                            <input type="number" class="form-control" id="documento" required/>
                            <div class="invalid-feedback">Campo obligatorio</div>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <label for="producto" class="form-label">Producto <span>*</span></label>
                            <div class="d-flex">
                                <select class="form-select" aria-label="Default select example" id="producto" required>
                                    <option selected></option>
                                    <option value="1">Cuenta ahorro</option>
                                    <option value="2">Cuenta corriente</option>
                                    <option value="3">Crédito de vivienda</option>
                                    <option value="4">Crédito de libre inversión</option>
                                    <option value="5">Crédito de vehiculo</option>
                                    <option value="6">Crédito de libranza</option>
                                    <option value="7">Crédito de estudio</option> 
                                    <option value="8">Tarjeta de debito</option>
                                    <option value="9">Tarjeta de credito</option>
                                    <option value="10">Seguro de vida</option>
                                </select>
                                 {/* <button type="submit" class="btn btn-primary me-2">Agregar</button>  */}
                            </div>
                            <div class="invalid-feedback">Campo obligatorio <span>*</span></div>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <label for="preciounitario" class="form-label">Precio unitario <span>*</span></label>
                            <input type="number" class="form-control" id="preciounitario" required/>
                            <div class="invalid-feedback">Campo obligatorio</div>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <label for="idVendedor" class="form-label">Identificador del vendedor <span>*</span></label>
                            <input type="number" class="form-control" id="idVendedor" required/>
                            <div class="invalid-feedback">Campo obligatorio</div>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <label for="totalVenta" class="form-label">Valor total venta <span>*</span></label>
                            <input type="number" class="form-control" id="totalVenta" required/>
                            <div class="invalid-feedback">Campo obligatorio</div>
                        </div>
                         <div class="col-12 col-md-6 mb-3">
                                <label for="descripcion" class="form-label">Descripción</label>
                                <textarea class="form-control" id="descripcion" rows="3"></textarea>
                            </div> 
                        <div class="container-fluid text-center">
                            <button type="submit" class="btn btn-primary">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            </Fragment>
        );
    }
}

export default FormSales