var fs = require('fs');
//var module = require('module');
var path = require('path');
var ext;


module.exports = function lsFilter (directory, extension, callback){
   fs.readdir(directory,
			 function (err, list)
			 {
				 if(err){
		        callback(err);
						return;
				 }
				 ext = extension;
//	       console.log("list is " + list);
				 var filteredList = list.filter(isCorrectExtension);
				 callback(null, filteredList);
			 });
};


function isCorrectExtension(value, index, array)
{
//	console.log(" value is " + value);
//	if (path.extname(value) === "." + "js")
	if (path.extname(value) === "." + ext)
		return true;
	return false;
}

