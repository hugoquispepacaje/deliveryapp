import Validator from 'validatorjs';
import { messageValidator } from '../../utiles/globals.js';

const validateUdpateProduct = (req, res, next) => {
  let product = {};
  req.body.nombre && (product.nombre = req.body.nombre);
  req.body.descripcion && (product.descripcion = req.body.descripcion);
  req.body.precio && (product.precio = req.body.precio);
  req.body.url_imagen && (product.url_imagen = req.body.url_imagen);
  let rules = {
    nombre: 'max:45|string',
    descripcion: 'max:250|string',
    precio: 'min:0|numeric',
    url_imagen: 'max:250|url',
  };
  let validation = new Validator(product, rules, messageValidator);
  if (validation.passes()) {
    req.productValidated = product;
    next();
  } else {
    let errors = validation.errors.all();
    res.status(400).json({ 'error': errors });
  }
}

const validateCreateProduct = (req, res, next) => {
  let product = {
    'id_categoria': req.body.id_categoria,
    'nombre': req.body.nombre,
    'descripcion': req.body.descripcion,
    'precio': req.body.precio,
    'url_imagen': req.body.url_imagen,
  };
  let rules = {
    id_categoria: 'required|numeric',
    nombre: 'required|max:45|string',
    descripcion: 'required|max:250|string',
    precio: 'required|min:0|numeric',
    url_imagen: 'required|max:250|url',
  };
  let validation = new Validator(product, rules, messageValidator);
  if (validation.passes()) {
    req.productValidated = product;
    next();
  } else {
    let errors = validation.errors.all();
    res.status(400).json({ 'error': errors });
  }
}

export {
  validateUdpateProduct,
  validateCreateProduct
}