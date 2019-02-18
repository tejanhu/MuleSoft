var http = require("http");
var url=require("url")
var server = http.createServer(
        function(request,response){
       
        var url1 = request.url;
        path=url.parse(url1,true).pathname;
        console.log(path);
        if(path ==="/"){      
            for(var i=1;i<=10;i++){
                response.write("<a href ='http://localhost:2019/timestable?T="+i+"'>"+i+"</a>");
                response.write("</br>");
            }
        }
        if(path==="/timestable?T="+){
            response.write("helloooooooooo");
        }
        response.end();
    });
server.listen(2019);