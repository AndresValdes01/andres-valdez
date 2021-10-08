import React from 'react';
import logo from './logo.jpeg'
import './usuariosStyles.css'

const Mensaje = () => {
    alert("Usuario Creado exitosamente");
}

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
            <button type="submit" onClick={()=>Mensaje()}> Crear usuario</button>
            <button type="reset"> Cancelar</button>
        </form>
        </div>
        <div>
        <form className = "fusers">
        <input type="search" id="Bucador" placeholder="Buscar usuario"/>
        <button>Buscar</button>
        </form>
        
        <table className="tabla">
            <tr class="fila">
                <th className = "th-users">Usuario ID</th>
                <th className = "th-users">Email</th>
                <th className = "th-users">Rol de usuario</th>
                <th className = "th-users">Estado</th>
            </tr>
            <tr class="fila">
                <td className="td-users">Miguel Giraldo</td>
                <td className="td-users">giraldomiguel19@gmail.com</td>
                <td className="td-users">
                    <select>
                        <option>Pendiente</option>
                        <option >Vendedor</option>
                        <option >Administrador</option>
                    </select>
                </td>
                <td className="td-users">
                    <select>
                        <option>Pendiente</option>
                        <option >Autorizado</option>
                        <option >No autorizado</option>
                    </select>
                </td>
                <td className="td-users"><button> Eliminar</button><button>Actualizar</button></td>

            </tr>
            <tr class="fila">
                <td className="td-users">Pedro Perez</td>
                <td className="td-users">Pedroperez@gmail.com</td>
                <td className="td-users">
                    <select>
                        <option>Pendiente</option>
                        <option >Vendedor</option>
                        <option >Administrador</option>
                    </select>
                </td>
                <td className="td-users">
                    <select>
                        <option>Pendiente</option>
                        <option >Autorizado</option>
                        <option >No autorizado</option>
                    </select>
                </td>
                <td className="td-users"><button> Eliminar</button><button>Actualizar</button></td>
            </tr>

        </table>
        </div>

    </section>
    )      
}

export default UsuariosPage