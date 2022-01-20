import Validator from 'validatorjs';
import { messageValidator } from '../../utiles/globals.js';
messageValidator.regex = 'El campo :attribute debe cumplir el patron HH:MM';
const validateUdpateHorario = (req, res, next) => {
  let horario = {};
  req.body.dia && (horario.dia = req.body.dia);
  req.body.nro_dia && (horario.nro_dia = req.body.nro_dia);
  req.body.hora_inicio && (horario.hora_inicio = req.body.hora_inicio);
  req.body.hora_fin && (horario.hora_fin = req.body.hora_fin);
  req.body.esta_disponible && (horario.esta_disponible = req.body.esta_disponible);
  let rules = {
    nombre: 'max:45|string',
    hora_inicio: ['regex:/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/', 'string'],
    hora_fin: ['regex:/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/', 'string'],
    esta_disponible: 'boolean',
  };
  let validation = new Validator(horario, rules, messageValidator);
  if (validation.passes()) {
    req.horarioValidated = horario;
    next();
  } else {
    let errors = validation.errors.all();
    res.status(400).json({ 'error': errors });
  }
}

export {
  validateUdpateHorario
}