const express = require("express");
const router = express.Router();

// list of all images here
router.get('/', (req, res) => {
  res.send('Admin -> Gallery');
});

// upload new image button
router.post('/',);

// delete existing image button
router.delete('/',);

module.exports = router;
