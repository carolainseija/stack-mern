import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cards } from './cards/Card';
export const Summer = ()=> {
    return(
   <div>
        <div className="d-flex col-12 justify-content-center mb-3">
        <Cards
        prices="400$"
        titleCard="titulos"
        />
        <Cards
        titleCard="jhgjh"
        prices="560$"
         />
          <Cards
        prices="400$"
        titleCard="titulos"
        />
          <Cards
        titleCard="jhgjh"
        prices="560$"
         />
         
    </div>
    <div className="d-flex col-12 justify-content-center mb-3">
        <Cards
        prices="400$"
        titleCard="titulos"
        />
         <Cards
        prices="400$"
        titleCard="titulos"
        />
        <Cards
        titleCard="jhgjh"
        prices="560$"
         />
          <Cards
        titleCard="jhgjh"
        prices="560$"
         />
         
    </div>
    <div className="d-flex col-12 justify-content-center mb-3">
        <Cards
        prices="400$"
        titleCard="titulos"
        />
         <Cards
        prices="400$"
        titleCard="titulos"
        />
        <Cards
        titleCard="jhgjh"
        prices="560$"
         />
          <Cards
        titleCard="jhgjh"
        prices="560$"
         />
         
    </div>
   </div>
    )
}