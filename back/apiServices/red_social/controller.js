import * as SocialNetwork from '../../databaseLogic/red_social/logic.js';

const udpateSocialNetwork = async (req, res) => {
  try {
    let socialNetwork = req.socialNetworkValidated;
    let response = await SocialNetwork.updateOne(req.params.id, socialNetwork);
    res.status(200).json({ 'exito': response[0] > 0 ? true : false });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const findSocialNetworkForID = async (req, res) => {
  try {
    let response = await SocialNetwork.findOneForID(req.params.id);
    res.status(200).json({ 'exito': true, 'red_social': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const findSocialNetworkForRestaurant = async (req, res) => {
  try {
    let response = await SocialNetwork.findForRestaurant(req.params.id_restaurant);
    res.status(200).json({ 'exito': true, 'redes_sociales': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}
export {
  udpateSocialNetwork,
  findSocialNetworkForID,
  findSocialNetworkForRestaurant
};