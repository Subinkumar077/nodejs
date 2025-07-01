const path = require('path');
const express = require('express');
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils.js")

hostRouter.get("/add-home", (req, res, next) => {
    console.log(req.method, req.url);
    res.sendFile(path.join(rootDir, "views", "addHome.html"))
});

const registeredHouse = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log(req.method, req.url);
    console.log(req.body);
    registeredHouse.push({houseName: req.body.houseName});
    res.sendFile(path.join(rootDir, "views", "addedHome.html"))
});

exports.hostRouter = hostRouter;
exports.registeredHouse = registeredHouse;