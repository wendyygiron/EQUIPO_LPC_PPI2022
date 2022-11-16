import React from "react"; 
import { Link } from 'react-router-dom';


 function Solomenu() {
     return (
        <div className="header">
            <nav className="navbar navbar-dark bg-dark fixed-top">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/"> 
                <i style={{color: "#4A91AD "}}>
                    <b>WorkVip</b> 
                </i>
                
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" to= "/">Inicio</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Iniciarsesion">Iniciar sesión</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to="Registrarse">Registrarse</Link>
                      </li> 
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Empleos">Empleos</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to="/Registrarsecomoempresa">Registrarse como empresa</Link>
                      </li> 
                    </ul>
                    <div className="container">
              <div className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar empleo" aria-label="Search"/>
                <button className="ccessbtn btn-su" type="submit">Buscar</button>
              </div>
          </div>
                  </div>
                  
                </div>
              </div>
            </nav>
       </div>
     ); 
 }
 export default Solomenu; 