import React from "react";
import Solomenu from '../Componentes/solomenu';
import Login from "../Componentes/iniciarsesion";
import Piedepagina from "../Componentes/piedepagina";

function Iniciarsesion () {
    return (
         <div className="Iniciarsesion">
            <Solomenu />
            <Login/>
            <Piedepagina/>
         </div>
    );
}

export default Iniciarsesion;