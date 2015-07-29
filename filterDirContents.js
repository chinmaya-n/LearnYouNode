module.exports = function filterDirContents(dirName, fileExtFilter, callback) {
	var fs = require('fs');
  var path = require('path');
  var dirContents = [];

  fs.readdir(dirName, function(err, list) {
    if(err)
      return callback(err);

    if(fileExtFilter) {
      for(var i in list) {
        if(path.extname(list[i]) === '.' + fileExtFilter)
          dirContents.push(list[i]);
      }
    }
    else {
      for(var i in list) {
        dirContents.push(list[i]);
      }
    }

    callback(err, dirContents);
  });
};

// // Second Method
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list);
//   })
// }