var http = require('http');
var bl = require('bl');
var counter = 0;
http.get(process.argv[2], callback);

function callback(response) {
  counter++;
  response.pipe(bl(function (err, data) {
    if(err)
      return console.error(err);

    var string = data.toString();
    console.log(string);

    if(counter < 3)
      http.get(process.argv[counter + 2], callback);
  }));
}