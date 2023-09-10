const express = require("express");
route = express.Router();

const isNotFound = require("../controller/404");
const userController = require("../controller/user");
const userLogin = require("../controller/login");

route.get("/", userController);
route.get("/login", userLogin);
route.get("*", isNotFound);

module.exports = route;
