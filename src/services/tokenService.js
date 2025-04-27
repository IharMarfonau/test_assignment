const jwt = require('jsonwebtoken');

exports.createToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

exports.decodeToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

exports.isExpired = (dataToken) => {
  if (!dataToken || !dataToken.exp) {
    throw new Error('Invalid token');
  }

  const currentTime = Math.floor(Date.now() / 1000);

  return dataToken.exp < currentTime;
};
