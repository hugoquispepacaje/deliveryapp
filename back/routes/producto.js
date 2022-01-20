import * as controller from '../apiServices/producto/controller.js';
import * as validator from '../apiServices/producto/validator.js';
import * as jwt from '../utiles/jwt.js';
import { isUserBelogingRestaurant, isUserBelogingRestaurantOnCreate } from '../apiServices/producto/utiles.js';
import express from 'express';
const router = express.Router();

router.post('/', jwt.validateLoginToken, validator.validateCreateProduct, isUserBelogingRestaurantOnCreate, controller.createProduct);
router.delete('/:id', jwt.validateLoginToken, isUserBelogingRestaurant, controller.deleteProductForId);
router.get('/:id', controller.findProductForID);
router.get('/buscar_productos_por_categoria/:id_categoria', controller.findProductsForCategory);
router.get('/buscar_productos_por_restaurant/:id_restaurant', controller.findProductsForRestaurant);
router.put('/:id', jwt.validateLoginToken, isUserBelogingRestaurant, validator.validateUdpateProduct, controller.updateProduct);

export default router;