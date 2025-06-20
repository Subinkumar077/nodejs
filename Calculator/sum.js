const sumRequestHandler = (req, res) => {
    console.log("In sum request handler", req.url);

    const body = [];

    req.on('data', chunk => body.push(chunk));

    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);

        console.log(bodyObj); // e.g., { number1: '5', number2: '7' }

        const result = Number(bodyObj.number1) + Number(bodyObj.number2);
        console.log("Result:", result);

        res.setHeader('Content-Type', 'text/html');
        res.write(`<h1>Result: ${result}</h1>`);
        res.end();
    });
};

exports.sumRequestHandler = sumRequestHandler;
