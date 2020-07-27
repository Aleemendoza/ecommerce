const express = require('express');
const router = express.Router();
const { Order } = require('../models/index.js');
const { Product } = require('../models/index.js');
const { OrderDetail } = require('../models/index.js');
const {eliminarObjetosDuplicados} = require( '../funciones')
const {sumarPreciosPorId} = require( '../funciones')
const {contarProductosEnCarritoDeId} = require( '../funciones')





router.post('/:id/order', async (req, res) => {
  const order = await Order.create(
    {
      UserId: req.params.id
  
  }
  );

  var carrito = req.body.carrito
  var duplicadosEliminados = eliminarObjetosDuplicados(carrito, 'id');
  var arrayId = duplicadosEliminados.map(producto => ( producto.id))

    var cantidad = 0
    var subtotal = 0
    for (let i = 0; i < arrayId.length; i++) {
     cantidad = contarProductosEnCarritoDeId(carrito, arrayId[i])
     subtotal = sumarPreciosPorId(carrito, arrayId[i])

     OrderDetail.create({price: subtotal, amount: cantidad, productId: arrayId[i], orderId: order.id})

  }
});


router.get('/:id/order', async (req, res) => {
   const getOrder = await Order.findAll({
     where: {
       UserId: req.params.id,
     },
   })
   res.json(getOrder);
});

router.get('/order/:status', async (req, res) => {
  if(req.params.status=== "Todas"){
    const ordenes = await Order.findAll()
    res.send(ordenes)
  }
  else{
  const getOrderStatus = await Order.findAll({
    where: {
      status: req.params.status
    }
  })
  res.json(getOrderStatus);}
});



router.put('/:id/order/:or', async (req, res) => {
  await Order.update(req.body, {
    where: {
      UserId: req.params.id,
      id: req.params.or
    }
  })
  const ordenes = await Order.findAll(
    {order: [['id', 'ASC']]}
  )
  res.json(ordenes)
});

router.delete('/order/:id', async (req, res) => {
  await Order.destroy( {
    where: {
      id: req.params.id,
    }
  })
  const ordenes = await Order.findAll();
  res.json(ordenes)
});




module.exports = router;
