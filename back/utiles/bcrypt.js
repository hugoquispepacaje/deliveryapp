import bcrypt from 'bcrypt';

const generateEncryptedString = async (word) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(word, salt);
}
const resolveEncryptedString = (word, encryptedWord) => {
  return bcrypt.compare(word, encryptedWord);
}
export {
  generateEncryptedString,
  resolveEncryptedString
}