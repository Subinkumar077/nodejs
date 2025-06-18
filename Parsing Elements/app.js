const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Form</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to Home page</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } 
    
    else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const name = parsedBody.split('=')[1];
            console.log("Name received from form:", name);

            fs.writeFileSync('user.txt', name);
            
            res.statusCode = 302;
            res.setHeader('Location', '/'); // redirect back to home
            return res.end();
        });
    }

    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Learn Nodejs</title></head>');
        res.write('<body><h1>Welcome to BLACK MIRROR</h1></body>');
        res.write('</html>');
        return res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
