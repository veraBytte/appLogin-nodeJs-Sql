const express = require('express');

//Import router from express to manage routes
const router = express.Router();

// The constant ping is initialized with the function ping from pingController.
const { ping } = require('../controllers/pingController');
const { home } = require('../controllers/homeController');
const { login } = require('../controllers/loginController');

// Define routes
router.get('/ping', ping);
router.get('/home', home);
router.post('/login', login);

module.exports = router;