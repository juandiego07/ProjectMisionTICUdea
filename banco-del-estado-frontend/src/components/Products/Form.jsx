import { Fragment } from "react";
import { saveData, getId } from "../../Firebase";
// import {v4 as uuidv4} from "uuid";

export default function Form({ handlerCancel }) {
  async function handleSave(props) {
    const data = {
      id: getId(),
      idRef: document.getElementById("id").value,
      name: document.getElementById("name").value,
      price: document.getElementById("price").value,
      state: document.getElementById("state").value,
      description: document.getElementById("description").value,
    };
    await saveData("products", data);
    // console.log(await saveData("products", data));
    // console.log(await getData("products"));
    // console.log(typeof await getData("products"));
    // const test = await getData("products");
    //  test.forEach((item) => {
    //   console.log(item.id);
    // });
  }

  return (
    <Fragment>
      <div className="card">
        <div className="card-header border-primary">
          <strong className="text-primary">Servicio</strong>
        </div>
        <div className="card-body">
          <form id="formulario">
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Identificador <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  autoComplete="off"
                  required
                />
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Nombre <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  autoComplete="off"
                  required
                />
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Valor Unitario <span>*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  required
                />
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Estado <span>*</span>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="state"
                  required
                >
                  <option defaultValue=""></option>
                  <option value="Disponible">Disponible</option>
                  <option value="No disponible">No disponible</option>
                </select>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Descripción <span>*</span>
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  required
                ></textarea>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="text-center">
                <button
                  id="submitForm"
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={handleSave}
                >
                  Guardar
                </button>
                <button
                  id="cancel"
                  type="reset"
                  className="btn btn-primary mx-2"
                  onClick={handlerCancel}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
