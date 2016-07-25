var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Images = new Schema({
    image: String,
    date: Date
});

module.exports = mongoose.model('Images', Images);