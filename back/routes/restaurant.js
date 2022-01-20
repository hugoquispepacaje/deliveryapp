import * as controller from '../apiServices/restaurant/controller.js';
import * as validator from '../apiServices/restaurant/validator.js';
import * as jwt from '../utiles/jwt.js';
import { isUserBelogingRestaurant } from '../apiServices/restaurant/utiles.js';
import express from 'express';
const router = express.Router();

router.get('/:id', controller.findRestaurant);
router.get('/complete/:id', controller.findRestaurantComplete);
router.put('/:id', jwt.validateLoginToken, isUserBelogingRestaurant, validator.validateUdpateRestaurant, controller.udpateRestaurant);

export default router;