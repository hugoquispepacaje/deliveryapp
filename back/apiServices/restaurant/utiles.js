const isUserBelogingRestaurant = (req, res, next) => {
  if (req.params.id == req.decodedUser.id_restaurant) {
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