import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
         
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Home"
                //ES EL COLOR QUE LLEVA
                spy={true}
                smooth={true}
                //ES LA ALTURA DESDE EL NAV
                offset={-80}
                //ES EL MOVIMIENTO CON QUE SE DESPLAZA
                duration={500}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                //LE DA EL COLOR AZUL A LA LETRA
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}





{/*
//esto es el anterior
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
*/}