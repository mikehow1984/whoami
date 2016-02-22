const PORT = 3000;
var http = require('http');

var server = http.createServer(function(req, res){
	res.end(oonsole.log('success'));
});

server.listen(PORT);

