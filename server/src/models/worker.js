export default class Worker {
  constructor(id, phone, clientId, codeId) {
    if (typeof id !== 'number')
      throw new ArgumentException('Invalid id');

    if (typeof phone !== 'string')
      throw new ArgumentException('Invalid value');

    if (typeof clientId !== 'boolean')
      throw new ArgumentException('Invalid clientId');
    
    if (typeof codeId !== 'number')
      throw new ArgumentException('Invalid codeId');
    
    this.id = id;
    this.phone = phone;
    this.clientId = clientId;
    this.codeId = codeId;
  }
}