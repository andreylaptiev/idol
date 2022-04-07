const express = require("express");
const router = express.Router();
const galleryController = require('../../controllers/galleryController');

// list all images
router.get('/', (req, res) => {
  res.send('Admin -> Gallery');
});

// upload new image
router.post('/upload', galleryController.uploadImage);

// delete existing image
router.post('/delete', galleryController.deleteImage);

module.exports = router;
