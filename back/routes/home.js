import * as controller from '../apiServices/home/controller.js';
import * as validator from '../apiServices/home/validator.js';
import * as jwt from '../utiles/jwt.js';
import express from 'express';
const router = express.Router();

router.post('/login', validator.validateLogin, controller.login);
router.post('/recover_password', validator.validateRecoverPassword, controller.recoverPassword);
router.post('/change_password', jwt.validateRecoveryPasswordToken, validator.validateChangePassword, controller.changePassword);

export default router;