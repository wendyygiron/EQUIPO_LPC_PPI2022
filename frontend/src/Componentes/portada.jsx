import React from "react"; 
import logo3jpg from '../Imagenes/logo3.jpg';
import { Link } from 'react-router-dom';
function Portada() {
    return (
        <div className="container"> 
            <div className="row">
               <img src={logo3jpg} alt="logo" className="mx-auto" style={{maxwidth: "500px"}}/>

               <div className="container">
                 <div className="mx-auto">
                    <p className="text-center" style={{color: "#3F669A "}}> <b>Somos una pagina de trabajo que te acpmpaña en todo momento en la búsqueda 
                    del empleo que deseas.</b> </p>
                 </div>
               </div>
               <Link to="/Iniciarsesion">
               <div class="d-grid gap-2 col-6 mx-auto pb-1">
                   <button class="btn btn-primary ccessbtn btn-su" type="button">Inicias Sesión
                   </button>
                </div>
               </Link>
               
               <Link to="/Registrarse">
               <div class="d-grid gap-2 col-6 mx-auto pb-3">
                    <button class="btn btn-primary" type="button">Registrarce</button>
                </div>   
               </Link>
                 
            </div>
          
        </div>
     ); 
}
 export default Portada; 