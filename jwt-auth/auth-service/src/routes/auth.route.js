const express = require('express');
const router = express.Router();
const { registerController, loginController, validateController } = require('../controllers/auth.controller');
const { authenticateToken } = require('../middlewares/auth.middleware');

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/validate', authenticateToken, validateController);

module.exports = router;
