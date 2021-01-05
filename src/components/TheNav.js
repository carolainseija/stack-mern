import React from 'react';
//bootstrap4
import 'bootstrap/dist/css/bootstrap.min.css';

export const TheNav = () => {
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
    </div>
  </div>
</nav>
    </div>
)
}