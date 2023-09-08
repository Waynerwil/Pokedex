import React from "react";
import { useParams } from "react-router-dom";


function Detalle() {
    const {patito} = useParams();
    console.log(patito);
    return ( 
        <div>
            <p>Perro</p>
        </div>
     );
}

export default Detalle;