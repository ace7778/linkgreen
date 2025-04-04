const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// 使用者註冊
router.post('/register', authController.register);

// 使用者登入
router.post('/login', authController.login);

// 密碼重設
router.post('/reset-password', authController.resetPassword);

module.exports = router;
