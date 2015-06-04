var http = require('http');
var bl = require('bl');
var remaining = 3;

var urls = [process.argv[2], process.argv[3], process.argv[4]];

var outputs = {};
outputs[process.argv[2]] = '';
outputs[process.argv[3]] = '';
outputs[process.argv[4]] = '';
//console.log(outputs);

urls.forEach(function(url) {
http.get(url.toString(), function (resp) {
	resp.pipe(bl(function (err, data) {
		if(err){
			console.log(err.message);
		}
		else{
			outputs[url] = data.toString();
			remaining--;
			if(remaining === 0)
		     urls.forEach(function (url) {
					 console.log(outputs[url]);
				 });
		}
	}));
});
});

