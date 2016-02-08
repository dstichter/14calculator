var express = require('express');
var app = express();

var PORT = 8090;

app.get("/addition/:var1/:var2", function(req, res) {
  var x = parseInt(req.params.var1)
  var y = parseInt(req.params.var2)

  var response = x + y
  res.sendStatus(response)

});
app.get("/subtract/:var1/:var2", function(req, res) {
  var x = parseInt(req.params.var1)
  var y = parseInt(req.params.var2)

  var response = x - y
  res.sendStatus(response)
});
app.get("/multiply/:var1/:var2", function(req, res) {
  var x = parseInt(req.params.var1)
  var y = parseInt(req.params.var2)

  var response = x * y
  res.sendStatus(response)
});
app.get("/divide/:var1/:var2", function(req, res) {
  var x = parseInt(req.params.var1)
  var y = parseInt(req.params.var2)

  var response = x / y
  res.sendStatus(response)
});


app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
