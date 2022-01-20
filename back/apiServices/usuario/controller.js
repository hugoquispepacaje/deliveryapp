import { generateEncryptedString } from '../../utiles/bcrypt.js';
import * as Usuario from '../../databaseLogic/usuario/logic.js';
const udpatePassword = async (req, res) => {
  try {
    let user = req.userValidated;
    let password = await generateEncryptedString(user.password);
    let response = await Usuario.updateOne(user.id, { password });
    res.status(200).json({ 'exito': response[0] > 0 ? true : false });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}
export {
  udpatePassword,
};