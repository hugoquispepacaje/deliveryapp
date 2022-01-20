import * as controller from '../apiServices/red_social/controller.js';
import * as validator from '../apiServices/red_social/validator.js';
import * as jwt from '../utiles/jwt.js';
import { isUserBelogingRestaurant } from '../apiServices/red_social/utiles.js';
import express from 'express';
const router = express.Router();

router.get('/:id', controller.findSocialNetworkForID);
router.get('/buscar_redes_sociales_por_restaurant/:id_restaurant', controller.findSocialNetworkForRestaurant);
router.put('/:id', jwt.validateLoginToken, isUserBelogingRestaurant, validator.validateUdpateSocialNetwork, controller.udpateSocialNetwork);

export default router;