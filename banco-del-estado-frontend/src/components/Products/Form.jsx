import { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { saveData, getItem, updateItem } from "../../Firebase";
// import {v4 as uuidv4} from "uuid";

export default function Form(props) {
  // const [id, setId] = useState("");
  const [idRef, setIdRef] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");

  const comeBack = useHistory();
  const action = useParams();

  useEffect(() => {
    if (action.id !== "create") {
      getUpdate(action.id);
      setIdRef("");
      setName("");
      setPrice("");
      setState("");
      setDescription("");
    }
  }, [action.id]);

  const getUpdate = async (id) => {
    try {
      const data = await getItem("products", id);
      setIdRef(data.idRef);
      setName(data.name);
      setPrice(data.price);
      setState(data.state);
      setDescription(data.description);
    } catch (e) {
      throw new Error(e)
    }
  };

  async function handleSave() {
    const data = {
      idRef: idRef,
      name: name,
      price: price,
      state: state,
      description: description,
    };
    await saveData("products", data);
    comeBack.push("/products");
  }

  async function handleUpdate() {
        const data = {
          idRef: idRef,
          name: name,
          price: price,
          state: state,
          description: description,
        };
        await updateItem("products", action.id, data);
        comeBack.push("/products");
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
                  value={idRef}
                  onChange={(e) => setIdRef(e.target.value)}
                  type="text"
                  className="form-control"
                  id="id"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Nombre <span>*</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Valor Unitario <span>*</span>
                </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  className="form-control"
                  id="price"
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Estado <span>*</span>
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="form-select"
                  aria-label="Default select example"
                  id="state"
                  required
                >
                  <option defaultValue=""></option>
                  <option value="Disponible">Disponible</option>
                  <option value="No disponible">No disponible</option>
                </select>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Descripción <span>*</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  id="description"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  id="submitForm"
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={action.id === "create" ? handleSave : handleUpdate}
                >
                  {action.id === "create" ? "Guardar" : "Actualizar"}
                </button>
                <button
                  id="cancel"
                  type="reset"
                  className="btn btn-primary mx-2"
                  onClick={() => comeBack.push("/products")}
                >
                  Regresar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
