// const http = require("http");
// require("dotenv").config();
const express = require("express");
const config = require("../config/config");
const route = require("./route");

// const fs = require("fs");
// const path = require("path");
// const os = require("os");

// const PORT = process.env.PORT || 5000;

//const filePathByAsync = fs.readFile("first.html", "utf-8", (error, data) => {
//console.log("filePathByAsync", data);
//});
//const filePathBySync = fs.readFileSync("first.html", "utf-8");
//console.log("filePathBySync", filePathBySync);

// const filePath = path.join(__dirname, "first.html");
// const fileSet = path.join(__dirname, "index.html");

//////////////////////////////////////////////////////////////////////////
// module wrapper function
// https://www.geeksforgeeks.org/how-to-change-the-node-js-module-wrapper/
// console.log(filePath);
// console.log(__dirname);
// console.log(__filename);
// console.log("exports", exports);
// console.log("require", require);
// console.log("module", module);
//////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////
//file system today task

//file read
// const fileRead = fs.readFile("index.html", "utf-8", (req, res) => {
//   console.log("fileRead", res);
// });
// const fileReadsync = fs.readFileSync("index.html", "utf-8");
// console.log("fileRead", fileReadsync);

//file write

//fs.writeFileSync("index.txt", "hey this file textFile");
//////////////////////////////////////////////////////////////////
// path module in node.js
// path.basename
// path.dirname
// path.extname
// path.format
// path.join

//file basename
// let result = path.basename("/krunal-nodejs-learning/index.js");
// console.log(result); //output index.js

//file __dirname
// let result = path.dirname("/krunal-nodejs-learning/index.js");
// console.log(result);   //output  krunal-nodejs-learning

// file  extname

// console.log(path.extname("index.html")); // o/p = html
// console.log(path.extname("app.js")); // o/p =js

// file- format
// const pathSet = path.format({
//   dir: "krunal-nodejs-learning",
//   base: "index.html",
// });
// console.log(pathSet); //krunal-nodejs-learning/index.html

/// file path join
// let pathToDir = path.join("/home", "js", "dist", "app.js");
// console.log(pathToDir); // o/p =/home/js/dist/app.js
/////////////////////////////////////////////////////////////////

// os module
//device information use os module using function ()
// os.type();
// os.arch();
// os.platform();
// os.release();
// os.version();
// os.uptime();
// os.totalmem();
// os.freemem();
// os.userInfo();

// let currentOS = {
//   name: os.type(),
//   architecture: os.arch(),
//   platform: os.platform(),
//   release: os.release(),
//   version: os.version(),
// };
// console.log(currentOS);

// console.log(`hello  current uptime ${os.uptime()}`);
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.userInfo());
//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// basic express route  with path module

// server.get("/", (req, res) => {
//   res.end("hello this is express route");
// });
// server.get("/html", (req, res) => {
//   res.sendFile(fileSet);

// });
// server.get("*", (req, res) => {
//   res.end("ERROR");
// });

////////////////////////////////////////////////////////////////////
// server.get("/", (req, res) => {
//   res.send(`hello  ${req.query.name}`);
// });
// server.get("/login", (req, res) => {
//   res.send("<h1>You are in login page</h1>");
// });
// server.get("/html", (req, res) => {
//   res.sendFile(fileSet);
// });
// server.get("/htmlStudent", (req, res) => {
//   res.sendFile(filePath);
// });
// server.get("*", (req, res) => {
//   res.send("<h1>404 not found</h1>");
// });
const app = express();
app.use(express.json());
app.use("/api", route);

////////////////////////////////////////////////////////////////////////
app.listen(config.PORT, () => {
  console.log(`server is started at http://localhost:${config.PORT}`);
});
