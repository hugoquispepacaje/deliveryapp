import * as Horario from '../../databaseLogic/horario/logic.js';

const isUserBelogingRestaurant = async (req, res, next) => {
  let horario = await Horario.findOneForID(req.params.id);
  if (horario?.id_restaurant == req.decodedUser.id_restaurant) {
    next();
    return
  } else {
    res.status(400).json({ 'exito': false, mensaje: 'No se tienen los permisos.' });
    return
  }
}
export {
  isUserBelogingRestaurant,
};