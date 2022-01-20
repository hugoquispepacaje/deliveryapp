import Validator from 'validatorjs';
import { messageValidator } from '../../utiles/globals.js';

const validateLogin = (req, res, next) => {
  let user = {
    username: req.body.username,
    password: req.body.password
  }
  let rules = {
    username: 'required|max:45|string',
    password: 'required|max:45|string',
  };
  let validation = new Validator(user, rules, messageValidator);
  if (validation.passes()) {
    req.userValidated = user;
    next();
  } else {
    let errors = validation.errors.all();
    res.status(400).json({ 'error': errors });
  }
}

const validateRecoverPassword = (req, res, next) => {
  let user = {
    username: req.body.username,
  }
  let rules = {
    username: 'required|max:45|string',
  };
  let validation = new Validator(user, rules, messageValidator);
  if (validation.passes()) {
    req.userValidated = user;
    next();
  } else {
    let errors = validation.errors.all();
    res.status(400).json({ 'error': errors });
  }
}

const validateChangePassword = (req, res, next) => {
  let toValidate = {
    password: req.body.password
  }
  let rules = {
    password: 'required|max:45|string',
  };
  let validation = new Validator(toValidate, rules, messageValidator);
  if (validation.passes()) {
    req.password = toValidate.password;
    next();
  } else {
    let errors = validation.errors.all();
    res.status(400).json({ 'error': errors });
  }
}

export {
  validateLogin,
  validateRecoverPassword,
  validateChangePassword
}