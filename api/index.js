const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = require("../Project/Backend/src/app");

// Set up paths
const publicPath = path.join(__dirname, "../Project/Backend/public");
const viewsPath = path.join(__dirname, "../Project/Backend/templates/views");
const partialsPath = path.join(
  __dirname,
  "../Project/Backend/templates/partials"
);

// Set up Handlebars
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Serve static files
app.use(express.static(publicPath));

// Handle all routes
app.get("*", (req, res) => {
  res.render("index");
});

module.exports = app;
