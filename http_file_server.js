var http = require('http');
var fs = require('fs');
var fileToStream = process.argv[3];
var port = process.argv[2];

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'content-type' : 'text/plain'});
  var fileStream = fs.createReadStream(fileToStream);
  fileStream.pipe(response); // source.pipe(destination) i.e source piped to destination
});

server.listen(Number(port));