var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

// app.get('/signin', function(req, res){
//     // console.log(req.query);
//     res.render('login');
// });

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
});

// app.post('/signin', urlencodedParser, function(req, res){
//     console.log(req.body);
//     res.render('login-success' + {data: req.body});
// });

app.get('/register', function(req, res){
    // console.log(req.query);
    res.sendFile(__dirname + '/register.html');
});

app.get('/profile/:name', function(req, res){
    res.send('You requested to see the profile of name: '+ req.params.name);
});

app.listen(2019);