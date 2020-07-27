const app = require('express').Router();
const { Categories , Product} = require('../models/index.js');

app.get('/', async (req, res) =>{

    const categories = await Categories.findAll();

    res.json(categories)
});


app.get('/:idCategoria', async (req, res) =>{
    const producto = await Product.findAll(
      {
        where:
        {
          categoriaName: req.params.idCategoria
    }})
   res.send(producto)
  });

  app.post('/add', async (req, res) =>{

    const categoria = await Categories.create(req.body);
    const categories = await Categories.findAll()

    res.json(categories)
});



  module.exports = app;
