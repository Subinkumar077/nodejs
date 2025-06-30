const path = require('path');
const express = require('express');
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils.js")

hostRouter.get("/add-home", (req, res, next) => {
    console.log(req.method, req.url);
    res.sendFile(path.join(rootDir, "views", "addHome.html"))
});

hostRouter.post("/add-home", (req, res, next) => {
    console.log(req.method, req.url);
    console.log(req.body);
    res.sendFile(path.join(rootDir, "views", "addedHome.html"))
});

module.exports = hostRouter;