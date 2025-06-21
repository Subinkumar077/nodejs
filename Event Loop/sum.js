const sumRequestHandler = (req, res) => {
    console.log("1. In sum request handler", req.url);

    const body = [];

    req.on('data', chunk => body.push(chunk));
    console.log("2. Your chunk is loading");
    
    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);

        console.log(bodyObj);

        const result = Number(bodyObj.number1) + Number(bodyObj.number2);
        console.log("3. Result:", result);

        res.setHeader('Content-Type', 'text/html');
        res.write(`<h1>Result: ${result}</h1>`);
        res.end();
    });
};

exports.sumRequestHandler = sumRequestHandler;
