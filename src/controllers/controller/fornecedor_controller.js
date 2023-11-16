const Fornecedor = require('../../class/fornecedor.c');
const { StatusCodes } = require('http-status-codes');
const { Errors } = require('../../shared/Errors');

exports.saveDat = async (req, res) => {
	const fornecedor = new Fornecedor();
	fornecedor.cleanData(req.body);

	if (Errors(res, fornecedor.Errors, StatusCodes.CONFLICT)) return;

	await fornecedor.saveData(fornecedor.fornecedores);

	if (Errors(res, fornecedor.Errors, StatusCodes.CONFLICT)) return;

	return res
		.status(StatusCodes.CREATED)
		.json({
			info: 'forneceodt salvo com sucesso ',
			data: fornecedor.fornecedores,
		});
};
