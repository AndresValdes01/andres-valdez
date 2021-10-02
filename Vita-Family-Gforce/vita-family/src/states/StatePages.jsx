import React from "react";
import logo from './logo.jpeg';
import './estadoStyles.css'

function StatePages() {
  const Mensaje = () => {alert("Los datos de las ventas se han actuliazado correctamente")}
  return(
  <div>
    <img src={logo} className= "imagen"/>
    <h1>Estado de ventas</h1>;
    <p>
	<form >
        <input type="search" id="Bucador" placeholder="Buscar"></input>
        </form>
</p>
<form >
  <button type="submit" onClick={()=>Mensaje()}> Guardar</button>
  	</form>
<div>
	<div id="formato_Principal">
		<table>
			<thead>
				<tr>
					<th>No</th><th>Total</th><th>Identificador</th><th>Cantidad</th><th>Precio Unitario</th>
                    <th>Fecha Venta</th><th>IdCliente</th><th>NombreCliente</th><th>Estado</th><th>Acción</th>
				</tr>
			</thead>
			<tr>
				<td>1</td><td>9000</td><td>V001</td><td>3</td><td>3000</td><td>24/09/2021</td>
                <td>108957432</td><td>Andres Valdes</td><td><select>
					<option>En proceso</option>
					<option >Cancelado</option>
					<option >Entregado</option>
				</select>
			</td>
			<td><button> Editar</button><button>Eliminar</button></td>
			</tr>
			<tr>
				<td>2</td><td>9000</td><td>V002</td><td>3</td><td>3000</td><td>24/09/2021</td>
                <td>108957432</td><td>Samuel Corso</td><td><select>
					<option>En proceso</option>
					<option >Cancelado</option>
					<option >Entregado</option>
				</select>
			</td>
		</tr>
		<td><button> Editar</button><button>Eliminar</button></td>
			<tr>
				<td>3</td><td>9000</td><td>V003</td><td>3</td><td>3000</td><td>24/09/2021</td>
                <td>108957432</td><td>Juan Rodriguez</td><td><select>
					<option>En proceso</option>
					<option >Cancelado</option>
					<option >Entregado</option>
				</select>
			</td>
			<td><button> Editar</button><button>Eliminar</button></td>
			</tr>
			
		</table>
  </div>
  </div>
  </div>

  )
}

export default StatePages