var http = require("http");
var server = http.createServer(
        function(request,response){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write("hello my dodgy friend");
        response.write("</br>")
        response.write("Go home");
        response.end();
    }
);
server.listen(2019);