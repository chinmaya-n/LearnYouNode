var fs = require('fs');
var fileBuf = fs.readFileSync(process.argv[2]);
var text = fileBuf.toString();
var lines = text.split('\n');
console.log(lines.length-1);
