import React from "react";
import { Link } from 'react-router-dom';
import logo3 from '../Imagenes/logo3.jpg';
function Login() {
    return (
        <div className="container">
            <div className="row">
                <img src={logo3} alt="logo" className="mx-auto" style={{ maxWidth: "450px" }} />

                <div className="container pb-2" >
                    <div className="mx-auto" style={{ maxWidth: "450px" }}>
                        
                            <div class="card">
                                <div class="card-header">
                                    Iniciar sesión
                                </div>
                                <div class="card-body">
                                    <form action="/Empleos" method="get">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Ususario o correo electrónico</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                                <div id="emailHelp" class="form-text">Escriba o correo electrónico</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Recordar</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                                    </form>
                                </div>
                            </div>
                       
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Login; 