var http = require('http');
var map = require('through2-map');

function toCaps(data) {
  return data.toString().toUpperCase();
};

var server = http.createServer(function (request, response) {
  // console.log(request.headers);
  // console.log(request.method);
  // console.log(request.url);
  // console.log(request.socket);

  if(request.method !== 'POST')
    return res.end('send me a POST request\n');

  request.pipe(map(toCaps)).pipe(response);
});

server.listen(Number(process.argv[2]));