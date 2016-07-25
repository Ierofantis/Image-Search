var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes.js');
var MONGOLAB_URI =  'mongodb://ha:123@ds029725.mlab.com:29725/image'

var app = express();

mongoose.connect(process.env.MONGOLAB_URI, function (error){
   
   if (error) console.error(error);
   else console.logo("mongo connected")

});

app.use('/', express.static(process.cwd() + '/views'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Listening on port ' + port + '...');
});