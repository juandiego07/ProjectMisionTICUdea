import {Fragment, useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router"; // , Redirect
import Menu from "../Layout/Menu";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import Form from "../Sales/Form";
import List from "../Sales/List";
import "../Style.css";
import { UserContext } from "../context/UserContex";
// import Login from "../Login";

export default function Sales(props) {
  const action = useParams();
  const comeBack = useHistory();
  const { userLogged } = useContext(UserContext);
  const [term, setTerm] = useState("");

  const handleSearch = (value) =>  {
      console.log("index", value);
      setTerm(value)
    }
    useEffect(() => {
      if (!userLogged) return comeBack.push("/");
    });



  return (
    <Fragment>
      <Menu isActive={"sales"}></Menu>
      <div className="content">
        <Header onHandleSearch={handleSearch}></Header>
        <div className="container">
          <Banner text={"Ventas"} url={"sales"}></Banner>
          {action.id === undefined ? <List searchTerm={term}></List> : <Form></Form>}
        </div>
      </div>
    </Fragment>
  );
}
