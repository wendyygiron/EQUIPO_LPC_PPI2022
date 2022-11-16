import React from "react";
import MenuL from "../Componentes/menuL";
import Registrarse from "../Componentes/registrarse";
import Piedepagina from "../Componentes/piedepagina";

function menuL() {
    return (
         <div className="Inicio">
            <MenuL />
            <Registrarse/>
             <Piedepagina/>
            
         </div>
    );
}

export default menuL;