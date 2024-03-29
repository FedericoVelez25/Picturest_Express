
const express = require('express');
const router = express.Router();
const AuthController = require('./auth.controller');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.route('/login').post(jsonParser, AuthController.login);

module.exports = router