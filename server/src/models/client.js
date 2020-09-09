export default class Client {
  constructor(id, name) {
    if (typeof id !== 'number')
      throw new ArgumentException('Invalid id');

    if (typeof name !== 'string')
      throw new ArgumentException('Invalid value');

    if (typeof clientId !== 'boolean')
      throw new ArgumentException('Invalid clientId');
    
    if (typeof codeId !== 'number')
      throw new ArgumentException('Invalid codeId');
    
    this.id = id;
    this.name = name;
  }
}