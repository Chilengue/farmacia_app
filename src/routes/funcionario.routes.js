const {Router}=require('express');
const {controllers}=require('../controllers/main');
const route =Router();

// route.get('/show', controllers.funcionario.showOne);
// route.get('/showOne', controllers.funcionario.showOne);
//route.put('/updated', controllers.funcionario.update);
route.post('/save', controllers.funcionario.saveData);

module.exports=route;