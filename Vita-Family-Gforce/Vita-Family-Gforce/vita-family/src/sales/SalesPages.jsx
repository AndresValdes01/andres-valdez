import React, { useState } from "react";
import logo from "./Assets/logo.jpeg";
import logoVentas from "./Assets/logoVentas.jpg";
import Swal from 'sweetalert2';
import axios from 'axios';
import "./Css/Estilo.css";

function SalesPages() {  
  
  const [state, setState] = useState([]);  
  const mostrarVentas = async() => {    
    axios.get('http://localhost:3001/api/gestionventas')
      .then(res => {
        const ventas = res.data.ventas;
        setState( ventas );
      });      
  }  

  const [ID_Venta, setID_Venta] = useState(0);   
  const [ID_Producto, setID_Producto] = useState(0);   
  const [Cantidad, setCantidad] = useState(0);   
  const [Precio_Unitario, setPrecio_Unitario] = useState(0);   
  const [Valor_Total, setValor_Total] = useState(0);   
  const [Fecha_Venta, setFecha_Venta] = useState('');   
  const [ID_Cliente, setID_Cliente] = useState(0);   
  const [Nom_Cliente, setNom_Cliente] = useState('');   
  const [Nom_Vendedor, setNom_Vendedor] = useState('');   
  const [ID_Vendedor, setID_Vendedor] = useState(0);   
  const [Estado_Venta, setEstado_Venta] = useState('');  
  
  const registrarVenta = async(e) => {  
    e.preventDefault();                                             
    const NuevaVenta = { ID_Venta, ID_Producto, Cantidad, Precio_Unitario, Valor_Total, Fecha_Venta, 
      ID_Cliente, Nom_Cliente, Nom_Vendedor, ID_Vendedor, Estado_Venta };
    const respuesta = await axios.post('http://localhost:3001/api/gestionventas', NuevaVenta);    
    Swal.fire({
        icon: 'success',
        title: respuesta.data.message,
        showConfirmButton: false,
        timer: 2000
      });
  } 

  return (
    <div>
      <div className="cuerpo">
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
                <input type="number" className="form-control" placeholder="Identificador de Venta" required onChange={e => setID_Venta(e.target.value)} />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  ID Producto
                </span>
                <input type="number" className="form-control" placeholder="Identificador de Producto" required onChange={e => setID_Producto(e.target.value)} />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Cantidad
                </span>
                <input type="number" className="form-control" placeholder=" Numero de Elementos" required onChange={e => setCantidad(e.target.value)} />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Precio Unitario
                </span>
                <input type="number" className="form-control" placeholder=" Precio Unidad" step="any" required onChange={e => setPrecio_Unitario(e.target.value)} />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Fecha Venta
                </span>
                <input type="date" className="form-control" placeholder=" Fecha de la Venta" required onChange={e => setFecha_Venta(e.target.value)} onClick={e => setValor_Total(Cantidad * Precio_Unitario)} />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Valor Total
                </span>
                { Valor_Total > 0 ? <input type="text" className="form-control" readOnly placeholder={Valor_Total} /> : 
                <input type="text" className="form-control" readOnly placeholder=" Precio Total Venta" />
                }                
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
                <input type="number" className="form-control" placeholder="Numero de Identificacion" onChange={e => setID_Cliente(e.target.value)} />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Nombre
                </span>
                <input type="text" className="form-control" placeholder="Nombre del Cliente" onChange={e => setNom_Cliente(e.target.value)} />
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
                <input type="text" className="form-control" placeholder="Nombre del Vendedor o encargado de la venta" onChange={e => setNom_Vendedor(e.target.value)} />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  ID Empleado
                </span>
                <input type="number" className="form-control" placeholder="Numero Identificacion Empleado" onChange={e => setID_Vendedor(e.target.value)} />
              </div>
              <br />
            </div>
            
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-success" type="reset">
                Limpiar Reset
              </button>
              <br />
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#ModalConfirInfo" 
                type="button">
                Agregar Informacion
              </button>
              <div className="modal fade" id="ModalConfirInfo" tabIndex="-1" aria-labelledby="modalConfirmar" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalConfirmar">Confirmacion de los Datos Ingresados</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <label className="labelconf1">Identificador de Venta :&nbsp; </label>                                          
                      <label className="labelconf">{ ID_Venta }</label> <br />                                           
                      <label className="labelconf">Identificador de Produto :</label>
                      <label className="labelconf1">{ ID_Producto }</label> <br /> 
                      <label className="labelconf1">Cantidad :</label>
                      <label className="labelconf">{ Cantidad }</label> <br /> 
                      <label className="labelconf">Precio Unitario :</label>
                      <label className="labelconf1">{ Precio_Unitario }</label> <br /> 
                      <label className="labelconf1">Precio Total :</label>
                      <label className="labelconf">{ Valor_Total }</label> <br /> 
                      <label className="labelconf">Fecha de Venta :</label>
                      <label className="labelconf1">{ Fecha_Venta }</label> <br /> 
                      <label className="labelconf1">Identificador del Cliente :</label>  
                      <label className="labelconf">{ ID_Cliente }</label> <br />                     
                      <label className="labelconf">Nombre del Cliente :</label> 
                      <label className="labelconf1">{ Nom_Cliente }</label> <br />                      
                      <label className="labelconf1">Nombre del Vendedor :</label> 
                      <label className="labelconf">{ Nom_Vendedor }</label> <br />                      
                      <label className="labelconf">Identificador del Vendedor :</label>   
                      <label className="labelconf1">{ ID_Vendedor }</label> <br />                    
                    </div>
                    <select id="select" className="form-select" onChange={e => setEstado_Venta(e.target.value)} >
                      <option defaultValue>Seleccionar el Estado de la venta ...</option>
                      <option value="En Proceso">En Proceso</option>
                      <option value="Cancelada">Cancelada</option>
                      <option value="Entregada">Entregada</option>
                    </select>  
                    <div className="modal-footer" >
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                      <button type="submit" className="btn btn-success" onClick={ registrarVenta } >Guardar Venta</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br /><br />
    
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalBusqueda">
                  Buscar Venta
                </button>
                <div className="modal fade" id="modalBusqueda" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                          <input type="number" className="form-control" placeholder="Identificador de Venta" required />
                        </div>
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="labelSearch">
                            Fecha Venta
                          </span>
                          <input type="date" className="form-control" placeholder="Identificador de Venta" required />
                        </div>
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="labelSearch">
                            ID Cliente
                          </span>
                          <input type="number" className="form-control" placeholder="Identificador Cliente" required />
                        </div>
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="labelSearch">
                            ID Vendedor
                          </span>
                          <input type="number" className="form-control" placeholder="Identificador Vendedor" required />
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
                <button id="btn-listar" type="button" className="btn btn-dark" data-bs-toggle="modal" 
                  data-bs-target="#modalListar" onClick={ mostrarVentas } >
                  Listar datos
                </button>               
                <div className="modal fade" id="modalListar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              <th scope="col">Estado Venta</th>
                            </tr>
                          </thead>
                          { state.map( ventas => 
                            <tbody>
                              <tr className="trList">
                                <th scope="row">{ ventas.ID_Venta }</th>
                                <td>{ ventas.ID_Producto }</td>
                                <td>{ ventas.Cantidad }</td>
                                <td>{ ventas.Precio_Unitario }</td>
                                <td>{ ventas.Valor_Total }</td>
                                <td>{ ventas.Fecha_Venta }</td>
                                <td>{ ventas.ID_Cliente }</td>
                                <td>{ ventas.Nom_Cliente }</td>
                                <td>{ ventas.Nom_Vendedor }</td>
                                <td>{ ventas.ID_Vendedor }</td>
                                <td>{ ventas.Estado_Venta }</td>
                              </tr>  
                            </tbody>  
                          )}                                                    
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalUpdate" required >
                  Actualizar Venta
                </button>
                <div className="modal fade" id="modalUpdate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
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
                          <input type="number" className="form-control" placeholder="Identificador de Venta" required />
                        </div>
                        <select className="form-select" >
                          <option defaultValue>Estado de la venta ...</option>
                          <option value="En Proceso">En Proceso</option>
                          <option value="Cancelada">Cancelada</option>
                          <option value="Entregada">Entregada</option>
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
      </div>
    </div>
  );
}

export default SalesPages;
