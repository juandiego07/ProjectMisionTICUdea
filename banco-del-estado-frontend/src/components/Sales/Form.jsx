import React, { Fragment, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { saveData, getData, updateItem, getItem } from "../../Firebase";
import swal from "sweetalert";
// updateItem
export default function FormSales() {
  const [productList, setProductList] = useState([]);
  // const [indexP, setIndexP] = useState(0);
  const [idRef, setIdRef] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [idDoc, setIdDoc] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [idSeller, setIdSeller] = useState("");
  const [total, setTotal] = useState("");
  const [description, setDescription] = useState("");

  // const [price, setPrice] = useState("");

  const comeBack = useHistory();
  const action = useParams();

  useEffect(() => {
    const dataLoad = async () => {
      const tempList = await getData("products");
      setProductList(tempList);
    };
    dataLoad();
  },[]);

  useEffect(() => {
    const dataLoad = async () => {
      if (action.id !== "create") {
        getUpdate(action.id);
        setIdRef("");
        setDate("");
        setName("");
        setIdDoc("");
        setProduct("");
        setPrice("");
        setIdSeller("");
        setTotal("");
        setDescription("");
      }
    };
    dataLoad();
  }, [action.id]);

  const getUpdate = async (id) => {
    try {
      const data = await getItem("sales", id);
      setIdRef(data.idRef);
      setDate(data.date);
      setName(data.name);
      setIdDoc(data.idDoc);
      setProduct(data.product);
      setPrice(data.price);
      setIdSeller(data.idSeller);
      setTotal(data.total);
      setDescription(data.description);
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleSave = async () => {
    const data = {
      idRef: idRef,
      date: date,
      name: name,
      idDoc: idDoc,
      product: product,
      price: price,
      idSeller: idSeller,
      total: total,
      description: description,
    };
    await saveData("sales", data);
    swal("Good job!", "You clicked the button!", "success");
    comeBack.push("/sales");
  };

  const handleUpdate = async () => {
    const data = {
      idRef: idRef,
      date: date,
      name: name,
      idDoc: idDoc,
      product: product,
      price: price,
      idSeller: idSeller,
      total: total,
      description: description,
    };
    await updateItem("sales", action.id, data);
    comeBack.push("/sales");
  };

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
                  Fecha de la venta <span>*</span>
                </label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="form-control"
                  id="date"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Nombre del cliente <span>*</span>
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
                  Documento de identidad <span>*</span>
                </label>
                <input
                  value={idDoc}
                  onChange={(e) => setIdDoc(e.target.value)}
                  type="number"
                  className="form-control"
                  id="idDoc"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Producto <span>*</span>
                </label>
                <div className="d-flex">
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="form-select"
                    aria-label="Default select example"
                    id="producto"
                    autoComplete="off"
                    required
                  >
                    <option defaultValue></option>
                    {productList.map((data, index) => {
                      return (
                        <option key={index} value={data.name}>
                          {data.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Precio unitario <span>*</span>
                </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  className="form-control"
                  id="preciounitario"
                  autoComplete="off"
                  required
                  // disabled
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Identificador del vendedor <span>*</span>
                </label>
                <input
                  value={idSeller}
                  onChange={(e) => setIdSeller(e.target.value)}
                  type="text"
                  className="form-control"
                  id="idVendedor"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Valor total venta <span>*</span>
                </label>
                <input
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  type="number"
                  className="form-control"
                  id="totalVenta"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  id="descripcion"
                  rows="3"
                ></textarea>
              </div>
              <div className="container-fluid text-center">
                <button
                  onClick={action.id === "create" ? handleSave : handleUpdate}
                  type="button"
                  className="btn btn-primary mx-2"
                >
                  {action.id === "create" ? "Guardar" : "Actualizar"}
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
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
