const express = require('express');
const productRouter = require('./product.router');
const movieRouter = require('./movie.router');
const categoryRouter = require('./category.router');
const router = express.Router();

// colocar las rutas aquí
router.use(productRouter);
router.use(movieRouter);
router.use(categoryRouter);

module.exports = router;
