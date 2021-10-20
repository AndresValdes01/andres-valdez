'use strict'
const Producto = require('../models/producto.model.js')

function getProducto(req, res){
    Producto.find({}, (error, productos)=>{
        //En caso de que haya habido un error
        if(error) return res.status(500).send({
            message: `Error al realiza la consulta de los productos: ${error}`
        });

        //En caso que no haya productos
        if(!productos) return res.status(404).send({
            message: `No hay productos registrados`
        });

        //En caso que todo vaya bien
        res.status(200).send({ productos });
    })
}

function registrarProducto(req, res){
    console.log( req .body );

    const dataProducto = new Producto( req .body );     //  Agrego la data al modelo
    const productoInsertado = dataProducto .save();     //  Inserto la data a la base de datos

    if( ! productoInsertado ) return res.json({
        error: {
            mensaje: `No se pudo registrar`
        }
    });

    res.json({
        mensaje: `Se pudo registrar`,
        producto: req .body
    });


    //Primero buscamos el producto en la abse de datos
    // Producto.findOne({id: req.body.id}, (err, productoEnBaseDeDatos)=>{
    //     if(!productoEnBaseDeDatos){
    //         //Si no se encuentra el producto, se guarda
    //         let productoTemp = {
    //             id: req.body.id,
    //             Descripcion: req.body.Descripcion,
    //             preciounidad: req.body.preciounidad,
    //             cantidad: req.body.cantidad,
    //             estado: req.body.estado,               
    //         }
        
    //         let productoARegistrar = new Producto(productoTemp);
        
    //         productoARegistrar.save((error, productoRegistrado)=>{
    //             if(!error){
    //                 res.status(200).send({
    //                     message: 'Producto registrado',
    //                     productoRegistrado
    //                 })
    //             }else{
    //                 res.status(500).send({
    //                     message: `Error al guardar nuevo producto en la base de datos: ${err}`
    //                 });
    //             }
    //         })

            
    //     }else{
    //         //Si se encuentra el producto sacamos un error
    //         res.status(202).send({
    //             message: `El producto con ID ${req.body.id} ya se encuentra registrado`
    //         })
    //     }
    // });

}

const updateProducto = async ( request, response ) => {

    const idProducto = request .params .producto_id;
    const productoActualizar = request .body;

    try {
        // Consulta si el producto existe
        const productoEncontrado = await Producto .find({ _id: idProducto });

        // Verifico si NO ENCONTRO el producto
        if( ! productoEncontrado ) return response.json({
            error: {
                mensaje: `El producto no se encuentra registrado`
            }
        });

        // Consulta para actualizar producto
        const productoActualizado = await Producto .findByIdAndUpdate({ _id: idProducto }, productoActualizar, { new: true } );
        productoActualizado .save();            // Inserto cambios a la base de datos

        response .json({
            mensaje: `Producto actualizado`,
            producto: productoActualizado
        });

    } catch (error) {
        console.log( `Se produjo un error` );
        response .json({
            error: {
                mensaje: `Se produjo un error`
            }
        });
    }

}

const deleteProducto = async ( request, response ) => {
    const idProducto = request .params .producto_id;

    try {

        // Consulta si el producto existe
        const productoEncontrado = await Producto .findById( idProducto );

        // Verifico si NO ENCONTRO el producto
        if( ! productoEncontrado ) return response.json({
            error: {
                mensaje: `El producto no se encuentra registrado`
            }
        });

        const productoEliminado = await Producto .findByIdAndRemove( idProducto );
        productoEliminado .save();              // Eliminar de la base de datos

        response .json({
            mensaje: `Elimino registro`
        });

    } catch (error) {
        console.log( `Se produjo un error` );
        response .json({
            error: {
                mensaje: `Se produjo un error`
            }
        });
    }

}

module.exports = {
    getProducto,
    registrarProducto,
    updateProducto,
    deleteProducto
}