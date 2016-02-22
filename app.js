var server = require('express');
var app = server();
var path = require('path');
var os = require('os');
var locale = require('locale');


app.get('/whoami', function(req,res){
	var obj = {
        ipaddress: null,
        language: null,
        software: null
    }
    try{
        var parts = req.headers['user-agent'].split(/\s*[;)(]\s*/);
        var result;
        if (/^Linux/.test(parts[3])){
          result = parts[4];
        }
        else if (/^Android/.test(parts[2])){
          result = parts[2];
          }
        else{
          result = parts[1]; 
        }
        obj.ipaddress = req.headers['x-forwarded-for'].split(',')[0];
        obj['language'] = req.headers["accept-language"].split(',')[0];
        obj.software = result;
    }catch(err) {throw err};
    res.json(obj);
});

var port = process.env.PORT || 3000;
if (typeof(PhusionPassenger) != 'undefined'){
	app.listen('passenger');
	console.log('whoami app listening with passenger');

} else {
	app.listen(port, function(){
  		console.log("Listening on port: " + port);
	});
}

