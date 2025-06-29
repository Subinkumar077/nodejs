//Core Module
const path = require('path');
const express = require('express');
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils.js")


userRouter.get("/", (req, res, next) => {
    console.log(req.method, req.url);
    res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;