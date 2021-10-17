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
    console.log('POST /api/producto');
    console.log(req.body);

    //Primero buscamos el producto en la abse de datos
    Producto.findOne({ID_producto: req.body.ID_producto}, (err, productoEnBaseDeDatos)=>{
        if(!productoEnBaseDeDatos){
            //Si no se encuentra el producto, se guarda
            let productoTemp = {
                ID_producto: req.body.ID_producto,
                Descripcion_producto : req.body.Descripcion_producto,
                preciounidad: req.body.preciounidad,
                cantidad: req.body.cantidad,
                estado: req.body.estado,
                buscarproducto: req.body.buscarproducto,
                Crearproducto: req.body.Crearproducto,
                registrarproducto: req.body.registrarproducto,
                disponible: req.body.disponible,
                
            }
        
            let productoARegistrar = new Producto(productoTemp);
        
            productoARegistrar.save((error, productoRegistrado)=>{
                if(!error){
                    res.status(200).send({
                        message: 'Producto registrado',
                        productoRegistrado
                    })
                }else{
                    res.status(500).send({
                        message: `Error al guardar nuevo producto en la base de datos: ${err}`
                    });
                }
            })

            
        }else{
            //Si se encuentra el producto sacamos un error
            res.status(202).send({
                message: `El producto con ID_producto ${req.body.ID_producto} ya se encuentra registrado`
            })
        }
    });

}


module.exports = {
    getProducto,
    registrarProducto
}