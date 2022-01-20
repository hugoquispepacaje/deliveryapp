import Product from './scheme.js';
import pkg from 'sequelize';
const { QueryTypes } = pkg;
import sequelize from '../database.js'

const createOne = async (data) => {
  let response = await Product.create(data);
  return response;
}


const findOneForID = async (id) => {
  let response = await Product.findByPk(id);
  return response;
}

const findForCategory = async (id) => {
  let response = await Product.findAll({ where: { 'id_categoria': id } });
  return response;
}

const findForRestaurant = async (id) => {
  let response = await sequelize.query(
    `SELECT producto.* 
      FROM producto inner join categoria 
      WHERE producto.id_categoria = categoria.id and categoria.id_restaurant = ${id}`,
    { type: QueryTypes.SELECT });
  return response;
}

const findItsCategory = async (id) => {
  let response = await sequelize.query(
    `SELECT categoria.* 
      FROM producto inner join categoria 
      WHERE producto.id_categoria = categoria.id and producto.id = ${id}`,
    { type: QueryTypes.SELECT });
  return response;
}

const updateOne = async (id, data) => {
  let response = await Product.update(
    data,
    {
      where: {
        id
      }
    }
  );
  return response;
}

const deleteOne = async (id) => {
  let response = await Product.destroy({
    where: {
      id
    }
  });
  return response;
}

export {
  createOne,
  findOneForID,
  updateOne,
  findForCategory,
  deleteOne,
  findForRestaurant,
  findItsCategory
}