import React from "react";
import Registrarsecomoempresa from "../Componentes/registrarsecomoempresa";
import Solomenu from "../Componentes/solomenu";
import Piedepagina from "../Componentes/piedepagina";

function Registrarsecomo() {
    return (
         <div className="Inicio">
            <Solomenu />
            <Registrarsecomoempresa/>
             <Piedepagina/>
            
         </div>
    );
}

export default Registrarsecomo;