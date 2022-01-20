import pkg from 'sequelize';
const { DataTypes } = pkg;
import sequelize from '../database.js'
import Product from '../producto/scheme.js';

const Category = sequelize.define('categoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_restaurant: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT('tiny'),
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true
});

Category.hasMany(Product, {
  foreignKey: 'id_categoria',
  sourceKey: 'id'
});
Product.belongsTo(Category, {
  foreignKey: 'id_categoria',
  targetKey: 'id'
});

export default Category;