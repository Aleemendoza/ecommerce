const app = require('express').Router();
const { Product } = require('../models/index.js');
const { Op } = require("sequelize");

app.get('/', async (req, res) =>{
    // Modificar para renderizar todas los usuarios que se encuentren
    // dento de la base de datos
    // Tu código acá:
    const products = await Product.findAll(
      {
        where :
         {
          stock :
          {
            [Op.gt]: 0
          }
      }
    }
    );
    res.json(products)
});
// app.post('/add', async (req, res) =>{
//     const product = await Product.create(req.body);
//     res.json(product)
// });
app.get('/:idCategoria', async (req, res) =>{
  const products = await Product.findAll( {
    where :
     {
      stock :
      {
        [Op.gt]: 0
      }
  }
});
    if(req.params.idCategoria=== "Todos"){
      res.send(products)
    }
    else{
    const producto = await Product.findAll(
      {
        where:
        {   stock :
          {
            [Op.gt]: 0
          } ,
          categoriaName: req.params.idCategoria
    }})
   res.send(producto)
    }
  });
  module.exports = app;
