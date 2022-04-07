const PageNotFoundError = require('../errors/PageNotFoundError');

module.exports = function(err, req, res, next) {
  if (err instanceof PageNotFoundError) {
    console.error(err.status, err.message);
    console.error(err.stack);
    return res.json({ code: err.status, message: err.message });
  }
  console.error(err.stack);
  return res.send('Unexpected Error!');
}
