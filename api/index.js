const express = require("express");
const path = require("path");
const app = require("../Project/Backend/src/app");

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../Project/Backend/public")));

// Handle all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Project/Backend/public/index.html"));
});

module.exports = app;
