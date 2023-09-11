const express = require("express");
route = express.Router();

// const isNotFound = require("../controller/404");
// const userController = require("../controller/user");
// const userLogin = require("../controller/login");
const {
  createUser,
  getAllUser,
  getId,
  getName,
} = require("../controller/addUser");

// route.get("/", userController);
// route.get("/user/getAll", userLogin);
// route.get("*", isNotFound);

route.post("/user/create", createUser);
route.get("/user/getAll", getAllUser);
route.get("/user/get/:id", getId);
route.get("/user/get/:name", getName);

module.exports = route;
