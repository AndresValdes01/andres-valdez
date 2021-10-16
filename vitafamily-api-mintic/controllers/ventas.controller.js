const VentaCtrl = {};
const Ventas = require('../models/ventas.model');

VentaCtrl.getVentas = (req, res) => {

    Ventas.find(function (err, ventas) {        
        console.log(ventas);
        if(err) return res.status(500).send({
            message: `Error al realiza la consula de las ventas: ${err}`
        });
        //En caso que no haya productos
        if(!ventas) return res.status(404).send({
            message: `No hay ventas registradas`
        });
        //En caso que todo vaya bien
        res.status(200).send({ ventas });
    });
}

VentaCtrl.registrarVenta = (req, res) => {
    
    console.log(req.body);    
    Ventas.findOne({ID_Producto: req.body.ID_Producto}, (err, ventasEnBaseDeDatos)=>{
        if(!ventasEnBaseDeDatos){
            
            let ventasTemp = {
                ID_Venta : req.body.ID_Venta,
                ID_Producto: req.body.ID_Producto,
                Cantidad: req.body.Cantidad,
                Precio_Unitario: req.body.Precio_Unitario,                
                Valor_Total: req.body.Valor_Total,          
                Fecha_Venta: req.body.Fecha_Venta,                
                ID_Cliente: req.body.ID_Cliente,                
                Nom_Cliente: req.body.Nom_Cliente,                
                Nom_Vendedor: req.body.Nom_Vendedor,                
                ID_Vendedor: req.body.ID_Vendedor,                
                Estado_Venta: req.body.Estado_Venta                
            }
            let ventaARegistrar = new Ventas(ventasTemp);
       
            ventaARegistrar.save((err, ventaRegistrada)=>{
                if(!err){
                    res.status(200).send({
                        message: 'Venta registrada Exitosamente',
                        ventaRegistrada
                    })
                }else{
                    res.status(500).send({
                        message: `Error al guardar nueva venta en la base de datos: ${err}`
                    });
                }
            })            
        } else {
            //Si se encuenra el venta sacamos un error
            res.status(400).send({
                message: `La venta con codigo ${req.body.ID_Producto} ya se encuentra registrada`
            })
        }
    });
}
VentaCtrl.updateVenta = (req, res) => {
    res.send("El dato ha sido Actualizado con peticion Put");
}
VentaCtrl.deleteVenta = (req, res) => {
    res.send("El dato ha sido Eliminado con Delete");
}

module.exports = VentaCtrl;