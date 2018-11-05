const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');

const app = express();

// Add headers to allow cross domain requests
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  //or rather set all the websites
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  //if you only want to serve some routes to clients of all origins, set the res.headers specifically for these routes and omit the next(),
  next();
});

var catalogueRoutes = require("./routes/routes")(app);

const port = 8000;
app.listen(port, () => {
  console.log(`We are live on port: ${port}`);
});
