import React from "react";
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';


function Empleos() {
  return (
    <div className="container pt-5 mt-5">
        <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2" >
          <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Buscar"
            aria-label="Search"/>
            <i className="fas fa-search" aria-hidden="true"></i>
        </form>
      <br />
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">community manager</h5>

          <small>Empresa confidencial</small>
          <br />
          <small className="pagos">  <b>$1.500.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Medellín</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 21 de oct 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Técnico/a aires acondicionados</h5>

          <small>Empresa confidencial</small>
          <br />
          <small className="pagos"> <b>$1 a 1,5 millones</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Medellím</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 26 de nov 2022</small></p>
            </div>
          </div>
          <Link to='/aplica' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Operario Control y Vigilancia</h5>

          <small>Emprea confidencial</small>
          <br />
          <small className="pagos"> <b>$1.000.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 11 de agt 2022</small></p>
            </div>
          </div>
          <Link to='/aplicas' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Técnico mantenimiento - Sector alimentos</h5>

          <small>Tiempos SAS - Medellín, Antioquia</small>
          <br />
          <small className="pagos"> <b>$1.800.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 22 de oct 2022</small></p>
            </div>
          </div>
          <Link to='/trabaja' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Asesor comercial</h5>

          <small>Empresa confidencial</small>
          <br />
          <small className="pagos"> <b>$2.000.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 1 de enero 2022</small></p>
            </div>
          </div>
          <Link to='/trabajar' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Ingeniero cbm vacaciones</h5>

          <small>MASSY ENERGY COLOMBIA S.A.S</small>
          <br />
          <small className="pagos"> <b>$3.500.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 18 de oct 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Auxiliar en enfermeria</h5>

          <small>Pablo tobon uribe</small>
          <br />
          <small className="pagos"> <b>$2.000.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 24 de oct 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Nutricionista</h5>

          <small>Pablo tobon uribe</small>
          <br />
          <small className="pagos"> <b>3.500.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 29 de sep 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Arquitecto</h5>

          <small>HomCenter</small>
          <br />
          <small className="pagos"> <b>4.000.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 2 de oct 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Asesor de ventas</h5>

          <small>Empresa confidencial</small>
          <br />
          <small className="pagos"> <b>1.500.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 01 de oct 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Pulidor</h5>

          <small>EPM</small>
          <br />
          <small className="pagos"> <b>3.000.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 20 de sep 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Oficial de obra blanca</h5>

          <small>Empresa confidencial</small>
          <br />
          <small className="pagos"> <b>4,5 millones</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />medellín</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 22 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title"> Agente call center medellin</h5>

          <small>TELEPERFORMANCE COLOMBIA S.A.S</small>
          <br />
          <small className="pagos"> <b>1 a 1,5 millones</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda cali</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 10 de feb 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Abogado relaciones laborales</h5>

          <small>EMTELCO</small>
          <br />
          <small className="pagos"> <b>2 a 3 millones</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 01 de abr 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Supervisor de ventas call center</h5>

          <small>Colombia ESL</small>
          <br />
          <small className="pagos"> <b>2 a 2,5 millones</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Bogotá</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 10 de 24 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Auxiliar de auditoría</h5>

          <small>Empresa confidencial</small>
          <br />
          <small className="pagos"> <b>2.000.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda cali</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 10 de oct 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Asesor de imagen</h5>

          <small>Empresa confidencial</small>
          <br />
          <small className="pagos"> <b>3.000.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 10 de oct 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Asesor de imagen</h5>

          <small>Empresa confidencial</small>
          <br />
          <small className="pagos"> <b>3.000.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 10 de oct 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Asesor de imagen</h5>

          <small>Empresa confidencial</small>
          <br />
          <small className="pagos"> <b>3.000.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 10 de oct 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">Asesor de imagen</h5>

          <small>Empresa confidencial</small>
          <br />
          <small className="pagos"> <b>3.000.000</b> </small>
          <div className="row">
            <div className="col">
              <small><MdLocationOn />Toda Colombia</small>
            </div>
            <div className="col">
              <p><small><BiTime />Publicado 10 de oct 2022</small></p>
            </div>
          </div>
          <Link to='/aplicarempleo' class="btn btn-primary">Aplicar empleo</Link>
        </div>
      </div>
      
      












    </div>
  );
}
export default Empleos; 