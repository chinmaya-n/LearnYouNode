var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
  var urlJson = url.parse(request.url, true);

  var isoTime = urlJson.query.iso;
  var date = new Date(isoTime);
  var timeJson = new Object();

  if(urlJson.pathname === '/api/parsetime') {
    if(isoTime) {
      timeJson.hour = date.getHours();
      timeJson.minute = date.getMinutes();
      timeJson.second = date.getSeconds();
    }
    else
      response.end('query must be iso time\n');
  }
  else if(urlJson.pathname === '/api/unixtime') {
    if(isoTime) {
      timeJson.unixtime = Date.parse(isoTime);
    }
    else
      response.end('query must be iso time\n');
  }

  response.writeHead(200, {'Content-Type':'application/json'});
  response.end(JSON.stringify(timeJson));
});

server.listen(Number(process.argv[2]));