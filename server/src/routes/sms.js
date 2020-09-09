import { generateCode } from '../services/codeGenerator';

export default (req, res, next) => {
  generateCode();
  res.send('blaj');
}