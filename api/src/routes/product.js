const app = require('express').Router();
const { Product } = require('../models/index.js');


app.get('/:id', async (req, res) => {
  const producto = await Product.findOne(
    {
      where:
      {
        id: req.params.id
      }
    })
  res.send(producto)
});

app.post('/add', async (req, res) => {
  const product = await Product.create(req.body);
  const products = await Product.findAll();
  res.json(products)

  // res.json(product)
});
app.put('/:id', async (req, res) => {
  await Product.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  const products = await Product.findAll();
  res.json(products)
});

app.delete('/', async (req, res) =>{
  await Product.destroy({
      where : {
          id: req.body.id
      }
  })
  const products = await Product.findAll();
  res.json(products)
  // res.json({sucess: "se ha eliminado esta categoria"})
});

//Trae todos los productos con o sin Stock
app.get('/', async (req, res) =>{
  const products = await Product.findAll();
  res.json(products)
});

module.exports = app;
