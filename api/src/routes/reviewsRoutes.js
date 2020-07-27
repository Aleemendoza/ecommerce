const express = require('express');
const router = express.Router();
const { Reviews } = require('../models/index.js');

router.post('/:id/review', (req, res) => {
  // const title = req.body.title;
  const description = req.body.description;
  const rate = req.body.rate;
  const productId = req.params.id;
  const userId = req.body.UserId;
  Reviews.create({
    // title,
    description: description,
    rate: rate
  })
    .then(newReview => {
      newReview.setProduct(productId);
      newReview.setUser(userId);
    })
    .then( async () => {
      const reviews = await Reviews.findAll({
        where: {
          productId: req.params.id,
        },
        order: [['id', 'DESC']]
      })
     
      res.send(reviews);
    })
    .catch(err => res.status(500).send(err));
});







router.get('/:id/review', (req, res) => {
  Reviews.findAll({
    where: {
      productId: req.params.id,
    },
    order: [['id', 'DESC']]
  }).then(reviews => {
    res.send(reviews);
  });
});

router.put('/:id/review', (req, res) => {
  const id = req.params.id;

  Reviews.update(req.body, {
    where: {
      productId: id,
    },
    returning: true,
  })
    .then(response => {
      const review = response[1][0];
      return review;
    })
    .then(review => res.send(review))
    .catch(err => res.send(err.message));
});

router.delete('/:id/review', (req, res) => {
  const id = req.params.id;
  Reviews.destroy({
    where: {
      productId: id
    },
  })
    .then(deletedReview => {
      res.json(deletedReview);
    })
    .catch(res.send);
});

module.exports = router;
