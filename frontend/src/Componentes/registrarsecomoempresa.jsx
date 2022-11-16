import React from "react";
import logo3 from '../Imagenes/logo3.jpg';



function Registrarse() {
    return (
        <div className="container">
            <div className="row">
                <div className="tex-center mx-auto py-4">
                    <img src={logo3} alt="logo" className="mx-auto" style={{ maxWidth: "450px" }} />
                    <h1> <b>Registra tu empresa</b></h1>
                    <p> </p>
                </div>

            </div>

            <div className="container pb-3">
                <div className="mx-auto" style={{ maxWidth: "500px" }}>

                    <form action="perfilcomercial" method="get">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label"> <b>Nombre y apellidos</b></label>
                            <input type="email" class="form-control" id="inputEmail4"placeholder=""/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label"> <b>Telefono</b></label>
                            <input type="password" class="form-control" id="inputPassword4"placeholder=""/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label"> <b>E-mail</b></label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="ejemplo@correo.com"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label"> <b>Contraseña</b></label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Ingrse una contraseña"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label"> <b>Nombre comercial de la empresa</b></label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
                        </div>
                        <div class="col-md-6">
                            <label for="input" class="form-label"> <b>Razón social en DIAN</b></label>
                            <input type="text" class="form-control" id="input"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label"> <b>Ciudadd</b></label>
                            <input type="text" class="form-control" id="inputCity" placeholder="Medellín"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label"> <b>NIT de la empresa</b></label>
                            <input type="text" class="form-control" id="inputCity" placeholder="Medellín"/>
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label"> <b>Departamento</b></label>
                            <select id="inputState" class="form-select">
                                <option selected>seleccione</option>
                                <option>Antioquía</option>
                                <option>Atlantico</option>
                                <option>Bolívar</option>
                                <option>Boyacá</option>
                                <option>Caldas</option>
                                <option>Chocó</option>
                                <option>Guaviare</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label"> <b>Dirección</b></label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Cll 00 # 00 - 00"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label"> <b>Descripción</b></label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Descrición de la empresa (decribe solo la empresa)"/>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Registrase</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Registrarse;