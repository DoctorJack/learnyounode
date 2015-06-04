var http = require('http');
var bl = require('bl');

//console.log("host should be " + process.argv[2]);
http.get(process.argv[2].toString(), function (resp) {
	resp.pipe(bl(function (err, data) {
		if(err){
			console.log(err.message);
		}
		else{
		  console.log(data.length);
			console.log(data.toString());
		}
	}));
});
