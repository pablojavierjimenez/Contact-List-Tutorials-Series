// @ts-nocheck
const { Router } = require('express');
const controller = require('./controllers');

const router = Router();

router
  .get('/', (req, res) => res.send('Welcome'))
  .get('/persons', controller.getPersons)
  .post('/person', controller.createPerson)
  .get('/person/:id', controller.getPerson)
  .put('/person/:id', controller.updatePerson)
  .delete('/person/:id', controller.deletePerson)

module.exports = router;
