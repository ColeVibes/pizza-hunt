const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

//adds prefix of /pizzas to routes
router.use('/pizzas', pizzaRoutes);

module.exports = router;