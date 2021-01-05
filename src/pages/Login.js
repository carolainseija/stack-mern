import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TheNav } from "../components/TheNav";
import "./style.css";
import {useHistory} from 'react-router-dom';


export const Login = () => {


    const history = useHistory();

const seeMore = ()=> {
    return(
            history.push("/Main")
    )
};


  return (
    <div>
      <div className="container-nav">
        <TheNav />
      </div>
      <div className="container-root">
        <h2>BIENVENIDO 2021</h2>
        <div className="container-btn">
          <button onClick={seeMore} className="btn btn-warning col-5">VER CATALOGO</button>
        </div>
      </div>
    </div>
  );
};
