import * as Category from '../../databaseLogic/categoria/logic.js';

const isUserBelogingRestaurant = async (req, res, next) => {
  let category = await Category.findOneForID(req.params.id);
  if (category?.id_restaurant == req.decodedUser.id_restaurant) {
    next();
    return
  } else {
    res.status(400).json({ 'exito': false, mensaje: 'No se tienen los permisos.' });
    return
  }
}

const isUserBelogingRestaurantOnCreate = async (req, res, next) => {
  if (req.categoryValidated.id_restaurant == req.decodedUser.id_restaurant) {
    next();
    return
  } else {
    res.status(400).json({ 'exito': false, mensaje: 'No se tienen los permisos.' });
    return
  }
}
export {
  isUserBelogingRestaurant,
  isUserBelogingRestaurantOnCreate
};