/* controllers/film_controler.js
const { Film } = require('../models');

class filmController {
    static async create(req, res, next) {
        try {
            const {
                title,
                description,
                releaseYear,
                languageId,
                rentalDuration,
                rentalRate,
                length,
                replacementCost,
                rating,
                lastUpdate,
                specialFeatures,
                fullText
            } = req.body;
            
            const data = await film.create({
                title,
                description,
                releaseYear,
                languageId,
                rentalDuration,
                rentalRate,
                length,
                replacementCost,
                rating,
                lastUpdate,
                specialFeatures,
                fullText
            });
            res.status(201).json(data);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = filmController;

*/

// handle req, res, dan validasi
const model = require('../models');

class Film {
    static async getAllFilms(req, res) {
        try {
            const data = await model.film.findAll();
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            res.json({error});
        }
    }

    static async getFilmById(req, res) {
        try {
            const id = req.params.id
            const data = await model.film.findByPk(id)

            if (!data) {
                res.status(404).json({error})
            } else {
                res.status(200).json(data)
            }
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }

    static async getFilmByCategory(req, res) {
        const categoryName = req.query.search ? req.query.search.toLowerCase() : null;

        if (!categoryName) {
            return res.status(400).json({ error});
        }

        try {
            const data = await model.film.findAll({
                include: [{
                    model: model.category,
                    where: model.sequelize.where(
                        model.sequelize.fn('LOWER', model.sequelize.col('name')),
                        categoryName
                    ),
                    through: { attributes: [] }
                }]
            });

            if (data.length === 0) {
                res.json({error});
            } else {
                res.status(200).json(data)
            }
        } catch (error) {
            console.log(error);
            res.json({ error});
        }
    }
}

module.exports = Film;