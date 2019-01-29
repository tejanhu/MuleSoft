const express = require('express');

const mysql = require("mysql");

const http = require("http");

const url = require("url");

const db_con = require("./configuration.js");

const bodyParser = require('body-parser');

const app = express();

var username = '';

var password = '';

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/signin', function(req, res){
    // console.log(req.query);
    res.render('login', {qs: req.query});
});

app.get('/profile/:name', function(req, res){
    var data  = {age: 39, job: 'golfer'};
    res.render('profile', {person: req.params.name, data: data});
});

app.get('/login', function(req, res){
    res.render('login', {qs: req.query});
});

app.post('/login', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('login', {qs: req.query});
    username = req.body.username;
    password = req.body.password;

    db_con.query('SELECT * FROM users', function(err, rows, fields) {
        if (err) 
            throw err;
            // console.log("Request object\n username:" + req.body.username +"\n password:" + req.body.password);
        
            rows.forEach(element => {
                if(username==element.username && password==element.password){
                    console.log("Valid User!");
                }
                else{
                    return;
                }
            })
        console.log(username);
        console.log(password);
       
    
      });

});


app.get('/register', function(req, res){
    // console.log(req.query);
    res.sendFile(__dirname + '/register.html');
});

app.get('/profile/:name', function(req, res){
    res.send('You requested to see the profile of name: '+ req.params.name);
});




app.listen(2019);