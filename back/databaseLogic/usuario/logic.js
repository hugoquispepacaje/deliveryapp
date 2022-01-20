import Usuario from './scheme.js';

const findOneForID = async (id) => {
  let response = await Usuario.findByPk(id);
  return response;
}

const findOneForEmail = async (email) => {
  let response = await Usuario.findOne({ where: { 'correo': email } });
  return response;
}

const findOneForUsername = async (username) => {
  let response = await Usuario.findOne({ where: { 'nombre_usuario': username } });
  return response;
}
const updateOne = async (id, data) => {
  let response = await Usuario.update(
    data,
    {
      where: {
        id
      }
    }
  );
  return response;
}

export {
  updateOne,
  findOneForID,
  findOneForEmail,
  findOneForUsername
}