//Core Modules
const http = require('http');

//External Modules
const express = require('express')

//Local Modules
const requestHandler = require('./user');

const app = express();

const server = http.createServer(app);

//Adding Middleware
app.use((req, res, next) =>{
    console.log("first middleware", req.url, req.method);
    next();
})
app.use((req, res, next) =>{
    console.log("second middleware", req.url, req.method);
    res.send("<p>Welcome to Learning Express JS</p>")
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
