const client = require('../db'); // mongodb instance
const { rm } = require('fs/promises');
const path = require('path');

class GalleryController {
  async uploadImage(req, res, next) {
    try {
      // specify unique name for uploaded image and move it to storage
      const { image } = req.files;
      const imageName = `${Date.now()}-${image.name}`;
      const storage = path.resolve(__dirname, '../static/gallery', imageName);
      image.mv(storage);

      // add image to database
      const collection = client.db('idol').collection('gallery');
      const query = { image: imageName };
      const insertImage = await collection.insertOne(query);

      // respond if success
      res.send(`Uploaded successfully: ${imageName}`);
    } catch(err) {
      // pass error to error handling middleware
      next(err);
    }
  }

  async getAllImages() {}

  async deleteImage(req, res, next) {
    try {
      // get images name from hidden input
      const imageName = req.body.imagename;

      // find and delete image from database
      const collection = client.db('idol').collection('gallery');
      const query = { image: imageName };
      const image = await collection.findOne(query);
      const deleteImage = await collection.deleteOne(image);

      // remove image file from storage
      const storage = path.resolve(__dirname, '../static/gallery', imageName);
      const removeImage = await rm(storage);
      
      res.send(`Deleted successfully: ${imageName}`);
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new GalleryController();
