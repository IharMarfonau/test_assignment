const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authController.login);
router.post('/login', authController.login);
router.post('/logout', authMiddleware, authController.logout);
router.get('/check', authMiddleware, authController.check);

module.exports = router;
