import Validator from 'validatorjs';
import { messageValidator } from '../../utiles/globals.js';

const validateUdpateCategory = (req, res, next) => {
  let category = {};
  req.body.nombre && (category.nombre = req.body.nombre);
  req.body.descripcion && (category.descripcion = req.body.descripcion);
  let rules = {
    nombre: 'max:45|string',
    descripcion: 'max:250|string',
  };
  let validation = new Validator(category, rules, messageValidator);
  if (validation.passes()) {
    req.categoryValidated = category;
    next();
  } else {
    let errors = validation.errors.all();
    res.status(400).json({ 'error': errors });
  }
}

const validateCreateCategory = (req, res, next) => {
  let category = {
    'id_restaurant': req.body.id_restaurant,
    'nombre': req.body.nombre,
    'descripcion': req.body.descripcion
  };
  let rules = {
    id_restaurant: 'required|numeric',
    nombre: 'required|max:45|string',
    descripcion: 'required|max:250|string',
  };
  let validation = new Validator(category, rules, messageValidator);
  if (validation.passes()) {
    req.categoryValidated = category;
    next();
  } else {
    let errors = validation.errors.all();
    res.status(400).json({ 'error': errors });
  }
}

export {
  validateUdpateCategory,
  validateCreateCategory
}