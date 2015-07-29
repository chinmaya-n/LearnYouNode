var fs = require('fs');

// function countLines(fileName, callback) {
//   fs.readFile(fileName, callback);
// }

// function print(err, dataBuf) {
//   var noOfLines = dataBuf.toString().split('\n').length - 1;
//   console.log(noOfLines);
// }

// countLines(process.argv[2], print);

fs.readFile(process.argv[2], function(err, contents) {
  console.log(contents.toString().split('\n').length-1);
})