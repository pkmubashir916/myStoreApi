const notFound = (req,res) => {
  res.status(500).send("this route does not exist");
  next();
}
module.exports = notFound;