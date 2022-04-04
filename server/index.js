require('dotenv').config();
const express = require('express');
const mongodb = require('./db');
const cors = require('cors');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin/admin');
const errorHandler = require('./middleware/errorHandler');

const HOST = process.env.HOST || localhost;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

// routing
app.use('/admin', adminRouter);
app.use('/users', usersRouter);

// error handling middleware
app.use(errorHandler);

const start = async () => {
  try {
    await mongodb.connect();

    app.listen(PORT, () => {
      console.log(`Server running on http://${HOST}:${PORT}`);
    });
  } catch (e) {
    console.error(e);
  } finally {
    await mongodb.close();
  }
}

start();
