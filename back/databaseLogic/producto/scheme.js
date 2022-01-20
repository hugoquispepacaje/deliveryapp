import pkg from 'sequelize';
const { DataTypes } = pkg;
import sequelize from '../database.js'

const Product = sequelize.define('producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_categoria: {
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
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  url_imagen: {
    type: DataTypes.TEXT('tiny'),
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true
});

export default Product;