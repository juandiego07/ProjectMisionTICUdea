import { Fragment, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { getItem, updateItem } from "../../Firebase";

export default function Form(props) {
  const comeBack = useHistory();
  const action = useParams();

  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [rol, setRol] = useState("");

  useEffect(() => {
    const dataLoad = async () => {
      if (action.id !== "create") {
        getUpdate(action.id);
        setEmail("");
        setState("");
        setRol("");
      }
    };
    dataLoad();
  }, [action.id]);

  const getUpdate = async (id) => {
    try {
      const data = await getItem("listUsers", id);
      setEmail(data.email);
      setState(data.state);
      setRol(data.rol);
    } catch (e) {
      throw new Error(e);
    }
  };

    const handleUpdate = async () => {
      const data = {
        email: email,
        state: state,
        rol: rol,
      };
      await updateItem("listUsers", action.id, data);
      comeBack.push("/users");
    };

  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <div className="card-header border-primary">
            <strong className="text-primary">Usuario</strong>
          </div>
          <div className="card-body">
            <form className="needs-validation">
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label className="form-label">Nombre de usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fieldName"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                    readOnly
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label className="form-label">Correo de registro</label>
                  <input
                    type="email"
                    className="form-control"
                    id="fieldEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                    readOnly
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label className="form-label">
                    Estado <span>*</span>
                  </label>
                  <select
                    className="form-select form-select-md"
                    aria-label=".form-select-md example"
                    id="selectState"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  >
                    <option value="" defaultValue></option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Autorizado">Autorizado</option>
                    <option value="No autorizado">No autorizado</option>
                  </select>
                  <div className="invalid-feedback">Campo obligatorio</div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label className="form-label">
                    Rol <span>*</span>
                  </label>
                  <select
                    className="form-select form-select-md"
                    aria-label=".form-select-md example"
                    id="selectRol"
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                    required
                  >
                    <option defaultValue></option>
                    <option value="Administrador">Administrador</option>
                    <option value="Vendedor">Vendedor</option>
                  </select>
                  <div className="invalid-feedback">Campo obligatorio</div>
                </div>
                <div className="container-fluid text-center">
                  <button
                    id="submitForm"
                    type="button"
                    className="btn btn-primary mx-2"
                    onClick={handleUpdate}
                  >
                    Actualizar
                  </button>
                  <button
                    id="cancel"
                    type="reset"
                    className="btn btn-primary mx-2"
                    onClick={() => comeBack.push("/sales")}
                  >
                    Regresar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
