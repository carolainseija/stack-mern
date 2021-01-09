import React, {props} from 'react';
import './footer.css';
export const Footer = ( props)=> {
    return(
        <div id={props.id} className="container-footer">
            <h1>Contactate</h1>

            <p></p>
            <ul >
                <li > <a className="instagram  text-decoration-none text-white text-decorations-none" href="#">Instagram</a> </li>
            </ul>
            <h1>{props.h1}</h1>

        </div> 
    )
} 