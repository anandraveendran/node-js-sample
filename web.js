var express = require('express');
var fs=require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var buffer = new Buffer(20);
fs.readFileSync('/index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
response.send(buffer.toString('utf8', 0, buffer.length));
});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
