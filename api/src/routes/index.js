const { Router } = require('express');
// import all routers;
const authRouter = require('./auth.js');
const productRouter = require('./product.js');
const catalogueRouter = require('./catalogue.js');
const searchByKeyRouter = require('./searchByKey.js');
const categoriesRouter = require('./categories.js');
const userRouter = require('./userRoutes');
const orderRouter = require('./orderRoutes.js');
const reviewsRouter = require('./reviewsRoutes');
const orderDetailRouter = require('./orderDetailRoutes')
const homeRouter = require('./homeRoute')

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
router.use('/catalogue', catalogueRouter);
router.use('/product', productRouter);
router.use('/search', searchByKeyRouter);
router.use('/categories', categoriesRouter);
router.use('/user', userRouter);
router.use('/user', orderRouter);
router.use('/product', reviewsRouter);
router.use('/orderdetail', orderDetailRouter);
router.use('/', homeRouter);


module.exports = router;
