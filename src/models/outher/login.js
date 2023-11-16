let { Sequelize: sequelize, Model } = require('sequelize');
const db = require('../index');

class Login extends Model {
	user_id;
	username;
	passw_confirm;
	passw_active;
	text_confirm;
}

Login.init({
	id: {
		type: sequelize.INTEGER,
		unique: true,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},
	user_id: {
		type: sequelize.INTEGER,
		allowNull: false,
		references: {
			model: 'funcionarios',
			key: 'id',
		},
		onDelete: 'RESTRICT',
		onUpdate: 'CASCADE',
	},
	username: {
		type: sequelize.STRING,
		allowNull: false,
	},
	passw_confirm: {
		type: sequelize.STRING,
		allowNull: false,
	},
	passw_active: {
		type: sequelize.STRING,
		allowNull: false,
	},
	text_confirm: {
		type: sequelize.STRING,
		allowNull: false,
	},
	sequelize: db,
	tableName: 'login',
	underscored: true,
	timestamps: true,
});

module.exports = Login;
