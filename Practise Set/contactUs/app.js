const express = require('express')

const app = express();
app.use((req, res, next) => {
    console.log("Talking from the first dummy middleware", req.url,req.method);
    next();
})
app.use((req, res, next) => {
    console.log("Talking from the second dummy middleware", req.url,req.method);
    next();
})
// app.use((req, res, next) => {
//     return res.send("<p>Third Middleware</p>")
// })

app.get("/", (req, res, next) => {
    console.log("Handling the / for the GET", req.url, req.method);
    res.send(`<h1>welcome to the server</h1>`)      
})
app.get("/contact-us", (req, res, next) => {
    console.log("Handling the / for the GET", req.url, req.method);
    res.send(`
        <h1>This is a contact Us page</h1>
         <form action = "/contact-us" method = "POST" id="userForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
    
    <button type="submit">Submit</button>
  </form>
        `)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
