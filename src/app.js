const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const fornecedor = require('./routes/fornecedor.routes');
const categorias = require('./routes/categoria.routes');
const cliente = require('./routes/categoria.routes');
const funcionario = require('./routes/funcionario.routes');

class App {
	constructor() {
		this.app = express();
		this.middleware();
		this.routes();
	}

	middleware() {
		this.app.use(helmet());
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	routes() {
		this.app.use('/categorias', categorias);
		this.app.use('/cliente', cliente);
		this.app.use('/funcionario', funcionario);
		this.app.use('/fornecedor', fornecedor);
	}
}

module.exports = new App();
