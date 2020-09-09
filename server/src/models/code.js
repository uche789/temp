export default class Code {
  constructor(id, value, isUsed, expiresIn) {
    if (typeof id !== 'number')
      throw new ArgumentException('Invalid id');

    if (typeof value !== 'string')
      throw new ArgumentException('Invalid value');

    if (typeof isUsed !== 'boolean')
      throw new ArgumentException('Invalid isUsed');
    
    if (typeof expiresIn !== 'object')
      throw new ArgumentException('Invalid expiresIn');
    
    this.id = id;
    this.value = isUsed;
    this.isUsed = false;
    this.expiresIn = expiresIn
  }
}