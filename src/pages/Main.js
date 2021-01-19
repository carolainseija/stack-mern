import React, { useState } from "react";
import "./style.css";

export const Main = () => {
  //estado del render condicional
  const [login, setLogin] = useState(false);
  const [inputValue, setInputValue] = useState("");
const handleInputChange = (e)=> {
  setInputValue(e.target.value);
  console.log(inputValue)
}

  return (
    <div>{login ? <p>Tu estas loguead@</p> : <p>No estas Loguead@</p>}
    

    <input  placeholder="escribe tu nombre"  className="input"  onChange={handleInputChange} ></input>
   
    
    </div>
  );
};
