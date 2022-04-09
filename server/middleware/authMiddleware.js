const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    // check request headers for authorization field with token
    if (!req.headers.authorization) {
      res.redirect('/users/login');
      return;
    }

    // get token from request headers
    const token = req.headers.authorization.split(' ')[1]; // Bearer token

    // decode token, get users email and role from it
    // if users role is 'admin' he can pass to admin panel
    // and we go to next middlewate with next() function
    const user = jwt.verify(token, process.env.SECRET_KEY);
    if (user.role === 'admin') {
      next();
    } else {
      throw new Error('Unauthorized');
    }
  } catch(err) {
    next(err);
  } finally {
    return;
  }
}
