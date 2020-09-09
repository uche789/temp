import Busboy from 'busboy';

export default (req, res, next) => {
  const busboy = new Busboy({ headers: req.headers });
  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
    file.on('data', function(data) {
      const phoneNumbers = data.toString()
      .replace(/\n/g, ',')
      .replace(/[^0-9,]/g, '')
      .split(',') 
      .filter(phone => phone)       
      res.send(phoneNumbers);
      console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
    });
    file.on('end', function() {
      console.log('File [' + fieldname + '] Finished');
    });
  });
  req.pipe(busboy);
}