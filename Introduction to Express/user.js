const fs = require('fs');

const userRequestHandler = (req, res) => {
    console.log(req.url, res.method);
    
        if (req.url === '/') {
    res.write('<html>');
    res.write('<head><title>Form</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to Home page</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>')
    res.write('</html>')
    return res.end();
} else if (req.url.toLowerCase() === "/submit-details" && 
    req.method == "POST") {
        fs.writeFileSync('user.txt', 'Subin Kumar');
        res.statusCode =302;
        res.setHeader('Location', 'text/html');
        return res.end();
}
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Learn Nodejs </title> <head>');
    res.write('<body>Welcome to BLACK MIRROR</body>');
    res.write('</html>');
    return res.end()
    
};

module.exports = userRequestHandler;