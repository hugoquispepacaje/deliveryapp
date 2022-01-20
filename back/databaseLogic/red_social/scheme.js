import pkg from 'sequelize';
const { DataTypes } = pkg;
import sequelize from '../database.js'

const SocialNetwork = sequelize.define('red_social', {
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
  icono: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  url: {
    type: DataTypes.TEXT('tiny'),
    allowNull: false
  },
  esta_disponible: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
});

export default SocialNetwork;