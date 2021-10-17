import React from "react";
import logo from './logo.jpeg';
import "./productsstyle.css";
import axios from 'axios';

class ProductPage extends React.Component{
  state = {
    productos : []
  }

 
  componentDidMount(){
    axios.get('http://localhost:3001/api/productos')
    .then(res=>{
      const Productos = res.data.productos;
      this.setState({Productos});
    })
  }
     registrarProducto(Event){
      Event.preventDefault();
  
      //consumir post con axios
      axios.post('http://localhost:3001/api/productos',{
        ID_producto: Event.target.No.value,  
        Descripcion_producto: Event.target.Descripcion.value,          
        preciounidad: Event.target.preciounidad.value,
        cantidad: Event.target.cantidad.value,
        estado: Event.target.estado.value,


      }).then(res =>{ 
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
      <div>
      <form onSubmit ={this.registrarProducto}className = "fproduct">
            <input name ="No" className="registro" type="text" placeholder="Numero de producto"/>
            <input name ="Descripcion" className="registro" type="text" placeholder="Nuevo producto"/>
            <input name ="preciounidad"className="registro" type="number" placeholder="precio unidad"/><br/>
            <input name="cantidad" className="registro" type="number" placeholder="cantidad"/>
            <select name="estadop" id="selectorRol" name="estado">
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
            <th className ="thproducts">No</th><th className ="thproducts">Precio unitario</th><th className ="thproducts">id</th><th className ="thproducts">Cantidad</th>
                      <th className ="thproducts">Descripción producto</th><th className ="thproducts"></th><th className ="thproducts">Almacenamiento</th><th className ="thproducts">Acción</th>
          </tr>
        </thead>
        {this.state.productos.map(
          producto =>
        <tr className="trproducts">
          <td className ="tdproducts">{producto.No}</td><td className ="tdproducts">{producto.preciounidad}</td><td className ="tdproducts">8</td><td className ="tdproducts">{producto.cantidad}</td><td className ="tdproducts">{producto.Descripcion}</td>
          <td className ="tdproducts">{producto.estado}</td>
          <td className ="tdproducts"><button> Ver producto</button><button>borrar</button><button>Actualizar</button></td>
          </tr>
      )}
           </table>
</div>
  );
}
}

export default ProductPage;
