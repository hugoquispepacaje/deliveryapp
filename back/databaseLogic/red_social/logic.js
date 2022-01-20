import SocialNetwork from './scheme.js';

const findOneForID = async (id) => {
  let response = await SocialNetwork.findByPk(id);
  return response;
}

const findForRestaurant = async (id) => {
  let response = await SocialNetwork.findAll({ where: { 'id_restaurant': id } });
  return response;
}

const updateOne = async (id, data) => {
  let response = await SocialNetwork.update(
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