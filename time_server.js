var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
  var dateTime = strftime('%Y-%m-%d %H:%M\n', new Date());
  socket.write(dateTime);
  socket.end();
});

server.listen(Number(process.argv[2]));

/* Official Solution */
/*    
    var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2])) 
*/