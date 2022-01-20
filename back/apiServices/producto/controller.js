import * as Product from '../../databaseLogic/producto/logic.js';

const createProduct = async (req, res) => {
  try {
    let product = req.productValidated;
    await Product.createOne(product);
    res.status(200).json({ 'exito': true });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const updateProduct = async (req, res) => {
  try {
    let product = req.productValidated;
    let response = await Product.updateOne(req.params.id, product);
    res.status(200).json({ 'exito': response[0] > 0 ? true : false });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const findProductForID = async (req, res) => {
  try {
    let response = await Product.findOneForID(req.params.id);
    res.status(200).json({ 'exito': true, 'producto': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const findProductsForCategory = async (req, res) => {
  try {
    let response = await Product.findForCategory(req.params.id_categoria);
    res.status(200).json({ 'exito': true, 'productos': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const findProductsForRestaurant = async (req, res) => {
  try {
    let response = await Product.findForRestaurant(req.params.id_restaurant);
    res.status(200).json({ 'exito': true, 'productos': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const deleteProductForId = async (req, res) => {
  try {
    let response = await Product.deleteOne(req.params.id);
    res.status(200).json({ 'exito': response > 0 ? true : false });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

export {
  createProduct,
  updateProduct,
  findProductForID,
  findProductsForCategory,
  deleteProductForId,
  findProductsForRestaurant
};