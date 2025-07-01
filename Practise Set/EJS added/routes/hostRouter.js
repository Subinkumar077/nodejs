const path = require('path');
const express = require('express');
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils.js")

hostRouter.get("/add-home", (req, res, next) => {
    console.log(req.method, req.url);
    res.sendFile(path.join(rootDir, "views", "addHome.html"))
});

const registeredHouse = [];

hostRouter.post('/add-home', (req, res) => {
  const { houseName, location, price, mapLink, imageUrl } = req.body;

  registeredHouse.push({
    houseName,
    location,
    price,
    imageUrl
  });

  res.redirect('/');
});

exports.hostRouter = hostRouter;
exports.registeredHouse = registeredHouse;