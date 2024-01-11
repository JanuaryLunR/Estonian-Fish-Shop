const express = require('express');

const controller = require('../controllers/auth');

const router = express.Router();

// TODO JOI Validation
router.post('/registration', controller.register);
router.post('/login', controller.login);
// router.post('/logout', authMiddleware(userRolesArray), controller.logout);
// router.post('/forget', validator.body(EmailBody), controller.forget);
// router.post('/reset', validator.body(PasswordBody), controller.reset);

module.exports = router