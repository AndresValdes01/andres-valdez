import React from "react";
import logo from "./Assets/logo.jpeg";
import logoVentas from "./Assets/logoVentas.jpg";
import "./Css/Estilo.css";

function SalesPages() {
  return (
    <div>
      <body id="body">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a id="alink" claclassName="navbar-brand" href="#">Vita Family</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      Registrar Ventas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Registrar Productos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Registro Usuarios
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <h1>Administracion de Ventas</h1>
        </header>

        <section>
          <div id="icono">
            <img src={logoVentas} alt="Ventas" width="250px" />
          </div>
        </section>

        <form>
          <fieldset>
            <legend>Gestion de Ventas</legend>
            <hr id="hrmain" />
            <div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  ID Venta
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Identificador de Venta" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  ID Producto
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Identificador de Producto" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Cantidad
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder=" Numero de Elementos" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Precio Unitario
                </span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder=" Precio Unidad" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Fecha Venta
                </span>
                <input
                  type="date"
                  className="form-control"
                  placeholder=" Fecha de la Venta" />
              </div>
              <h6>Informacion Cliente</h6>
              <hr id="hrinfo" />
              <br />
            </div>
            <div className="divcliente">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Numero Id
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Numero de Identificacion" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Nombre
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Cliente" />
              </div>
            </div>
            <h6>Informacion Vendedor</h6>
            <hr id="hrinfo" />
            <br />
            <div className="divsaler">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Nombre Asesor
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Vendedor o encargado de la venta" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  ID Empleado
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Numero Identificacion Empleado" />
              </div>
              <br />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-success" type="reset">
                Limpiar Reset
              </button>{" "}
              <br />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-dark" type="submit">
                Agregar Informacion
              </button>
            </div>
            <br />
            <br />

            <ul class="nav nav-tabs">
              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal" >
                  Buscar Venta
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true" >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">
                          Realizar una busqueda {/* Pendiente */}
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">Realizar una Accion</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal" >
                          Cerrar
                        </button>
                        <button type="button" class="btn btn-primary">
                          Buscar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Listar
                </a>
              </li>

              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal" >
                  Actualizar Venta
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true" >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Realizar una actualizacion
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">Realizar una Accion</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal" >
                          Cancelar
                        </button>
                        <button type="button" class="btn btn-primary">
                          Actualizar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <br />
          </fieldset>
        </form>

        <footer>
          <div className="card text-center">
            <div className="card-header">Vita Family</div>
            <div className="card-body">
              <h5 className="card-title">Nuestro Proposito</h5>
              <div>
                <img src={logo} className= "imagenVentas"/>
                <p className="card-text">
                  Establecer, organizar y automatizar la información de la
                  empresa, para mejorar la gestión de información sobre el
                  inventario y la facturación, donde el sistema incluirá todos los
                  elementos necesarios para realizar el proceso de manera eficaz y
                  oportuna, que permita conocer datos exactos y coherentes.
                </p>
              </div>
              <a href="#" className="btn btn-success btn1">
                Ir a Inicio
              </a>
            </div>
            <div className="card-footer text-muted">Vita Family</div>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default SalesPages;
