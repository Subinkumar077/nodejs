function requestHandler(req, res) {
    const path = req.url.toLowerCase();
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    if (path === '/') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>');
        res.write('<a href="/">Home</a>');
        res.write('<h1>Welcome Calculate Your Problem</h1>');
        res.write('<a href="/calculator">Calculator</a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (path === '/calculator') {
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body>');
        res.write('<a href="/">Home</a>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="number" name="number1" placeholder="Enter your 1st number"><br><br>');
        res.write('<input type="number" name="number2" placeholder="Enter your 2nd number"><br><br>');
        res.write('<button type="submit">Calculate</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (path === '/calculator-result') {
        res.write('<html><body><h1>Your result</h1></body></html>');
        return res.end();
    } else {
        res.statusCode = 404;
        res.write('<html><body><h1>404 - Page Not Found</h1></body></html>');
        return res.end();
    }
}

module.exports = { requestHandler };
