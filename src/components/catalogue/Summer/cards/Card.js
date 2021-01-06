import {React, props} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';

export const Cards = (props)=> {
   return(
    <div className="Cards col-3">
    <div class="card text-dark" >
<div class="card-header bg-warning text-white text-center"> {props.titleCard} </div>
<div class="card-body">
 <h5 class="card-title">Warning card title</h5>
<div className="container-img"></div>
 <p class="Precios text-dark"> {props.prices} </p>
</div>
</div>
     </div>
   )
}