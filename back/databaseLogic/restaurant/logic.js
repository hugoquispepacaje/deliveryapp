import Restaurant from './scheme.js';
import Category from '../categoria/scheme.js';
import Product from '../producto/scheme.js';
import SocialNetwork from '../red_social/scheme.js';
import Horario from '../horario/scheme.js';

const findOneForID = async (id) => {
  let response = await Restaurant.findByPk(id);
  return response;
}

const updateOne = async (id, data) => {
  let response = await Restaurant.update(
    data,
    {
      where: {
        id
      }
    }
  );
  return response;
}

const findOneForIDCompplete = async (id) => {
  let response = await Restaurant.findByPk(id, {
    include: [{
      model: Category,
      include: Product
    }, {
      model: SocialNetwork
    }, {
      model: Horario
    }]
  });
  return response;
}
export {
  updateOne,
  findOneForID,
  findOneForIDCompplete
}