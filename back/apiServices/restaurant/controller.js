import * as Restaurant from '../../databaseLogic/restaurant/logic.js';

const udpateRestaurant = async (req, res) => {
  try {
    let restaurant = req.restaurantValidated;
    let response = await Restaurant.updateOne(req.params.id, restaurant);
    res.status(200).json({ 'exito': response[0] > 0 ? true : false });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const findRestaurant = async (req, res) => {
  try {
    let response = await Restaurant.findOneForID(req.params.id);
    res.status(200).json({ 'restaurant': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const findRestaurantComplete = async (req, res) => {
  try {
    let response = await Restaurant.findOneForIDCompplete(req.params.id);
    res.status(200).json({ 'restaurant': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}
export {
  udpateRestaurant,
  findRestaurant,
  findRestaurantComplete
};