import React, { useEffect, useState } from 'react';
import { authReq } from '../../../axios/instances';
import Button from '../../../components/common/Button/Button';
import Input from '../../../components/common/Input/Input';
import styles from './AdminGallery.module.css';

const AdminGallery = () => {
  const [images, setImages] = useState();
  // state of 'Save Images' button
  const [disabled, setDisabled] = useState(true);

  // default file input is set to display: none
  // so we need to trigger it
  const triggerInput = (e) => {
    e.preventDefault();
    const imageInput = document.querySelector('#imageInput');
    imageInput.click();
  }

  // enable and disable 'Save Images' button
  // depending on whether images are uploaded
  useEffect(() => {
    images ? setDisabled(false) : setDisabled(true);
  }, [images]);

  const handleSave = async (e) => {
    e.preventDefault();
    const imageFiles = document.querySelector('#imageInput').files;
    const formData = new FormData();
    for (let i = 0; i < imageFiles.length; i++) {
      formData.append('images', imageFiles[i]);
    }
    // send images to server
    await authReq.post('/admin/gallery/upload', formData)
      // we finished using  object URLs for uploaded images
      // so we tell browser not to keep them any longer
      .then(() => images.forEach(el => URL.revokeObjectURL(el)))
      .then(() => setImages(null))
      .catch(err => console.error(err));
  }

  // create uploaded images URLs to preview them
  const previewImages = () => {
    const imageList = [];
    const imageFiles = document.querySelector('#imageInput').files;
    for (let i = 0; i < imageFiles.length; i++) {
      const imageURL = URL.createObjectURL(imageFiles[i]);
      imageList.push(imageURL);
    }
    setImages(imageList);
  }

  // map over URLs of uploaded images and preview them
  const uploadedImages = images?.map(
    (img, i) => <img key={i} src={img} alt='uploaded' />
  );

  return (
    <div className={styles.adminGallery}>
      <section className={styles.uploadSection}>
        {images &&
          <div className={styles.uploadSection__preview}>
            {uploadedImages}
          </div>
        }
        <Input
          accept="image/*"
          id="imageInput"
          name="image"
          type="file"
          multiple
          onChange={previewImages}
        />
        <div className={styles.uploadSection__btns}>
          <Button onClick={triggerInput}>Upload Images</Button>
          <Button
            disabled={disabled}
            id="saveBtn"
            onClick={handleSave}
          >
            Save Images
          </Button>
        </div>
      </section>
    </div>
  );
}

export default AdminGallery;
