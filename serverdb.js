var express = require('express')
var mysql = require('mysql')
var app = express();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : "password",
  database : 'lab'
});
var PORT = 8090;

app.get("/cast", function(req, res) {
  connection.query("SELECT * FROM friends", function(err, results) {
    if(err) throw err;
    res.send(results);
  });

});

app.get('/coolness-chart', function(req,res){
  connection.query("SELECT * FROM friends ORDER BY coolness_points DESC", function(err, results) {
    if(err) throw err;
    res.send(results)
  });
});

app.get('/attitude-chart/:type', function(req,res){
  connection.query("SELECT * FROM friends WHERE attitude=?",req.params.type,function(err,results){
    if(err) throw err;
    res.send(results)
  })
})
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
