// console.log('hello world');
require("dotenv").config();
const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");

const PORT = process.env.PORT;

const filePathByAsync = fs.readFile("index.html", "utf-8", (error, data) => {
  // console.log('filePathByAsync', data);
});
const filePathBySync = fs.readFileSync("index.html", "utf-8");
// console.log('filePathBySync', filePathBySync);

const filePath = path.join(__dirname, "index.html");
// module wrapper function
// https://www.geeksforgeeks.org/how-to-change-the-node-js-module-wrapper/
// console.log(filePath);
// console.log(__dirname);
// console.log(__filename);
// console.log('exports', exports);
// console.log('require', require);
// console.log('module', module);

// const server = http.createServer((req, res) => {
//   if (req.url == '/') {
//     res.end('hello nodejs')
//   } else if (req.url == '/login') {
//     res.end('<h1>You are in login page</h1>')
//   } else if (req.url == '/html') {
//     res.setHeader('Content-type', 'text/html')
//     res.end(filePathBySync);
//   } else {
//     res.end('<h1>404 not found</h1>')
//   }
// })

// const server = express();
const server = http.createServer((req, res) => {
  switch (res.url) {
    case "/":
      console.log("hello javascript");
      break;
    case "/login":
      console.log(" login success");
      break;
    default:
      console.log("404 not found");
      break;
  }
});
// server.get("/", (req, res) => {
//   res.send("hello nodejs");
// });
// server.get("/login", (req, res) => {
//   res.send("<h1>You are in login page</h1>");
// });
// server.get("/html", (req, res) => {
//   res.sendFile(filePath);
// });
// server.get("*", (req, res) => {
//   res.send("<h1>404 not found</h1>");
// });

server.listen(PORT, () => {
  console.log(`server is started at http://localhost:${PORT}`);
});
