var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes.js');
var app = express();

mongoose.connect(process.env.MONGOLAB_URI, function (error){
   
   if (error) console.error(error);
   else console.log("mongo connected")

});

app.use('/', express.static(process.cwd() + '/views'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Listening on port ' + port + '...');
});
