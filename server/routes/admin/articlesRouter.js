const express = require("express");
const router = express.Router();

// page with list of all articles and 'add' button
router.get('/', (req, res) => {
  res.send('Admin -> Articles');
});

// 'add' button routes here
// empty forms, 'save' and 'clear all' buttons
router.get('/add-article',);

// fill form and save new article
router.post('/add-article',);

// router.put('/update-article',);

module.exports = router;
