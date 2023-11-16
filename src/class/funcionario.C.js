const Funcionarios = require('../models/outher/funcionario');
const validator = require('validator');
const bcrypt = require('bcrypt');

class Funcionario {
	constructor() {
		this.funcionarios;
		this.Errors = new Array();
	}
	cleanData(body) {
		this.funcionarios = this.valid(body);
	}
	valid(data) {
		for (const key in data) {
			if (validator.isEmpty(data[key])) data[key] = '';

			if (key == 'fullName') {
				if (!validator.isLength(data[key], { min: 10, max: 230 }))
					this.Errors.push(
						'nome do cliente deve conter no minímo 5 caracteres!!!',
					);
				data[key] = data[key].toUpperCase();
			}
			if (key == 'biNumber') {
				if (!/(^\d{12}\w$)|(^\d{9}(\w\w)\d{3}$)/.test(data[key]))
					this.Errors.push('é obrigatório passar o nº de BI correto..!');
			}
			if (key == 'birthday' || key == 'contratData') {
				if (!data[key] && !validator.isLength(data[key], { min: 8, max: 10 }))
					this.Errors.push(`digite uma data valida. ex: 02-10-1999 ${key}!!!`);

				let aux = data[key].split('-' || '.' || '/');
				let aux2 = aux.reverse();

				data[key] = aux2.join('-');
			}

			if (key == 'phoneNumber') {
				if (
					!validator.isLength(data[key], { min: 9, max: 14 }) &&
					!isNaN(data[key])
				)
					this.Errors.push('número de telefone do cliente Invalido!!!');
			}

			if (key == 'email' && data[key]) {
				if (!validator.isEmail(data[key]))
					this.Errors.push('formato do email do cliente invalido!!!');
			}

			if (key == 'address') {
				if (!validator.isLength(data[key], { min: 4, max: 30 }))
					this.Errors.push(
						'endereço do cliente deve conter no minímo 5 caracteres!!!',
					);
			}

			if (key == 'passwActive') {
				if (validator.isEmpty(data[key]))
					this.Errors.push('a senha é requerida!');

				if (!validator.isLength(data[key], { min: 8, max: 30 }))
					this.Errors.push('a senha precisa conter no minimo 8 caracteres');

				let salt = bcrypt.genSaltSync(10, 'a');

				data[key] = bcrypt.hash(data[key], salt);
			}

			if (key == 'functions') {
				if (!validator.isLength(data[key], { min: 8, max: 80 }))
					this.Errors.push('O nome da funcao requerida');
			}

			if (key == 'contratData') {
				if (!validator.isLength(data[key]))
					this.Errors.push('digita data do contrato');
			}

			if (key == 'salary') {
				if (!validator.isLength(data[key]))
					this.Errors.push('diga o seu salario');
			}
		}
	}

	async saveData(obj) {
		try {
			await Funcionarios.create(obj);
		} catch (error) {
			console.log(error);
			this.Errors.push('erro ao salvar os dados do funcionarios');
			if (error.parent) this.Errors.push(error.parent.sqlMessage);
		}
	}
	async updatadData(oldData, newData) {
		try {
			return await Funcionarios.update(newData, {
				where: oldData,
			});
		} catch (error) {
			this.Errors.push('Erro ao actulizar os dados do cfuncionario');
			if (error.parent) this.Errors.push(error.parent.sqlMessage);
		}
	}
}
module.exports = Funcionario;
