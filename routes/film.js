const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/film_controler');
const categoriesController = require('../controllers/category_controller');

router.get('/category', filmsController.getFilmByCategory);
router.get('/:id', filmsController.getFilmById);            
router.get('/', filmsController.getAllFilms);
router.get('/', categoriesController.getAllCategories);

module.exports = router;