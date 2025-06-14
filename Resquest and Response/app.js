const http = require('http');

function requestListener  (req, res) {
    console.log(req);
}

const server = http.createServer((req,res)=> {
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Learn Nodejs </title> <head>');
    res.write('<body>Welcome to Home Page</body>');
    res.write('</html>');
    return res.end()
    } else if (req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Learn Nodejs </title> <head>');
    res.write('<body>Welcome to the products page</body>');
    res.write('</html>');
    return res.end()
    } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Learn Nodejs </title> <head>');
    res.write('<body>Welcome to BLACK MIRROR</body>');
    res.write('</html>');
    res.end()
    }
    
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});