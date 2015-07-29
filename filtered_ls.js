var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var filter = '.' + process.argv[3];

function displayDirContents(err, list) {
  if(filter) {
    for(var i in list) {
      var file = list[i];
      if(path.extname(file) === filter)
        console.log(file);
    }
  }
  else {
    for(var i in list) {
      console.log(list[i]);
    }
  }
}

fs.readdir(dir, displayDirContents);