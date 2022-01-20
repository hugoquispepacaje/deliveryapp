import * as SocialNetwork from '../../databaseLogic/red_social/logic.js';

const isUserBelogingRestaurant = async (req, res, next) => {
  let socialNetwork = await SocialNetwork.findOneForID(req.params.id);
  if (socialNetwork?.id_restaurant == req.decodedUser.id_restaurant) {
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