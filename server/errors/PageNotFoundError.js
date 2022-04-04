class PageNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PageNotFound';
    this.message = message || 'Page Not Found';
    this.status = 404;
  }
}

module.exports = PageNotFoundError;
