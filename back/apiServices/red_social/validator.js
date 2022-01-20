import Validator from 'validatorjs';
import { messageValidator } from '../../utiles/globals.js';

const validateUdpateSocialNetwork = (req, res, next) => {
  let socialNetwork = {};
  req.body.nombre && (socialNetwork.nombre = req.body.nombre);
  req.body.icono && (socialNetwork.icono = req.body.icono);
  req.body.url && (socialNetwork.url = req.body.url);
  req.body.esta_disponible && (socialNetwork.esta_disponible = req.body.esta_disponible);
  let rules = {
    nombre: 'max:45|string',
    icono: 'max:45|string',
    url: 'max:250|url',
    esta_disponible: 'boolean',
  };
  let validation = new Validator(socialNetwork, rules, messageValidator);
  if (validation.passes()) {
    req.socialNetworkValidated = socialNetwork;
    next();
  } else {
    let errors = validation.errors.all();
    res.status(400).json({ 'error': errors });
  }
}

export {
  validateUdpateSocialNetwork
}