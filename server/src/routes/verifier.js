export default (req, res, next) => {
  if (!req.query.code) {
    res.status(400)
    res.send({
      error: 'Requires parameter'
    })
    return
  }

  const code = encodeURIComponent(req.query.code);
  const found = true;

  if (found) {
    res.status(200)
    res.end()
  } else {
    res.status(404)
    res.send();
  }
}