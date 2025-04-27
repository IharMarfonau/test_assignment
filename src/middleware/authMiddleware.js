const tokenService = require('../services/tokenService');

module.exports = function (req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401)
      .json({ message: 'You do not have permission to perform this operation.' });
  }

  try {
    req.decodedToken = tokenService.decodeToken(token);
    next();
  } catch (error) {
    return res.status(403).json({ message: error.message });
  }
};
