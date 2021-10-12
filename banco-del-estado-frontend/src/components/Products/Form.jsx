import { Fragment, useState } from "react";
import { guardarRegistro } from "../../Firebase";
import Menu from "../Layout/Menu";
import Banner from "../Layout/Banner";
import Header from "../Layout/Header";
import swal from 'sweetalert';

export default function Form() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");
  const formu = document.getElementById("formulario");

  function validar() {
    formu.addEventListener("submit", (e) => e.preventDefault());
    if (
      id !== "" &&
      name !== "" &&
      price !== "" &&
      state !== "" &&
      description !== ""
    ) {
      const obj = {
        id: id,
        name: name,
        price: price,
        state: state,
        description: description,
      };
      console.log("Entro");
      try {
          saveProduct(obj);
          swal(
            "Felicidades",
            "Registro se guardo correctamente",
            "success"
          );
      } catch (error) {
          swal("Lo siento", "Registro no se guardo correctamente", "error");
          throw new error();
      }
      limpiar()
      formu.reset()
    }
  }

  function limpiar(){
      setId("");
      setName("");
      setPrice("");
      setState("");
      setDescription("");
  }

  async function saveProduct(obj) {
    const response = await guardarRegistro(obj);
    console.log(response);
  }

  return (
    <Fragment>
      <Menu></Menu>
      <div className="content">
        <Header></Header>
        <div className="container">
          <Banner text={"Registro de produtos"}></Banner>
          <Form></Form>
        </div>
      </div>
      <div className="card">
        <div className="card-header border-primary">
          <strong className="text-primary">Servicio</strong>
        </div>
        <div className="card-body">
          <form className="needs-validation" id="formulario">
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
                  onChange={({ target: { value } }) => {
                    setId(value);
                  }}
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
                  onChange={({ target: { value } }) => {
                    setName(value);
                  }}
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
                  onChange={({ target: { value } }) => {
                    setPrice(value);
                  }}
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
                  onChange={({ target: { value } }) => {
                    setState(value);
                  }}
                >
                  <option defaultValue=""></option>
                  <option value="1">Disponible</option>
                  <option value="2">No disponible</option>
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
                  onChange={({ target: { value } }) => {
                    setDescription(value);
                  }}
                ></textarea>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="container-fluid text-center">
                <button
                  id="submitForm"
                  type="submit"
                  className="btn btn-primary"
                  onClick={validar}
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
