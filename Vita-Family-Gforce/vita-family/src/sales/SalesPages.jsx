import React from "react";
import logo from "./Assets/logo.jpeg";
import logoVentas from "./Assets/logoVentas.jpg";
import "./Css/Estilo.css";

function SalesPages() {  
  const Mensaje = () => {
    alert("Producto Guardado correctamente");
  }     
  return (
    <div>
      <body id="body">
        <header>          
          <h1 id="titles">Administracion de Ventas</h1>
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
                <input type="number" className="form-control" placeholder="Identificador de Venta" required="true" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  ID Producto
                </span>
                <input type="number" className="form-control" placeholder="Identificador de Producto" required="true" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Cantidad
                </span>
                <input type="number" className="form-control" placeholder=" Numero de Elementos" required="true" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Precio Unitario
                </span>
                <input type="number" className="form-control" placeholder=" Precio Unidad" step="any" required="true" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Valor Total
                </span>
                <input type="text" className="form-control" readOnly="true" placeholder=" Precio Total Venta" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Fecha Venta
                </span>
                <input type="date" className="form-control" placeholder=" Fecha de la Venta" />
              </div>              
              <h6 className="titlesh6">Informacion Cliente</h6>
              <hr id="hrinfo" />
              <br />
            </div>

            <div className="divcliente">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Numero Id
                </span>
                <input type="number" className="form-control" placeholder="Numero de Identificacion" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Nombre
                </span>
                <input type="text" className="form-control" placeholder="Nombre del Cliente" />
              </div>
            </div>
            <h6 className="titlesh6">Informacion Vendedor</h6>
            <hr id="hrinfo" />
            <br />

            <div className="divsaler">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Nombre
                </span>
                <input type="text" className="form-control" placeholder="Nombre del Vendedor o encargado de la venta" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  ID Empleado
                </span>
                <input
                  type="number" className="form-control" placeholder="Numero Identificacion Empleado" />
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
              <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#ModalConfirInfo" 
                type="submit">
                Agregar Informacion
              </button>
              <div className="modal fade" id="ModalConfirInfo" tabindex="-1" aria-labelledby="modalConfirmar" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalConfirmar">Confirmacion de los Datos Ingresados</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <label className="labelconf1">Identificador de Venta :&nbsp; </label>                                          
                      <label className="labelconf"> ... </label> <br />                                           
                      <label className="labelconf">Identificador de Produto :</label>
                      <label className="labelconf1"> ... </label> <br /> 
                      <label className="labelconf1">Cantidad :</label>
                      <label className="labelconf"> ... </label> <br /> 
                      <label className="labelconf">Precio Unitario :</label>
                      <label className="labelconf1"> ... </label> <br /> 
                      <label className="labelconf1">Precio Total :</label>
                      <label className="labelconf"> ... </label> <br /> 
                      <label className="labelconf">Fecha de Venta :</label>
                      <label className="labelconf1"> ... </label> <br /> 
                      <label className="labelconf1">Identificador del Cliente :</label>  
                      <label className="labelconf"> ... </label> <br />                     
                      <label className="labelconf">Nombre del Cliente :</label> 
                      <label className="labelconf1"> ... </label> <br />                      
                      <label className="labelconf1">Nombre del Vendedor :</label> 
                      <label className="labelconf"> ... </label> <br />                      
                      <label className="labelconf">Identificador del Vendedor :</label>   
                      <label className="labelconf1"> ... </label> <br />                    
                    </div>
                    <select id="select" className="form-select" aria-label="Default select example" >
                      <option selected>Seleccionar el Estado de la venta ...</option>
                      <option value="1">En Proceso</option>
                      <option value="2">Cancelada</option>
                      <option value="3">Entregada</option>
                    </select>  
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                      <button type="button" className="btn btn-success" onClick={()=>Mensaje()}>Guardar Venta</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
    
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Buscar Venta
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel1">
                          Realizar una busqueda <br /> (Puede ingresar uno o mas datos)
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                        
                      <div className="modal-body">
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="labelSearch">
                            ID Venta
                          </span>
                          <input type="number" className="form-control" placeholder="Identificador de Venta" required="true" />
                        </div>
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="labelSearch">
                            Fecha Venta
                          </span>
                          <input type="date" className="form-control" placeholder="Identificador de Venta" required="true" />
                        </div>
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="labelSearch">
                            ID Cliente
                          </span>
                          <input type="number" className="form-control" placeholder="Identificador Cliente" required="true" />
                        </div>
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="labelSearch">
                            ID Vendedor
                          </span>
                          <input type="number" className="form-control" placeholder="Identificador Vendedor" required="true" />
                        </div>                                              
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                          Cerrar
                        </button>
                        <button type="button" className="btn btn-success">
                          Buscar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>  
              </li>

              <li className="nav-item">                
                <button id="btn-listar" type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalListar">
                  Listar datos
                </button>               
                <div className="modal fade" id="modalListar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Informacion de Ventas Ingresadas al sistema</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>

                      <div className="modal-body">
                        <table className="table">
                          <thead>
                            <tr id="filaNomCol">
                              <th scope="col">ID Venta</th>
                              <th scope="col">ID Prod.</th>
                              <th scope="col">Cant.</th>
                              <th scope="col">Precio Un.</th>
                              <th scope="col">Total</th>
                              <th scope="col">Fecha</th>
                              <th scope="col">ID Cliente</th>
                              <th scope="col">Nom. Cliente</th>
                              <th scope="col">Nom. Vend.</th>
                              <th scope="col">ID Vend.</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="trList">
                              <th scope="row">001</th>
                              <td>1010</td>
                              <td>3</td>
                              <td>79900</td>
                              <td>239700</td>
                              <td>21/10/20</td>
                              <td>1012180</td>
                              <td>Duvan Zabala</td>
                              <td>Andres Galindo</td>
                              <td>1208</td>
                            </tr>
                            <tr className="trList">
                              <th scope="row">002</th>
                              <td>1011</td>
                              <td>5</td>
                              <td>199900</td>
                              <td>999500</td>
                              <td>19/10/20</td>
                              <td>52250364</td>
                              <td>Maria Alcasa</td>
                              <td>Laura Gomes</td>
                              <td>0085</td>
                            </tr>
                            <tr className="trList">
                              <th scope="row">003</th>
                              <td>1012</td>
                              <td>6</td>
                              <td>19900</td>
                              <td>119400</td>
                              <td>21/10/20</td>
                              <td>1014318</td>
                              <td>Juan Torres</td>
                              <td>Esteban Cortes</td>
                              <td>0128</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalUpdate" required="true">
                  Actualizar Venta
                </button>
                <div className="modal fade" id="modalUpdate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Realizar una Actualizacion <br /> Actualizar Estado de Venta
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="labelSearch">
                            ID Venta
                          </span>
                          <input type="number" className="form-control" placeholder="Identificador de Venta" required="true" />
                        </div>
                        <select className="form-select" aria-label="Default select example" >
                          <option selected>Estado de la venta ...</option>
                          <option value="1">En Proceso</option>
                          <option value="2">Cancelada</option>
                          <option value="3">Entregada</option>
                        </select>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-success">
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

        <footer id="foot">
          <div className="card text-center">
            <div className="card-header">Vita Family</div>
              <div className="card-body">
                <h5 className="card-title">Nuestro Proposito</h5>
                <div id="divpie">
                  <img src={logo} className= "imagenVentas" alt="VitaFamily"/>
                  <p className="card-text">
                    Establecer, organizar y automatizar la información de la empresa, para mejorar la gestión 
                    de información sobre el inventario y la facturación, donde el sistema incluirá todos los
                    elementos necesarios para realizar el proceso de manera eficaz y oportuna, que permita 
                    conocer datos exactos y coherentes.
                  </p>
                </div>
                <a href="#" className="btn btn-success btn1">Ir Arriba</a>
              </div>
            <div className="card-footer text-muted">Vita Family</div>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default SalesPages;
