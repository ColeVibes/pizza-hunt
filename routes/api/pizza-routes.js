const router = require('express').Router();

const { getAllPizza, getPizzaById, createPizza, updatePizza, deletePizza } = require('../../controllers/pizza-controller');
const { updateMany } = require('../../models/pizza');

//get and post setup 

router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

module.exports = router;