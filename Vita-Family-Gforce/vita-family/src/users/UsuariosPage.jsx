import React from 'react';
import logo from './logo.jpeg'
import './usuariosStyles.css'
import axios from 'axios';

  class UsuariosPage extends React.Component{
    state = {
      usuarios : []
    }
  
    componentDidMount(){
      axios.get('http://localhost:3001/api/usuarios')
      .then(res=>{
        const usuarios = res.data.usuarios;
        this.setState({usuarios});
      })
    }
    registrarUsuario(event){
        event.preventDefault();
    
        //consumir post con axios
        axios.post('http://localhost:3001/api/usuarios',{
          codigo: event.target.codigo.value,  
          nombre: event.target.nombre.value,          
          email: event.target.email.value,
          rol: event.target.rol.value,
          estado : event.target.estado.value
        }).then(res =>{ 
           alert(res.data.message);
          console.log(res.data);
        })
    
    
      }
    
      render(){
        return (
          <div className="App">           
    <section className ="todo">
        <div>
        <img src={logo} className= "imagen"/>
        <h1 className ="h1-users">Crear usuario</h1>
        <form  onSubmit={this.registrarUsuario} className = "fusers">
            <input className="registro" type="text" placeholder="ID" name = "codigo"/>
            <input className="registro" type="text" placeholder="Nombre" name = "nombre"/>
            <input className="registro" type="email" placeholder="email" name="email"/><br/>
            <select name="rol" className="selectorRol" name="rol">
                <option >Vendedor</option>
                <option >Administrador</option>
            </select>
            <select name="rol" className="selectorRol" name="estado">
                <option >Autorizado</option>
                <option >No Autorizado</option>
            </select><br/>
            <button className="bt-users" type="submit" > Crear usuario</button>
            <button className = "bt-users" type="reset"> Cancelar</button>
        </form>
        </div>
        <div className="conte">
        <form className = "fusers">
        <input type="search" id="Bucador" placeholder="Buscar usuario"/>
        <button>Buscar</button>
        </form>        
        
            
            {this.state.usuarios.map(
                  usuario =>
                <table id="tabla">
                <tr class="fila">
                  <th className ="th-users">Usuario ID</th>
                  <th className ="th-users">Nombre</th>
                  <th className ="th-users">Email</th>
                  <th className ="th-users">Rol de usuario</th>
                  <th className ="th-users">Estado</th>
                  <th className ="th-users">Acción</th>
                </tr>
                <tr class="fila">
                      <td className="td-users">{usuario.codigo}</td>
                      <td className="td-users">{usuario.nombre}</td>
                      <td className="td-users">{usuario.email}</td>
                      <td className="td-users">{usuario.rol}</td>
                      <td className="td-users">{usuario.estado}</td>
                      <td className ="td-users"><button> Eliminar</button><button>Actualizar</button></td>
                </tr>
                    </table>
                  )}

        
        </div>

    </section>
    </div>
         
    );
  }
}

export default UsuariosPage;