const requestHandler = (res,req) =>{
console.log(req.url, req.method);

}

exports.requestHandler = requestHandler;