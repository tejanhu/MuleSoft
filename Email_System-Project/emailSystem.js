var http = require("http");
var url = require("url");
var db_con = require("./configuration.js");


var server = http.createServer(
        function(request,response){
       
            var url1 = request.url;
            path=url.parse(url1,true).pathname;
            console.log(path);
            response.writeHead(200, {'Content-Type': 'text/html'});

            const testHTML = `
            <!DOCTYPE html>
            <html>
            <head>
            </head>
            <body>
            <form action='http://localhost:2019/login-verification' method='POST' enctype=multipart/form-data><input type='text' placeholder='username' id='username'/><br><input type='text' placeholder='password' id='password'/>
            </body>
            </html>
            `;
       
        if(path ==="/"){
            response.write("<h1>Homepage<h1/>");
            response.write("<a href='http://localhost:2019/signin'>Sigin</a>");
            response.write("</br>");
            response.write("<a href='http://localhost:2019/register'>Create Account</a>");
        }
        if(path ==="/signin"){
            response.write("<form action='http://localhost:2019/login-verification' method='POST' enctype=multipart/form-data><input type='text' placeholder='username' id='username'/><br><input type='text' placeholder='password' id='password'/>")
            response.write("</br>");
            response.write("<input type='submit' value='Login'/></form>");    
        }
        if(path ==="/login-verification"){
            // var username;
            // var password;

        
                var username = request.body;
                var password = request.body;
            
                console.log(username);
                console.log(password);  
            
            
            try{
                db_con.query('SELECT * FROM users', function(err, rows, fields) {
                    if (err) throw err
                    rows.forEach(element => {
                        if(username==element.username && password==element.password){
                            response.write("<h1>Valid User!<h1/>");
                        }
                        else{
                            response.write("<h1>Invalid User!</h1>")
                        }
                    })
                    // console.log(username);
                    // console.log(password);
                   

                  });

            }
            catch(err){
                err.code;
            }
                
                
            }

            // response.write("</br>");
            // response.write("<input type='button' value='Specific Email'/>");
            // response.write("</br>");
            // response.write("<input type='button' value='Send Email'/>");
            // response.write("</br>");
            // response.write("<input type='button' value='Delete Email'/>");
            // response.write("</br>");
        
        if(path ==="/register"){
            response.write("<form><input type='text' placeholder='username'/><br><input type='text' placeholder='password'/></form>")
            response.write("</br>");
            response.write("<input type='submit' value='Register'/>");
        }

        if(path ==="/all"){
            response.write("<input type='button' value='All Emails'/>");
        }

        // response.write("<br> <br> <b> URL:"+request.url);
        response.end();
    });
   
server.listen(2019);