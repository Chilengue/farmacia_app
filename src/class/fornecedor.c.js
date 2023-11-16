const fornecedor = require('../models/outher/fornecedor');
const validator = require('validator');

class Fornecedor {
	constructor() {
		this.fornecedores;
		this.Errors = new Array();
	}
	cleanData(body) {
		this.fornecedores = this.isVailid(body);
	}

	isVailid(data) {
		for (const key in data) {
			if (validator.isEmpty(data[key])) data[key] = '';
			if (key == 'companyName') {
				if (!validator.isLength(data[key], { min: 2, max: 100 }))
					this.Errors.push('o nome d empresa deve ter 2 catacteres');
			}
			if (key == 'email' && data[key]) {
				if (!validator.isEmail(data[key]))
					this.Errors.push('formato do email do cliente invalido!!!');
			}

			if (key == 'phoneNumber') {
				if (
					!validator.isLength(data[key], { min: 9, max: 14 }) &&
					!isNaN(data[key])
				)
					this.Errors.push('número de telefone do cliente Invalido!!!');
			}

			if (key == 'address') {
				if (!validator.isLength(data[key], { min: 4, max: 30 }))
					this.Errors.push(
						'endereço do cliente deve conter no minímo 5 caracteres!!!',
					);
			}
		}
	}

	async saveData(obj) {
		try {
			await fornecedor.create(obj);
		} catch (error) {
			this.Errors.push('Erro ao salvar o fornecedor');
			if (error.parent) this.Errors.push(error.parent.sqlMessage);
		}
	}
	async updataData(olData, newData) {
		try {
			return await fornecedor.update(newData, {
				where: olData,
			});
		} catch (error) {
			this.Errors.push('Erro ao actualizar os dados do fornecedor');
			if (error.parent) this.Errors.push(error.parent.sqlMessage);
		}
	}
}

module.exports=Fornecedor;