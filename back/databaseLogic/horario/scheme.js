import pkg from 'sequelize';
const { DataTypes } = pkg;
import sequelize from '../database.js'

const Horario = sequelize.define('horario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_restaurant: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dia: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  hora_inicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  hora_fin: {
    type: DataTypes.TIME,
    allowNull: false
  },
  esta_disponible: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  nro_dia: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
});

export default Horario;