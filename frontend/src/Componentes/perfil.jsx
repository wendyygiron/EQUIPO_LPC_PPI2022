import React from "react";
import { Link } from 'react-router-dom';
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';



function Perfil() {
    return (
        <div className="perfil pt-4">
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                        className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                    <h5 className="my-3">Nombre</h5>
                                    <p className="text-muted mb-1">Ocupación</p>
                                    <p className="text-muted mb-4">Ciudad</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <Link to="/Editarperfil">
                                            <button type="button" className="btn btn-primary">Editar mi perfil</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3">
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <IoLogoTwitter className="fab fa-twitter fa-lg" style={{ color: "#55acee" }} />
                                            <p className="mb-0">@Twitter</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <BsInstagram className="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }} />
                                            <p className="mb-0">@Instargram</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <BsFacebook className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }} />
                                            <p className="mb-0">Facebook</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Nombre completo</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Johnatan Smith</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Correo</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">example@example.com</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Teléfono</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">(604) 578-8343</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Celular</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">(57) 323-000000</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Dirección</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Cll 00 # 00 - 00</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Dirección</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Cll 00 # 00 - 00</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Dirección</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Cll 00 # 00 - 00</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Dirección</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Cll 00 # 00 - 00</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Dirección</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Cll 00 # 00 - 00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default Perfil;