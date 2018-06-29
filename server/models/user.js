// Create mongoose schema in here
// Create MOngoose schemas
const mongoose = require('mongoose'),
UserShema =new mongoose.Schema({
    firstName:{ type: String, required: [true, 'Please input name'], minlength: [3, 'Name too short']},
    lastName:{ type: String, required: [true, 'Please input name'], minlength: [3, 'Name too short']},
    email:{ type: String, required: [true, 'Please input name'], minlength: [3, 'Name too short']},
    hash:String,
    updated_at: Date,
    created_at: Date,
});


module.exports = mongoose.model('User', UserShema);


