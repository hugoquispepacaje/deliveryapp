import * as Horario from '../../databaseLogic/horario/logic.js';

const updateHorario = async (req, res) => {
  try {
    let horario = req.horarioValidated;
    let response = await Horario.updateOne(req.params.id, horario);
    res.status(200).json({ 'exito': response[0] > 0 ? true : false });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const findHorarioForID = async (req, res) => {
  try {
    let response = await Horario.findOneForID(req.params.id);
    res.status(200).json({ 'exito': true, 'red_social': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const findHorariosForRestaurant = async (req, res) => {
  try {
    let response = await Horario.findForRestaurant(req.params.id_restaurant);
    res.status(200).json({ 'exito': true, 'horarios': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}
export {
  updateHorario,
  findHorarioForID,
  findHorariosForRestaurant
};