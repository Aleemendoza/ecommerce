const express = require('express');
const router = express.Router();
const { OrderDetail } = require('../models/index.js');

router.get('/', async (req, res) =>{
  const detallesDeOrdenes = await OrderDetail.findAll();
  res.json(detallesDeOrdenes)
});

router.get('/:id', async (req, res) => {
  const orden = await OrderDetail.findAll({
    where: {
      orderId: req.params.id
    }
  })
  console.log(req.params.id)
  res.send(orden)
});


module.exports = router;
