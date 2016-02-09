var express = require('express')
var app = express()
var expressHandlebars = require('express-handlebars')
var PORT = 8090
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var icecreams = [ {name: 'vanilla', price: 10, awesomeness: 3},
{name: 'chocolate', price: 4, awesomeness: 8},
{name: 'banana', price: 1, awesomeness: 1},
{name: 'greentea', price: 5, awesomeness: 7},
{name: 'jawbreakers', price: 6, awesomeness: 2}, ];

app.get('/vanilla', function(req,res){
  res.render('icecream', icecreams[0])
});

app.get('/chocolate', function(req,res){
  res.render('icecream', icecreams[1])

});

app.get('/banana', function(req,res){
  res.render('icecream', icecreams[2])

});

app.get('/greentea', function(req,res){
  res.render('icecream', icecreams[3])

});

app.get('/jawbreakers', function(req,res){
  res.render('icecream', icecreams[4])

});
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
