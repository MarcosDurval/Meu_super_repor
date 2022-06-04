module.exports = async (req, res, next) => {
  req.log = {
    dateTime: Date.now(),
    url: req.url,
    method: req.method,
    // eslint-disable-next-line no-underscore-dangle
    user: req.ip || req._remoteAddress,
  };

  return next();
};