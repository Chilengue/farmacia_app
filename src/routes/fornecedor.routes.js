const  {Router}=require('express');
const { controllers } = require('../controllers/main');
const route = Router();

// route.get('/show', controllers.fornecedor.showData);
// route.get('/showOne',controllers.fornecedor.showOne);
// route.put('/updated',controllers.fornecedor.update);
route.post('/save',controllers.fornecedor.saveDat);

module.exports=route;