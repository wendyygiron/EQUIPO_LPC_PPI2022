import React from "react";
import logo3 from '../Imagenes/logo3.jpg';


function Perfil() {
    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img src={logo3} className="rounded-circle mt-5" atl="..." style={{ maxWidth: "150px" }} />

                        <span className="font-weight-bold">Edogaru</span>
                        <span className="text-black-50">edogaru@mail.com.my</span>
                        <span> </span>
                    </div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Publicar oferta de empleo</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">Titulo de la oferta de trabajo</label><input type="text" className="form-control" placeholder="first name" value="" />""</div>
                            <div className="col-md-6"><label className="labels">Descripción de empleo</label><input type="text" className="form-control" value="" placeholder="surname" /></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <label className="labels">
                                    Cuidada
                                </label>
                                <input type="text" className="form-control" placeholder="enter phone number" value="" />""
                            </div>
                            <div className="col-md-12"><label className="labels">Área</label><input type="text" className="form-control" placeholder="enter address line 1" value="" />""</div>
                            <div className="col-md-12"><label className="labels">Experiencia mínima</label><input type="text" className="form-control" placeholder="enter address line 2" value="" />""</div>
                            <div className="col-md-12"><label className="labels">Tipo de contacto</label><input type="text" className="form-control" placeholder="enter address line 2" value="" />""</div>
                            <div className="col-md-12"><label className="labels">Sectores</label><input type="text" className="form-control" placeholder="enter address line 2" value="" />""</div>
                            <div className="col-md-12"><label className="labels">Experiencia mínima</label><input type="text" className="form-control" placeholder="enter address line 2" value="" />""</div>
                            <div className="col-md-12"><label className="labels">Tipo de contrato</label><input type="text" className="form-control" placeholder="enter email id" value="" />""</div>
                            <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education" value="" />""</div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value="" />""</div>
                            <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="" placeholder="state" /></div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                        <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" value="" />""</div> <br />
                        <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value="" />""</div>

                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Perfil;