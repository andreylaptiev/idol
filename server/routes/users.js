const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const PageNotFoundError = require('../errors/PageNotFoundError');

// GET and POST methods are handled in a single method
router.use('/login', userController.login);
router.use('/signup', userController.signup);

// throw error 404 if route is not 'users/login' or 'users/signup'
router.all(/^(?!login|signup).*/, (req, res, next) => {
  next(new PageNotFoundError());
});

module.exports = router;
