const express = require('express');

//Import router from express to manage routes
const router = express.Router();

// The constant ping is initialized with the function ping from pingController.
const { ping } = require('../controllers/pingController');
const { home } = require('../controllers/homeController');

// Define routes
router.get('/ping', ping);
router.get('/home', home);

module.exports = router;