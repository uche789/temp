export function generateCode() {
  const length = 6;
  const characterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
  let result = '';

  for (let i = 0; i < length; i++) {
    result += characterList.charAt(Math.floor(Math.random() * characterList.length));
  }

  return result
}