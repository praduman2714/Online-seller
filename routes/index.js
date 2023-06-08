const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

console.log('Router is loaded');

router.get('/' , homeController.home );
router.use('/users' , require('./userRouter'));

module.exports = router;