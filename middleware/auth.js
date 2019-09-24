const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    // 401 not authorized
    return res.status(401).json({ msg: 'No token, authorizaation denied' });
  }

  // verify token
  try {
    // decode token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;

    // Now we can use req.user in any protected routes
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
