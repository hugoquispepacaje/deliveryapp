import Horario from './scheme.js';

const findOneForID = async (id) => {
  let response = await Horario.findByPk(id);
  return response;
}

const findForRestaurant = async (id) => {
  let response = await Horario.findAll({ where: { 'id_restaurant': id } });
  return response;
}

const updateOne = async (id, data) => {
  let response = await Horario.update(
    data,
    {
      where: {
        id
      }
    }
  );
  return response;
}

export {
  findOneForID,
  updateOne,
  findForRestaurant
}