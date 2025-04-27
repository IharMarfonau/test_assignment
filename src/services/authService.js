const bcrypt = require('bcryptjs');
const tokenService = require('./tokenService');
const userService = require('./userService');


exports.login = async (email, password) => {
  const user = await userService.findUser(email);
  if (!user) {
    throw new Error('Incorrect email or password');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Incorrect email or password');
  }

  return tokenService.createToken(email);
};

exports.logout = async (email) => {
  const user = await userService.findUser(email);
  if (!user) {
    throw new Error('Incorrect email or password');
  }

  // some activities
  // ...
};
