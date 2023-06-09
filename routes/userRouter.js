const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

router.get('/singUp', userController.singUP);
router.get('/singIn' , userController.signIN);

router.get('/storeInfo' , userController.storeInfo);
router.post('/businessDetails' , userController.store);

router.post('/create' , userController.createBuisness);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/users/singIn'},
) , userController.createSession);

router.get('/shops/:uniqueId', userController.shop);

router.get('/logout', userController.destroySession);

module.exports = router;