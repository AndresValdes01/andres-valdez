import React from "react";
import { Link } from "react-router-dom";

function NavbarSales() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a id="alink" claclassName="navbar-brand" href="#">Vita Family</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li id="padNav" className="nav-item navMain">
                            <Link to = "/estadoventas" className="nav-link" aria-current="page" href="#">
                                Estado de Ventas
                            </Link>
                        </li>
                        <li className="nav-item navMain">
                            <Link to = "/gestionventas" className="nav-link" href="#">
                                Gestion de Ventas
                            </Link>
                        </li>
                        <li className="nav-item navMain">
                            <Link to = "/productos" className="nav-link" href="#">
                                Gestion de Productos
                            </Link>
                        </li>
                        <li className="nav-item navMain">
                            <Link to = "/usuarios" className="nav-link" href="#">
                                Gestion de Usuarios
                            </Link>
                        </li>
                        <li className="nav-item navMain">
                            <Link to = "/login" className="nav-link" href="#">
                                Log out
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavbarSales;