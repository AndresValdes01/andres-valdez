import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyle.css"

function Navbar(props) {
  let Logout = props.Logout;
  return (
  <nav className="barra">
    
    <Link to = "/login" className= "links" >Log-out</Link>
    <Link to = "/gestionventas" className="links">Gestion de Ventas</Link>
    <Link to = "/estadoventas" className="links">Estado de Ventas</Link>
    <Link to = "/productos" className ="links">Gestion de productos</Link>
    <Link to = "/usuarios" className="links">Gestion de usuarios</Link>

    
  </nav>
  
  )
}

export default Navbar;
