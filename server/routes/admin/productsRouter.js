const express = require("express");
const router = express.Router();

// list of all products
// 'add product' button
router.get('/', (req, res) => {
  res.send('Admin -> Products');
});

// get empty form to add new product
router.get('/add-product',);

// send filled form to add new product
router.post('/add-product',);

module.exports = router;
