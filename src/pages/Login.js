import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TheNav } from "../components/TheNav";
import "./style.css";
import {useHistory} from 'react-router-dom';
import { Summer } from "../components/catalogue/Summer/summer";
import { Footer } from "../components/footer/Footer";



export const Login = () => {

  //Estado del Login
 const [login,setLogin] = useState(false);

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

  <div className="mt-5">

    <h2 className="text-center fs-1 mt-5 mb-5">CATALOGO 2021!!</h2>


    

<Summer />
  </div> 

<Footer />

    </div>
  );
};
