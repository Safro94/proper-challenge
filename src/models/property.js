const Sequelize = require('sequelize');
const sequelize = require('../db');

const Property = sequelize.define('properties', {
	address: Sequelize.STRING,
	size: Sequelize.STRING,
	rooms: Sequelize.NUMBER,
	utilities: Sequelize.STRING,
	tenantName: Sequelize.STRING,
});

module.exports = Property;
