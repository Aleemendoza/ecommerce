const express = require('express');
const router = express.Router();
const { User } = require('../models/index.js');

router.get('/', async (req, res) => {
    let users = await User.findAll();
    res.json(users);
})
router.get('/:id', async (req, res) => {
   let users = await User.findByPk(req.params.id)
   res.json(users)
})

router.delete('/:id', async (req, res) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({sucess: "Deleted"})
})

router.post('/add', async (req, res) => {
    let user = await User.create(req.body)
        res.json(user)
});
router.put('/:id', async (req, res) => {
    await User.update(req.body, {
        where: {
            id: req.params.id
        }
     })
     const users = await User.findAll()
     res.json(users);
 });

 router.delete('/', async (req, res) =>{
    await User.destroy({
        where : {
            id: req.body.id
        }
    })
    const users = await User.findAll();
    res.json(users)
    // res.json({sucess: "se ha eliminado esta categoria"})
  });

     module.exports = router
