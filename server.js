var http = require('http');
var url = require('url');

function start(route, handle) {
	function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        response.writeHead(200, {"Content-Type" : "text/plain"});
        response.write("Hello World\n");

        route(pathname);
        response.end();
    }

    http.createServer(onRequest).listen(80);
}

exports.start = start;