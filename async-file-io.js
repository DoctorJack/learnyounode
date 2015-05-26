// Use single synchronous filesystem operation to read a file and print number of
// newlines it contains to stdout, similar to 
// cat file | wc -l 
// Full path of file is first command line argument

// To load fs module (or other "global" module):
var fs = require('fs');
var fileLines;

function countLines (callback) {
  fs.readFile(process.argv[2], function finishedReading(err, data)
			{
			   if(!err)
	       {
	         var fileLines = data.toString().split('\n').length - 1;
	         callback(fileLines);	
			   }
			});
};

function printLines (lines) 
{
  console.log(lines);
};

countLines(printLines);

/*
   var fs = require('fs')
   var file = process.argv[2]
         
   fs.readFile(file, function (err, contents) {
   //fs.readFile(file, 'utf8', callback) can also be used
               var lines = contents.toString().split('\n').length - 1
               console.log(lines)
   })
 
*/
