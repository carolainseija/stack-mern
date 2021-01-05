import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TheNav } from '../components/TheNav';
import './style.css';

export const Login = ()=> {
    return(
        <div>
            <div className="container-nav">
            <TheNav />

            </div >
            <div className="container-root">

            <h2>BIENVENIDOS</h2>

            <div className="container-btn">

            <button className="btn btn-danger col-4">VER MAS</button>
            </div>
            </div>
        </div>
    )
};