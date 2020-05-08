const express = require('express'); 
const router = express.Router();
const ctrlTest = require('../controllers/test.controller');

router.get('/test', ctrlTest.test);

module.exports = router; 
