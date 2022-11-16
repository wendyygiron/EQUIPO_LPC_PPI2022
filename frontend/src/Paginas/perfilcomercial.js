import React from "react";
import Perfilcomercial from "../Componentes/perfilcomercial"
import Solomenu from "../Componentes/solomenu";
import Piedepagina from "../Componentes/piedepagina";

function perfilcomercial() {
    return (
         <div className="Inicio">
            <Solomenu/>
            <Perfilcomercial/>
            <Piedepagina/>
         </div>
    );
}

export default perfilcomercial;