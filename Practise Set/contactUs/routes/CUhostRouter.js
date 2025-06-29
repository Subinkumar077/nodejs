const path = require('path');
const express = require('express');
const hostRouter = express.Router();
const rootDir = require("../utils/CUpathUtils.js")

hostRouter.get("/contact-us", (req, res, next) => {
    console.log(req.method, req.url);
    res.sendFile(path.join(rootDir, "views", "contactUs.html"))
});

hostRouter.post("/contact-us", (req, res, next) => {
    console.log(req.method, req.url);
    console.log(req.body);
    res.sendFile(path.join(rootDir, "views", "submitted.html"))
});

module.exports = hostRouter;