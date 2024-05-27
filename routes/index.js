const express = require('express');
const router = express.Router();
const filmsRoutes = require('./film');
const categoriesRoutes = require('./category');

router.use('/film', filmsRoutes);
router.use('/category', categoriesRoutes);

module.exports = router;