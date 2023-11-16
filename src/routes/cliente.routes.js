const { Router } = require('express');
const { controllers } = require('../controllers/main');
const route = Router();

// route.get('/show',controllers.cliente.showOne);
// route.get('/showOne',controllers.cliente.showOne);
// route.put('/updated',controllers.cliente.update);
route.post('/save',controllers.cliente.saveData);

module.exports = route;