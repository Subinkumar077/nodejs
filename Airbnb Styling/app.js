const path = require('path');
const express = require('express');
const userRouter = require("./routes/userRouter.js");
const hostRouter = require("./routes/hostRouter.js")
const rootDir = require("./utils/pathUtils.js")

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);
app.use((req, res, next) => { 
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
});

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});