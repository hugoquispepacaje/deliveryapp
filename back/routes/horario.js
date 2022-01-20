import * as controller from '../apiServices/horario/controller.js';
import * as validator from '../apiServices/horario/validator.js';
import * as jwt from '../utiles/jwt.js';
import { isUserBelogingRestaurant } from '../apiServices/horario/utiles.js';
import express from 'express';
const router = express.Router();

router.get('/:id', controller.findHorarioForID);
router.get('/buscar_horarios_por_restaurant/:id_restaurant', controller.findHorariosForRestaurant);
router.put('/:id', jwt.validateLoginToken, isUserBelogingRestaurant, validator.validateUdpateHorario, controller.updateHorario);

export default router;