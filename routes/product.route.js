const express = require('express');
const router = express.Router();

const product_controller = require('../cotrollers/product.controller');

router.get('/test', product_controller.test);
router.get('/:id', product_controller.product_details);
router.post('/create', product_controller.product_create);

module.exports = router;