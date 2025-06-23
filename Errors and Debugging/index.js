const http = require('http');
const syntaxTesting = require('./syntax')
const runtime = require('./runtime')

const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}, Method: ${req.method}`);
    res.end('Hello from server'); 
    // syntaxTesting();
    runtime();
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
