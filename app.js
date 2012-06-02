var http = require('http'); //Loads http modules

function onRequest (request, response){
    console.log("request received");
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Hello World");
    response.end();
}


function start() {   
    http.createServer(onRequest).listen(80);
}

exports.start = start;