const Sequelize = require('sequelize');

const db = {
	development: {
		dialect: 'sqlite',
		storage: './database.sqlite',
		logging: false,
	},
	production: {
		dialect: 'sqlite',
		storage: './database.production.sqlite',
		logging: false,
	},
};
const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(db[env]);

sequelize
	.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
