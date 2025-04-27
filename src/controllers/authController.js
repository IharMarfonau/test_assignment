const authService = require('../services/authService');
const tokenService = require('../services/tokenService');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("");
    
  }
  try {
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.logout = async (req, res) => {
  const { email } = req.body;
  try {
    await authService.logout(email);
    res.json({ message: 'success' });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.check = async (req, res) => {
  try {
    res.status(200).json(
      { 
        expired: tokenService.isExpired(req.decodedToken) 
      });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};