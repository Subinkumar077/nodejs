const http = require('http');

function requestListener  (req, res) {
    console.log(req);
}
// Passing the reference of the above function not calling
// http.createServer(requestListener)


const server = http.createServer((req,res)=> {
    console.log(req);
    process.exit(); //to stop the loop
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});