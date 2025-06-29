const path = require('path');
const express = require('express');
const userRouter = require("./routes/CUuserRouter.js");
const hostRouter = require("./routes/CUhostRouter.js")
const rootDir = require("./utils/CUpathUtils.js")

const app = express();
app.use((req, res, next) => {
    console.log("Talking from the first dummy middleware", req.url,req.method);
    next();
})
app.use((req, res, next) => {
    console.log("Talking from the second dummy middleware", req.url,req.method);
    next();
})
app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);
app.use((req, res, next) => { 
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
});


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
