import Validator from 'validatorjs';
import { messageValidator } from '../../utiles/globals.js';

const validateUdpateRestaurant = (req, res, next) => {
  let restaurant = {};
  req.body.nombre && (restaurant.nombre = req.body.nombre);
  req.body.url_logo && (restaurant.url_logo = req.body.url_logo);
  req.body.telefono && (restaurant.telefono = req.body.telefono);
  req.body.whatsapp && (restaurant.whatsapp = req.body.whatsapp);
  req.body.mensaje_wsp && (restaurant.mensaje_wsp = req.body.mensaje_wsp);
  req.body.correo && (restaurant.correo = req.body.correo);
  req.body.direccion && (restaurant.direccion = req.body.direccion);
  req.body.longitud && (restaurant.longitud = req.body.longitud);
  req.body.latitud && (restaurant.latitud = req.body.latitud);
  req.body.valor_delivery && (restaurant.valor_delivery = req.body.valor_delivery);

  let rules = {
    nombre: 'max:45|string',
    url_logo: 'max:250|url',
    telefono: 'max:45|string',
    whatsapp: 'max:45|string',
    mensaje_wsp: 'max:250|string',
    correo: 'max:45|email',
    direccion: 'max:45|string',
    longitud: 'numeric',
    latitud: 'numeric',
    valor_delivery: 'required|min:0|numeric',
  };
  let validation = new Validator(restaurant, rules, messageValidator);
  if (validation.passes()) {
    req.restaurantValidated = restaurant;
    next();
  } else {
    let errors = validation.errors.all();
    res.status(400).json({ 'error': errors });
  }
}

export {
  validateUdpateRestaurant
}