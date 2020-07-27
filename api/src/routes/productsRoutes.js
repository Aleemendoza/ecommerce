const express = require('express');
const router = express.Router();
const categories = require('./models/Categories');

router.get('/', (req , res) => {

    console.log(categories)
    res.send(categories)
} )
module.exports = router;

