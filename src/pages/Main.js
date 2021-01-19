import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./style.css";

export const Main = () => {
  //estado del render condicional
  const [login, setLogin] = useState(false);
  const [inputValue, setInputValue] = useState("");


const handleInputChange = (e)=> {
  e.preventDefault();
  setInputValue(e.target.value);
  console.log(inputValue)
  
}

const keyPress= (e)=> {
 
  if (e.key === "Enter") {
    console.log("presiono enter")

    
   return true;

  } else {
    return false;
  }

}

  return (
    <div>{login ? <p>Tu estas loguead@</p> : <p>No estas Loguead@</p>}
    

    <input onKeyPress={keyPress}  placeholder="escribe tu nombre"  className="input"  onChange={handleInputChange} ></input>

   <div className="onchange">
   <h3>tu dices:</h3>
   {inputValue}
   
   </div>
    </div>
  );
};
