import React from "react";
import { Link } from 'react-router-dom';

function EditarPerfil() {
    return (
        <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
            <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    
                       
                    <span className="font-weight-bold">Edogaru</span>
                    <span className="text-black-50">edogaru@mail.com.my</span>
                    <span> </span>
                </div>
            </div>
            <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">Perfil</h4>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6"><label className="labels">Nombre</label><input type="text" className="form-control" placeholder="first name" value="" />""</div>
                        <div className="col-md-6"><label className="labels">Apellidos</label><input type="text" className="form-control" value="" placeholder="surname" /></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <label className="labels">
                                Sobre mí
                            </label>
                            <input type="text" className="form-control" placeholder="enter phone number" value="" />""
                        </div>
                        <div className="col-md-12"><label className="labels">Contacto</label><input type="text" className="form-control" placeholder="enter address line 1" value="" />""</div>
                        <div className="col-md-12"><label className="labels">Experiencia laboral</label><input type="text" className="form-control" placeholder="enter address line 2" value="" />""</div>
                        <div className="col-md-12"><label className="labels">Estudios</label><input type="text" className="form-control" placeholder="enter address line 2" value="" />""</div>
                        <div className="col-md-12"><label className="labels">Idioma</label><input type="text" className="form-control" placeholder="enter address line 2" value="" />""</div>
                        <div className="col-md-12"><label className="labels">Habilidades</label><input type="text" className="form-control" placeholder="enter address line 2" value="" />""</div>
                        <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="enter email id" value="" />""</div>
                        <div className="col-md-12"><label className="labels">Referencia laboral</label><input type="text" className="form-control" placeholder="education" value="" />""</div>
                    </div>
                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Crear perfil</button></div>
                </div>
            </div>

        </div>
    </div>
    );
  }
  export default EditarPerfil; 