var mongoose = require('mongoose');
const connecection = mongoose.connect('mongodb://localhost/users');
module.exports =  connecection;