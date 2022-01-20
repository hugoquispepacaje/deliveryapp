import pkg from 'sequelize';
const { DataTypes } = pkg;
import sequelize from '../database.js'

const Usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_restaurant: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre_usuario: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
});

export default Usuario;