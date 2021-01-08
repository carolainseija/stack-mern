import React, {useState, useHistory} from 'react';
//bootstrap4
import 'bootstrap/dist/css/bootstrap.min.css';

export const TheNav = () => {
  //Estado del Login
  const [login,setLogin] = useState(false);

 



return(
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid bg-warning">
  
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav  ml-auto mr-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">INICIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CATALOGO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SALE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACTO</a>
        </li>
      </ul>
    { /*render condicional segun el estado del LOGIN*/}
        <div>
          { login ? <p className="Login">Tu ya estas Subscript@</p> : 
          
          
            <p className="NoLogin">No estas Subscript@ <a  href="#">Subscribirse Ahora</a> </p> 
          
          }
        </div>
    </div>
    

  </div>
</nav>
    </div>
)
}