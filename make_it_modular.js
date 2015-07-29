var fdc = require('./filterDirContents.js');
var dir = process.argv[2];
var fileFilter = process.argv[3];

function printFiles(err, list) {
  if(err)
    console.error(err);
  else {
    for(var i in list) {
      console.log(list[i]);
    }
  }
}

fdc(dir, fileFilter, printFiles);