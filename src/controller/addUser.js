const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/addUser.json");

const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
const userData = data.users;

const createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  const writeData = {
    users: user,
  };
  const writeFile = fs.writeFileSync(dataPath, writeData);
  res.status(200).send(user);
};

const getAllUser = (req, res) => {
  res.status(200).send(users);
};

const getId = (req, res) => {
  const id = req.params.id;
  const data = users.find((user) => {
    return user.id === id;
  });
  if (!data) {
    res.status(404).json({ message: "User Not Found" });
  }
  res.status(200).send(data);
};

const getName = (req, res) => {
  const name = req.params.name;
  const data = users.find((names) => {
    return names.name === name;
  });
  if (!data) {
    res.status(404).json({ massage: "name is not found" });
  }
  res.status(200).send(data);
};

module.exports = {
  createUser,
  getAllUser,
  getId,
  getName,
};
