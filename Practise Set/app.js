const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    const path = req.url.toLowerCase();
    res.setHeader('Content-Type', 'text/html');

    if (path === '/') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>');
        res.write('<a href="/">Home</a> | ');
        res.write('<a href="/men">Men</a> | ');
        res.write('<a href="/women">Women</a> | ');
        res.write('<a href="/kids">Kids</a> | ');
        res.write('<a href="/cart">Cart</a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (path === '/men') {
        res.write('<html><head><title>Men</title></head><body>Welcome to Men Page</body></html>');
        return res.end();
    } else if (path === '/women') {
        res.write('<html><head><title>Women</title></head><body>Welcome to Women Page</body></html>');
        return res.end();
    } else if (path === '/kids') {
        res.write('<html><head><title>Kids</title></head><body>Welcome to Kids Page</body></html>');
        return res.end();
    } else if (path === '/cart') {
        res.write('<html><head><title>Cart</title></head><body>Welcome to Cart Page</body></html>');
        return res.end();
    } else {
        res.write('<html><head><title>404</title></head><body>404 Page Not Found</body></html>');
        return res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
