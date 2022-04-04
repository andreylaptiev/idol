const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const PageNotFoundError = require('../errors/PageNotFoundError');

// GET and POST methods are handled in a single method
router.use('/auth', UsersController.checkAuth);
router.use('/login', UsersController.login);
router.use('/signup', UsersController.signup);

// throw error 404 if we are going to any route except
// 'users/login' or 'users/signup'
router.all(/^(?!login|signup).*/, (req, res, next) => {
  next(new PageNotFoundError());
});

module.exports = router;
