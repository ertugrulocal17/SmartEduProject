const express = require('express');
const categoryController = require('../controllers/categoryConroller');

const router = express.Router();

router.route('/').post(categoryController.createCategory);

module.exports = router;
