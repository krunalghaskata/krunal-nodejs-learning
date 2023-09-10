const user = (req, res) => {
  res.status(200).json({
    massage: "user can use  route",
  });
};

module.exports = user;
