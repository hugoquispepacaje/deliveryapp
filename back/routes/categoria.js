import * as controller from '../apiServices/categoria/controller.js';
import * as validator from '../apiServices/categoria/validator.js';
import * as jwt from '../utiles/jwt.js';
import { isUserBelogingRestaurant, isUserBelogingRestaurantOnCreate } from '../apiServices/categoria/utiles.js';
import express from 'express';
const router = express.Router();

router.post('/', jwt.validateLoginToken, validator.validateCreateCategory, isUserBelogingRestaurantOnCreate, controller.createCategory);
router.delete('/:id', jwt.validateLoginToken, isUserBelogingRestaurant, controller.deleteCategoryForId);
router.get('/:id', controller.findCategoryForID);
router.get('/buscar_categorias_por_restaurant/:id_restaurant', controller.findCategoriesForRestaurant);
router.put('/:id', jwt.validateLoginToken, isUserBelogingRestaurant, validator.validateUdpateCategory, controller.updateCategory);

export default router;