const category = require('./contrroler_categorias');
const cliente = require('./controler_cliente');
const funcionario = require('./funcionario_controller');
const login = require('./llogin_controller');
const fornecedor = require('./fornecedor_controller');

const controllers = {
	categories: { ...category },
	cliente: { ...cliente },
	funcionario: { ...funcionario },
	login: { ...login },
	fornecedor: { ...fornecedor },
};

module.exports = controllers;
