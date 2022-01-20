import * as Category from '../../databaseLogic/categoria/logic.js';

const createCategory = async (req, res) => {
  try {
    let category = req.categoryValidated;
    let response = await Category.createOne(category);
    res.status(200).json({ 'exito': true });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const updateCategory = async (req, res) => {
  try {
    let category = req.categoryValidated;
    let response = await Category.updateOne(req.params.id, category);
    res.status(200).json({ 'exito': response[0] > 0 ? true : false });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const findCategoryForID = async (req, res) => {
  try {
    let response = await Category.findOneForID(req.params.id);
    res.status(200).json({ 'exito': true, 'categoria': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const findCategoriesForRestaurant = async (req, res) => {
  try {
    let response = await Category.findForRestaurant(req.params.id_restaurant);
    res.status(200).json({ 'exito': true, 'categorias': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const deleteCategoryForId = async (req, res) => {
  try {
    let response = await Category.deleteOne(req.params.id);
    res.status(200).json({ 'exito': response > 0 ? true : false });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

export {
  createCategory,
  updateCategory,
  findCategoryForID,
  findCategoriesForRestaurant,
  deleteCategoryForId,
};