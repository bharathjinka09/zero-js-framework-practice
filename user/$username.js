module.exports = function(req, res) {
  console.log(req.params); // = {username: 'luke'} when user visits /user/luke
  res.send({ params: req.params });
};