const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/addInventory' , productController.addInventory );
router.post('/add' , productController.addProduct);

module.exports = router;