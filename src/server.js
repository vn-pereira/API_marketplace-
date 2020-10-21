"use strict";
// Importing dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Initializing the express application instance
const app = express();
app.use(express.json());

// Importing API routes
const routes = require("./router");
routes(app);

// Applying middleware's to express app
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Error 404 Handler middleware
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "NOT FOUND",
  });
});

// Global Error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    success: false,
    message: error.message,
  });
});

// defining Port number
const port = process.env.PORT || 3000;

// server listener.
app.listen(port, () => {
  console.log("App Listening On: http://localhost:" + port);
});
