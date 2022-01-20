import * as controller from '../apiServices/usuario/controller.js';
import * as validator from '../apiServices/usuario/validator.js';
import express from 'express';
const router = express.Router();

router.put('/actualizar_password/:id', validator.validateUdpatePassword, controller.udpatePassword);

export default router;