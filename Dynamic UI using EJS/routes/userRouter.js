//Core Module
const path = require('path');
const express = require('express');
const userRouter = express.Router();
const { registeredHouse } = require ('./hostRouter.js')

userRouter.get("/", (req, res, next) => {
    console.log(registeredHouse);
    res.render('home',  {registeredHouse: registeredHouse})
});

module.exports = userRouter;