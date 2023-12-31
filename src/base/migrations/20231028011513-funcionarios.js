'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('funcionarios', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				unique: true,
				primaryKey: true
			},
			full_name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			bi_number: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			birthday: {
				type: Sequelize.DATE,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					isEmail: true
				}
			},
			phone_number: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			address:  {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			password: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			functions: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			contrat_data: {
				type: Sequelize.DATE,
				allowNull: false
			},
			salary: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			created_at: Sequelize.DATE,
			updated_at: Sequelize.DATE
		});
	},

	async down (queryInterface) {
		await queryInterface.dropTable('funcionarios');
	}
};
