import Category from './scheme.js';

const createOne = async (data) => {
  let response = await Category.create(data);
  return response;
}


const findOneForID = async (id) => {
  let response = await Category.findByPk(id);
  return response;
}

const findForRestaurant = async (id) => {
  let response = await Category.findAll({ where: { 'id_restaurant': id } });
  return response;
}

const updateOne = async (id, data) => {
  let response = await Category.update(
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
  let response = await Category.destroy({
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
  findForRestaurant,
  deleteOne
}