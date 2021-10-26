import React, { useState, useEffect } from "react";
import logo from './logo.jpeg';
import "./productsstyle.css";
import axios from 'axios';

// Defino Componente Funcional
const ProductPage = () => {

    // Defino State del Componente
    const [ formData, setFormData ] = useState({
        descripcion: null,
        precio: 0,
        cantidad: 0,
        estado: null
    });
    const [ productos, setProductos ] = useState([]);

    const { descripcion, precio, cantidad, estado } = formData;       //  Desestructura la data del State

    // Hace seguimiento a los cambios del estado de productos
    useEffect( () => {

        const getDataAPI = async () => {
            const response = await fetch( `http://localhost:5000/api/productos` );
            const data = await response.json();

            console.log( data );
            setProductos( data.productos );         // Establece nuevo estado de productos
        }

        getDataAPI();

    }, [] );

    // Agrega un producto nuevo
    const createProduct = async ( producto ) => {
        const response = await fetch( `http://localhost:5000/api/productos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify( producto )
        });

        const data = await response.json();

        console.log( data );
    }

    // Maneja el envio de la data del formulario
    const handleSubmit = ( event ) => {
        event.preventDefault();     // Evita la redireccion

        // Agrega la data a la BD haciendo peticion al API
        createProduct( formData );

        //  Agrega el nuevo registro al estado del componente
        setProductos([
            formData,
            ...productos
        ]);
    }

    // Maneja los cambios en la data de los campos y establece el estado del componente
    const handleChange = ( event ) => {

        // Funcion del State con el que cambiamos el estado del componente
        setFormData({
            ...formData,
            [ event.target.name ]: event.target.value
        })
    }

    return (
        <>
            <div>
                <img src={logo} alt="Logo" className="imagen" />
                <h1 className= "h1products">Gestión de productos</h1>
            </div>
            <div className ="cont">
                <form
                    onSubmit={ handleSubmit }
                    className="fproduct"
                >
                    <div className="form-fields">
                        <div className="form-field">
                            <label htmlFor="descripcion">Descripción</label>
                            <input
                                type="text"
                                placeholder="Nuevo producto"
                                name="descripcion"              //  String/Nombre del campo, con el mismo nombre de la variable que viene de la desestructuracion
                                value={ descripcion }           //  Variable viene de la desestructuracion
                                onChange={ handleChange }       //  Closure/Funcion que actua ante los cambios
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="precio">Precio unitario</label>
                            <input
                                type="number"
                                placeholder="Ej: 400"
                                name="precio"                   //  String/Nombre del campo, con el mismo nombre de la variable que viene de la desestructuracion
                                value={ precio }                //  Variable viene de la desestructuracion
                                onChange={ handleChange }       //  Closure/Funcion que actua ante los cambios
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="cantidad">Cantidad</label>
                            <input
                                type="number"
                                placeholder="cantidad"
                                name="cantidad"                 //  String/Nombre del campo, con el mismo nombre de la variable que viene de la desestructuracion
                                value={ cantidad }              //  Variable viene de la desestructuracion
                                onChange={ handleChange }       //  Closure/Funcion que actua ante los cambios
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="estado">Estado</label>
                            <select
                                name="estado"
                                value={ estado }
                                onChange={ handleChange }
                            >
                                <option value="">Seleccione...</option>
                                <option value="disponible">Disponible</option>
                                <option value="no disponible">No Disponible</option>
                            </select><br/>
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button
                            className="btn btn-submit bt-product"
                            type="submit"
                        >Registrar producto</button>
                        <button
                            className="btn btn-cancel"
                            type="reset"
                        >Cancelar</button>
                    </div>
                </form>
            </div>
            <div className="container">
                {   productos.length <= 0
                        ?   <p>No hay productos en la lista</p>
                        :   <table className= "tproducts">
                                <thead className ="theadproducts">
                                    <tr className="trproducts">
                                    <th className ="thproducts">Precio unitario</th>
                                    <th className ="thproducts">Cantidad</th>
                                    <th className ="thproducts">Descripción producto</th>
                                    <th className ="thproducts">estado</th>
                                    <th className ="thproducts">Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {   productos.map( ( producto, index ) => (
                                        <tr key={ index } className="trproducts">
                                            <td className ="tdproducts">{ producto.precio }</td>
                                            <td className ="tdproducts">{ producto.cantidad }</td>
                                            <td className ="tdproducts">{ producto.descripcion }</td>
                                            <td className ="tdproducts">{ producto.estado }</td>
                                            <td className ="tdproducts"><button>borrar</button><button>Actualizar</button></td>
                                        </tr>)
                                    )}
                                </tbody>
                            </table>
                }
            </div>
        </>
    )
}

export default ProductPage;