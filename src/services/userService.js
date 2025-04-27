const User = require('../models/userModel');

const NAME_SERVICE ='USER_SERVICE';

exports.addUser = async (email, password) => {
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    return newUser;
  } catch (error) {
    console.error(`Error[${NAME_SERVICE}]: ${error.message}`);
    throw new Error(error.message);
  }
};

exports.findUser = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    console.error(`Error[${NAME_SERVICE}]: ${error.message}`);
    throw new Error(error.message);
  }
};
