import React, { Component } from "react";

import Navbar from '../components/pruebaScroll/Navbar';
import './Prueba.css';



import Section from '../components/pruebaScroll/Section';
import { Footer } from "../components/footer/Footer";



class Prueba extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

       
        <Section
          title="HOME"
          dark={true}
          id="Home"
        />
      
      <Footer
      id="section3"
      h1="HOLAAAAA" />
        <Section
          title="Section 4"
         
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
        
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default Prueba;