import Validator from 'validatorjs';
import { messageValidator } from '../../utiles/globals.js';

const validateUdpatePassword = (req, res, next) => {
  let user = {
    id: req.params.id,
    password: req.body.password
  }
  let rules = {
    id: 'required|numeric',
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

export {
  validateUdpatePassword
}