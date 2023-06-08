const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/singUp', userController.singUP);
router.get('/singIn' , userController.signIN);

router.post('/create' , userController.createBuisness);
router.post('/create-session' , userController.createSession);

module.exports = router;