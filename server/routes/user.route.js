const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/user.controller.js');

router.post('/student/register', registerUser)

module.exports = router;