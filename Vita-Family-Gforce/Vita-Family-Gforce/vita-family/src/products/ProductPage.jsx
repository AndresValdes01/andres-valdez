import React from "react";
import logo from './logo.jpeg';
import "./productsstyle.css";

const Mensaje = () => {
  alert("Producto Guardado correctamente");
}

function ProductPage() {
  return(
  <div>
      <div>
        <img src={logo} className= "logo.jpep" className="imagen"/>
        <h1 className= "h1products">Gestión de productos</h1>
      </div>
      <div>
      <form className = "fusers">
            <input className="registro" type="text" placeholder="Nuevo producto"/>
            <input className="registro" type="number" placeholder="precio unidad"/><br/>
            <input className="registro" type="number" placeholder="cantidad"/>
            <select name="rol" id="selectorRol" >
                <option >Disponible</option>
                <option >No Disponible</option>
            </select><br/>
            <button type="submit" onClick={()=>Mensaje()}>Registrar producto</button>
            <button type="reset"> Cancelar</button>
        </form>
      </div>
    <div>
        <form>
          <input type="search" id="Bucador" placeholder="Buscar"/>
          <input
          type="date"
          className="form-control"
          placeholder=" Fecha del registro" />
        </form>
    </div>
      <table className= "tproducts">
        <thead className ="theadproducts">
          <tr className="trproducts">
            <th className ="thproducts">No</th><th className ="thproducts">Precio unitario</th><th className ="thproducts">id</th><th className ="thproducts">Cantidad</th>
                      <th className ="thproducts">Descripción producto</th><th className ="thproducts"></th><th className ="thproducts">Almacenamiento</th><th className ="thproducts">Acción</th>
          </tr>
        </thead>
        <tr className="trproducts">
          <td className ="tdproducts">1</td><td className ="tdproducts">1000</td><td className ="tdproducts">P001</td><td className ="tdproducts">3</td><td className ="tdproducts">Valeriana gotas</td>
                  <td className ="tdproducts"></td><td className ="tdproducts">
                    <select>
                      <option> Se almacenó correctamente</option>
                      <option>Almacen</option>
                      <option >Bodega</option>
                    </select>
          </td>
            <td className ="tdproducts"><button> Ver producto</button><button>borrar</button><button>Actualizar</button></td>
          </tr>
          <tr className="trproducts">
            <td className ="tdproducts">2</td><td className ="tdproducts">1000</td><td className ="tdproducts">P002</td><td className ="tdproducts">3</td><td className ="tdproducts">Ensure lata x 400gr</td>
            <td className ="tdproducts"></td>
            <td className ="tdproducts">
              <select>
                <option> Se almacenó correctamente</option>
                <option>Almacen</option>
              <option >Bodega</option>
              </select>
            </td>
          <td className ="tdproducts"><button> Ver producto</button><button>borrar</button><button>Actualizar</button></td>

          </tr>
          <tr className="trproducts">
          <td className ="tdproducts">3</td><td className ="tdproducts">1000</td><td className ="tdproducts">P003</td><td className ="tdproducts">3</td><td className ="tdproducts">vitamina D x 2000 ui caja x 30 cap</td>
                  <td className ="tdproducts"></td><td className ="tdproducts">
            <select>
            <option> Se almacenó correctamente</option>
            <option>Almacen</option>
            <option >Bodega</option>
            </select>
        </td>
        <td className ="tdproducts"><button> Ver producto</button><button>borrar</button><button>Actualizar</button>
        </td>
        </tr>
      </table>



			<a href="#" className="btn btn-success btn1"/>
				                                          
											 

  Ir a Inicio

<li class="nav-item">
	<a class="nav-link" href="#">
	  Listar
	</a>
  </li>
  <li class="nav-item">
	<a class="nav-link" href="#">
	  Cerrar
	</a>
  </li>
  </div>
  )
}

export default ProductPage
