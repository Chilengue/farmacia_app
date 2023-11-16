const { StatusCodes } = require('http-status-codes');
const Funcionario = require('../../class/funcionario.C');
const { Errors } = require('../../shared/Errors');

exports.saveData = async (req, res) => {
	const funcinario = new Funcionario();
	funcinario.cleanData(req.body);

	if (Errors(res, funcinario.Errors, StatusCodes.CONFLICT)) return;
	await funcinario.saveData(funcinario.funcinarios);

	if (Errors(res, funcinario.Errors, StatusCodes.CONFLICT)) return;

	return res
		.status(StatusCodes.CREATED)
		.json({
			info: 'funionario save with sucess',
			data: funcinario.funcinarios,
		});
};
