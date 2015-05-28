var mymodule = require('./ls-module');

if(process.argv.length != 4){
	console.log("Usage: node useModule.js directory extension");
	return;
}

mymodule(process.argv[2].toString(), process.argv[3], function(err, data) {
    if(err){
			console.log(err.toString());
			return;
		}
		data.forEach(function (file){
			console.log(file);
    });
});
