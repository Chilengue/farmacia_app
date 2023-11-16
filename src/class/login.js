const validator = require('validator');
const login = require('../models/outher/login');
const bcrypt = require('bcrypt');

class Login {
	constructor() {
		this.logins;
		this.Errors = new Array();
	}
	cleanData(body) {
		this.logins = this.valid(body);
	}
	valid(data) {
		for (const key in data) {
			if (key == 'user_id') {
				if (!validator.isEmpty(data[key])) data[key] = '';
			}
			if (key == 'username') {
				if (!validator.isLength(data[key], { min: 4, max: 30 }))
					this.Errors.push('o usuario deve ter no minimo 4 caracteres');
				data[key] = data[key].toUpperCase();
			}
			if (key == 'passw_active') {
				if (!validator.isLength(data[key])) this.Errors.push('Senha requerida');
				if (!validator.isLength(data[key], { min: 8, max: 30 }))
					this.Errors.push('a senha precisa no minimo 8 caracteres');
				let salt = bcrypt.genSaltSync(10, 'a');
				data[key] = bcrypt.hash(data[key], salt);
			}
			if (key == 'passw_confirm') {
				('Senha requerida');
				if (!validator.isLength(data[key], { min: 8, max: 30 }))
					this.Errors.push('a senha precisa no minimo 8 caracteres');
				let salt = bcrypt.genSaltSync(10, 'a');
				data[key] = bcrypt.hash(data[key], salt);
			}
			if (key == 'text_confirm') {
				if (!validator.isLength(data[key])) this.Errors.push('texto salvo');
			}
		}
	}
	async saveData(obj) {
		try {
			await login.create(obj);
		} catch (error) {
			this.Errors.push('ero ao savlar os dados do login');
			this.Errors.push(error.parent.sqlMessage);
		}
	}
}

module.exports = Login;
