import React from 'react';
import logo from './logo.jpeg'
import './usuariosStyles.css'

function UsuariosPage(){
    const MostrarAlerta = () => {alert("Se registro nuevo usuario exitosamente")}
    return(
    <section>
        <div>
        <img src={logo} className= "imagen"/>
        <h1 className ="h1-users">Crear usuario</h1>
        <form className = "fusers">
            <input className="registro" type="text" placeholder="Usuario Nuevo"/>
            <input className="registro" type="email" placeholder="email"/><br/>
            <input className="registro" type="password" placeholder="Contraseña"/>
            <select name="rol" id="selectorRol" >
                <option >Vendedor</option>
                <option >Administrador</option>
            </select><br/>
            <button type="submit" onClick={()=>MostrarAlerta()}> Crear usuario</button>
            <button type="reset"> Cancelar</button>
        </form>
        </div>
        <div>
        <form className = "fusers">
        <input type="search" id="Bucador" placeholder="Buscar usuario"/>
        <button>Buscar</button>
        </form>
        
        <table id="tabla">
            <tr class="fila">
                <th>Usuario ID</th>
                <th>Email</th>
                <th>Rol de usuario</th>
                <th>Estado</th>
            </tr>
            <tr class="fila">
                <td>Miguel Giraldo</td>
                <td>giraldomiguel19@gmail.com</td>
                <td>
                    <select>
                        <option>Pendiente</option>
                        <option >Vendedor</option>
                        <option >Administrador</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option>Pendiente</option>
                        <option >Autorizado</option>
                        <option >No autorizado</option>
                    </select>
                </td>
                <td><button> Eliminar</button><button>Actualizar</button></td>

            </tr>
            <tr class="fila">
                <td>Pedro Perez</td>
                <td>Pedroperez@gmail.com</td>
                <td>
                    <select>
                        <option>Pendiente</option>
                        <option >Vendedor</option>
                        <option >Administrador</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option>Pendiente</option>
                        <option >Autorizado</option>
                        <option >No autorizado</option>
                    </select>
                </td>
                <td><button> Eliminar</button><button>Actualizar</button></td>
            </tr>

        </table>
        </div>

    </section>
    )      
}

export default UsuariosPage