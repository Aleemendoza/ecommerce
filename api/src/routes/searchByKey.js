const app = require('express').Router();
const { Product} = require('../models/index.js');
const { Op } = require("sequelize");
const { Order } = require('../models/index.js');

app.get('/:keyboard', async (req, res) =>{

  const producto = await Product.findAll(
    {
      where:
      {

        name: {
            [Op.iLike]: '%' + `${req.params.keyboard}` + '%'
          },
           stock :
            {
              [Op.gt]: 0
            } 

  }
})


 res.send(producto)


});

app.get('/', async (req, res) =>{
  const ordenes = await Order.findAll(
    {order: [['id', 'ASC']]}
  );
  res.json(ordenes)
});


module.exports = app;
