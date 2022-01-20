import * as utiles from './utiles.js'
import * as Usuario from '../../databaseLogic/usuario/logic.js';
import { sendPasswordRecoveryMail } from '../../utiles/nodemailder.js';
import { generateLoginToken, generateRecoveryPasswordToken } from '../../utiles/jwt.js';
import { generateEncryptedString, resolveEncryptedString } from '../../utiles/bcrypt.js';

const login = async (req, res) => {
  try {
    let user = req.userValidated;
    let userResponse = await Usuario.findOneForUsername(user.username);
    if (!utiles.existUser(userResponse)) {
      res.status(400).json({
        'exito': false,
        'mensaje': 'No se encontró el usuario.'
      });
      return
    }
    let isSamePassword = await resolveEncryptedString(user.password, userResponse.password);
    if (!isSamePassword) {
      res.status(400).json({
        'exito': false,
        'mensaje': 'Las contraseñas no coinciden.'
      });
      return
    }
    let loginToken = generateLoginToken({
      'id': userResponse.id,
      'id_restaurant': userResponse.id_restaurant,
      'nombre_usuario': userResponse.nombre_usuario,
      'correo': userResponse.correo
    })
    res.status(200).json({
      'exito': true,
      'token': loginToken
    });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const recoverPassword = async (req, res) => {
  try {
    let user = req.userValidated;
    let userResponse = await Usuario.findOneForUsername(user.username);
    if (!utiles.existUser(userResponse)) {
      res.status(400).json({
        'exito': false,
        'mensaje': 'No se encontró el usuario.'
      });
      return
    }
    let recoverToken = generateRecoveryPasswordToken({
      'id': userResponse.id,
      'id_restaurant': userResponse.id_restaurant,
      'nombre_usuario': userResponse.nombre_usuario,
      'correo': userResponse.correo
    })
    let responseMail = await sendPasswordRecoveryMail(userResponse.nombre_usuario, userResponse.correo, recoverToken);
    if (responseMail.accepted?.length > 0) {
      res.status(200).json({
        'exito': true,
        'mensaje': 'Correo enviado exitosamente.'
      });
      return;
    }
    else {
      res.status(500).json({
        'exito': false,
        'error': responseMail,
        'mensaje': 'No se pudo enviar el correo de recuperación.'
      });
      return;
    }
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

const changePassword = async (req, res) => {
  try {
    let user = req.decodedUser;
    let password = await generateEncryptedString(req.password);
    let responseChangePassword = await Usuario.updateOne(user.id, { password });
    res.status(200).json({ 'exito': responseChangePassword[0] > 0 ? true : false });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
}

export {
  login,
  recoverPassword,
  changePassword
};