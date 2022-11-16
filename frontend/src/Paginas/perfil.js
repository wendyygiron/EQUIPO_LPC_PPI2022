import React from "react";
import Perfil from "../Componentes/perfil"
import MenuL from "../Componentes/menuL";
import Piedepagina from "../Componentes/piedepagina";

function Perfiles() {
    return (
         <div className="Inicio">
            <MenuL/>
            <Perfil/>
            <Piedepagina/>
         </div>
    );
}

export default Perfiles;