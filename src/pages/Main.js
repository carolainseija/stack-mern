import React, {useState} from 'react';
import './style.css';

export const Main = ()=> {

    //estado del render condicional
   const [login, setLogin] = useState(false);

   



  
    return (
    
     <div>
     { login ? <p>Tu estas loguead@</p> :  <p>No estas Loguead@</p>}
     </div>
    );
    
}