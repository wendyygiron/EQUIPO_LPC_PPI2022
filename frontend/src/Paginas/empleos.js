import React from "react";
import MenuL from '../Componentes/menuL';
import Empleos from "../Componentes/empleos";
import Piedepagina from "../Componentes/piedepagina";


function Empleo  () {
    return (
         <div className="Empleos">
            <MenuL/>
            <Empleos />
            <Piedepagina/>
    
         </div>
    );
}

export default Empleo;