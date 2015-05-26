// Use single synchronous filesystem operation to read a file and print number of
// newlines it contains to stdout, similar to 
// cat file | wc -l 
// Full path of file is first command line argument

// To load fs module (or other "global" module):
var fs = require('fs');

// Synchronous methods in fs end with Sync
var buffer = fs.readFileSync(process.argv[2]);  // Should verify input

//console.log(buffer.toString());  // Prints out the contents of buffer (read from file)

// Note:  you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

// Creates an arrray containing lines of string made from buffer split on newlines
var fileLines = buffer.toString().split('\n');

// No newline on the last line, so we have one line than newline
console.log(fileLines.length - 1);

