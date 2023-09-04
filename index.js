// console.log('hello world');
require("dotenv").config();
const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");

const PORT = process.env.PORT;

const filePathByAsync = fs.readFile("first.html", "utf-8", (error, data) => {
  //console.log("filePathByAsync", data);
});
const filePathBySync = fs.readFileSync("first.html", "utf-8");
//console.log("filePathBySync", filePathBySync);

const filePath = path.join(__dirname, "first.html");
const fileSet = path.join(__dirname, "index.html");
// module wrapper function
// https://www.geeksforgeeks.org/how-to-change-the-node-js-module-wrapper/
// console.log(filePath);
// console.log(__dirname);
// console.log(__filename);
// console.log("exports", exports);
// console.log("require", require);
// console.log("module", module);

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("hello nodejs");
//   } else if (req.url == "/login") {
//     res.end("<h1>You are in login page</h1>");
//   } else if (req.url == "/html") {
//     res.setHeader("Content-type", "text/html");
//     res.end(filePathBySync);
//   } else {
//     res.end("<h1>404 not found</h1>");
//   }
// });

//switch case

// const ToServer = http.createServer((req, res) => {
//   switch (res.url) {
//     case "/":
//       res.end("hello javascript");
//       break;
//     case "/login":
//       res.end(" login success");
//       break;
//     default:
//       res.end("404 not found");
//       break;
//   }
// });

//(function (exports, require, module, __filename, __dirname) {});
//res.end(__dirname, "index.html");

const server = express();

server.get("/", (req, res) => {
  res.send(`hello  ${req.query.name}`);
});
server.get("/login", (req, res) => {
  res.send("<h1>You are in login page</h1>");
});
server.get("/htmlStudent", (req, res) => {
  res.sendFile(fileSet);
});
server.get("/html", (req, res) => {
  res.sendFile(filePath);
});
server.get("*", (req, res) => {
  res.send("<h1>404 not found</h1>");
});

server.listen(PORT, () => {
  console.log(`server is started at http://localhost:${PORT}`);
});
