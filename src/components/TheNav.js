import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";


export default class TheNav extends Component {


  scrollToTop = () => {
    scroll.scrollToTop();
  };


  render()  {
    return (
      <nav className="nav bg-warning " id="navbar">
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
                offset={-700}
                //ES EL MOVIMIENTO CON QUE SE DESPLAZA
                duration={500}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="catalogo"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Catalogo 2021
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="sale"
                //LE DA EL COLOR AZUL A LA LETRA
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SALE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="marcas"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Marcas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contacto"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>    
      </nav>
    );
  }
}
  


