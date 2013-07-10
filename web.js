var fs = require('fs');
var inputfile = "index.html";

var buffer = fs.readFileSync(inputfile);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
