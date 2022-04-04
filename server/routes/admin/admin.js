const express = require('express');
const router = express.Router();
const articlesRouter = require('./articlesRouter');
const galleryRouter = require('./galleryRouter');
const productsRouter = require('./productsRouter');
const PageNotFoundError = require('../../errors/PageNotFoundError');

router.use('/articles', articlesRouter);
router.use('/gallery', galleryRouter);
router.use('/products', productsRouter);

router.get('/', (req, res) => {
  res.send('Admin page');
});

// throw error 404 if we go to any route except
// 'admin/' or any of specified higher
// next(err) skips all hanlers in the chain
// to the last middleware which is error handler
router.all(/^(?!articles|gallery|products).*/, (req, res, next) => {
  next(new PageNotFoundError());
});

module.exports = router;
