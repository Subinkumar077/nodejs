const http = require('http');
const { requestHandler } = require('./handler');


const server = http.createServer((req,res) => {
    console.log(req);
    
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
