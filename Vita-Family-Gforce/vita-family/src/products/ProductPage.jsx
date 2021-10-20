import React from "react";
import logo from './logo.jpeg';
import "./productsstyle.css";
import axios from 'axios';

class ProductPage extends React.Component{
  state = {
    productos : [],
    productoSeleccionado : null
  }


 
  componentDidMount(){
    axios.get('http://localhost:3001/api/productos')
    .then(res=>{
      const productos = res.data.productos;
      this.setState({productos});
    })
  }
     registrarProducto(event){
      event.preventDefault();
  
      //consumir post con axios
      axios.post('http://localhost:3001/api/productos',{
        id: event.target.id.value,  
        Descripcion: event.target.Descripcion.value,          
        preciounidad: event.target.preciounidad.value,
        cantidad: event.target.cantidad.value,
        estado: event.target.estado.value

      }).then(res =>{ 
         alert(res.data.message);
        console.log(res.data);
      })
    
    }

    // Actualizar
    handleActualizar = ( event, id ) => {
      axios.update( `http://localhost:3001/api/productos/${ id }`, {
        descripcion: event.target.Descripcion.value,
        precioUnidad: event.target.preciounidad.value,
        cantidad: event.target.cantidad.value,
        estado: event.target.estado.value
      } ).then(res =>{
        alert(res.data.message);
        console.log(res.data);
     })
    }
  
    render(){
  return(
      <div>
      <div>
        <img src={logo} className= "logo.jpep" className="imagen"/>
        <h1 className= "h1products">Gestión de productos</h1>
      </div>
      <div className ="cont">
      <form onSubmit ={this.registrarProducto} className = "fproduct">
            <input name ="id" className="registro" type="text" placeholder="Numero de producto"/>
            <input name ="Descripcion" className="registro" type="text" placeholder="Nuevo producto"/>
            <input name ="preciounidad" className="registro" type="number" placeholder="precio unidad"/><br/>
            <input name="cantidad" className="registro" type="number" placeholder="cantidad"/>
            <select name="estado" id="selectorRol">
                <option >Disponible</option>
                <option >No Disponible</option>
            </select><br/>
            <button className="bt-product" type="submit" >Registrar producto</button>
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
            <th className ="thproducts">Precio unitario</th>
            <th className ="thproducts">Cantidad</th>
            <th className ="thproducts">Descripción producto</th>
            <th className ="thproducts">estado</th>
            <th className ="thproducts">Acción</th>
          </tr>
        </thead>
        {this.state.productos.map(
          producto =>
        <tr className="trproducts">
          <td className ="tdproducts">{producto.preciounidad}</td>
          <td className ="tdproducts">{producto.cantidad}</td>
          <td className ="tdproducts">{producto.Descripcion}</td>
          <td className ="tdproducts">{producto.estado}</td>
          <td className ="tdproducts"><button>borrar</button><button onClick={ this.handleActualizar( producto._id ) }>Actualizar</button></td>
          </tr>
      )}
           </table>
</div>
  );
}
}

export default ProductPage;
