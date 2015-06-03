var http = require('http');

//console.log("host should be " + process.argv[2]);
http.get(process.argv[2].toString(), function (resp) {
//http.get('http://localhost:46651', function (resp) {
	resp.on('data', function (data) {
		console.log(data.toString());
	});
//	resp.on('error', function (err) {
//		console.log(err.message);
//	})
//	resp.on('end', function (data) {
//		console.log(data.toString());
//	});
});
