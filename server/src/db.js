const { Sequelize } = require('sequelize');
const CategoryModel = require('./models/Category');
const ProfessionalModel = require('./models/Professional');

require('dotenv').config();

const { DB_CONN } = process.env;

const sequelize = new Sequelize(DB_CONN, {
  logging: false,
  native: false,
});

CategoryModel(sequelize);
ProfessionalModel(sequelize);

const {Professional, Category} = sequelize.models

// Definir relaciones
Professional.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Professional, { foreignKey: 'categoryId' });

module.exports = {
  Category,
  Professional,
  conn: sequelize,
};
