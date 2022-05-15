const client = require('../db'); // mongodb instance
const { rm } = require('fs/promises');
const path = require('path');
const generateId = require('../utils/generateId');

// img must be a list of objects representing uploaded images
// set unique name for each image by modifying existing array
const setUniqueImageNames = (img) => {
  for (let i of img) {
    i.name = `${Date.now()}-${i.name}`;
    console.log(i.name);
  }
}

const moveImagesToStorage = (img) => {
  let storage;
  try {
    for (let i of img) {
      storage = path.resolve(__dirname, '../static/gallery', i.name);
      i.mv(storage);
    }
  } catch(err) {
    console.log(err);
    return err;
  }
}

const insertImagesToDb = async (img) => {
  let id;
  let path;
  let query;
  const collection = client.db('idol').collection('gallery');
  try {
    for (let i of img) {
      id = await generateId();
      // image path related to 'static' folder
      // which our express app uses as source of static files
      path = `/gallery/${i.name}`;
      query = { _id: id, image: path };
      await collection.insertOne(query);
    }
  } catch(err) {
    console.log(err);
    return err;
  }
}

class GalleryController {
  async uploadImage(req, res, next) {
    // processing: set unique name -> move to storage -> insert to db
    // req.files looks like this:
    // 1 image: { images: {...} }
    // 2+ images: { images: [ {...}, {...} ] }
    try {
      let { images } = req.files;
      // by default we expect multiple images (an array of objects)
      // in case of a single uploaded image we add it to array
      if (!Array.isArray(images)) {
        images = [images];
      }
      // process array of uploaded image(s)
      setUniqueImageNames(images);
      moveImagesToStorage(images);
      insertImagesToDb(images);
      // response in case of success
      res.json({ message: 'Image(s) uploaded successfully' });
    } catch(err) {
      // in case of any error send error status 500
      res.sendStatus(500);
      // and pass error to error handling middleware
      next(err);
    }
  }

  async deleteImage(req, res, next) {
    try {
      // get images id from hidden input
      const imageid = req.body.imageid;

      // find and delete image from database
      const collection = client.db('idol').collection('gallery');
      const query = { _id: imageid };
      const image = await collection.findOne(query);
      const deleteImage = await collection.deleteOne(image);

      // remove image file from storage
      const storage = path.resolve(__dirname, '../static/gallery', image.image);
      const removeImage = await rm(storage);

      res.send(`Deleted successfully: ${image.image}`);
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new GalleryController();
