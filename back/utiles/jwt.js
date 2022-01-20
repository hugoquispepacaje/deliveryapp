import jwt from 'jsonwebtoken';

const generateLoginToken = (user) => {
  const token = jwt.sign(
    {
      user
    },
    process.env.JWT_SEED,
    {
      expiresIn: '1d'
    });
  return token
}

const validateLoginToken = (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    const decoding = jwt.verify(token, process.env.JWT_SEED);
    req.decodedUser = decoding.user;
    next();
  } catch (error) {
    res.status(500).json({ 'exito': false, error });
  }
}

const generateRecoveryPasswordToken = (user) => {
  const token = jwt.sign(
    {
      user
    },
    process.env.JWT_SEED_PASSWORD,
    {
      expiresIn: '1h'
    });
  return token
}

const validateRecoveryPasswordToken = (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    const decoding = jwt.verify(token, process.env.JWT_SEED_PASSWORD);
    req.decodedUser = decoding.user;
    next();
  } catch (error) {
    res.status(500).json({ 'exito': false, error });
  }
}

export {
  generateLoginToken,
  validateLoginToken,
  generateRecoveryPasswordToken,
  validateRecoveryPasswordToken
}