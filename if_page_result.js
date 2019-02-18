var http = require("http");
var server = http.createServer(
        function(request,response){
       
        var url = request.url;
        console.log(url);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write("hello my dodgy friend");
        if(url ==="/"){
            response.write("<h1>Homepage</h1>");
            response.write("</br>");
            response.write("<a href='http://localhost:2019/email')>Email</a>");
            response.write("</br>");
            response.write("<h2> <a href='http://localhost:2019/details'>Details</a>");
        }
        if(url ==="/email"){
            response.write("This is the email page");
        }
        if(url ==="/details"){
            response.write("This is the details page");
        }

        response.write("<br> <br> <b> URL:"+request.url);
        response.end();
    });
server.listen(2019);