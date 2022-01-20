import pkg from 'sequelize';
const { DataTypes } = pkg;
import sequelize from '../database.js';
import Category from '../categoria/scheme.js';
import Usuario from '../usuario/scheme.js';
import SocialNetwork from '../red_social/scheme.js';
import Horario from '../horario/scheme.js';

const Restaurant = sequelize.define('restaurant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  url_logo: {
    type: DataTypes.TEXT('tiny'),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  whatsapp: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  mensaje_wsp: {
    type: DataTypes.TEXT('tiny'),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  longitud: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false
  },
  latitud: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: false
  },
  valor_delivery: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true
});

Restaurant.hasMany(Category, {
  foreignKey: 'id_restaurant',
  sourceKey: 'id'
});
Category.belongsTo(Restaurant, {
  foreignKey: 'id_restaurant',
  targetKey: 'id'
});
Restaurant.hasMany(Usuario, {
  foreignKey: 'id_restaurant',
  sourceKey: 'id'
});
Usuario.belongsTo(Restaurant, {
  foreignKey: 'id_restaurant',
  targetKey: 'id'
});
Restaurant.hasMany(SocialNetwork, {
  foreignKey: 'id_restaurant',
  sourceKey: 'id'
});
SocialNetwork.belongsTo(Restaurant, {
  foreignKey: 'id_restaurant',
  targetKey: 'id'
});
Restaurant.hasMany(Horario, {
  foreignKey: 'id_restaurant',
  sourceKey: 'id'
});
Horario.belongsTo(Restaurant, {
  foreignKey: 'id_restaurant',
  targetKey: 'id'
});

export default Restaurant;