require('dotenv').config();
const express = require('express');
const mongodb = require('./db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin/admin');
const errorMiddleware = require('./middleware/errorMiddleware');

const HOST = process.env.HOST || localhost;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

// routing
app.use('/admin', adminRouter);
app.use('/users', usersRouter);

// error handling middleware
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongodb.connect();

    app.listen(PORT, () => {
      console.log(`Server running on http://${HOST}:${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
}

start();
