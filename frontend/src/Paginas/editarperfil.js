import React from "react";
import MenuL from '../Componentes/menuL';
import EditarPerfil from '../Componentes/editarperfil';
import Piedepagina from '../Componentes/piedepagina';


function Editaperfil () {
    return (
         <div className="Inicio">
            <MenuL/>
            <EditarPerfil /> 
            <Piedepagina /> 
         </div>
    );
}

export default Editaperfil; 