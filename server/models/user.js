// Create mongoose schema in here
// Create MOngoose schemas
const mongoose = require('mongoose'),
PetSchema =new mongoose.Schema({
    name:{ type: String, required: [true, 'Please input name'], minlength: [3, 'Name too short']},
    updated_at: Date,
    created_at: Date,
    type: { type: String, required: [true, 'Please input type'], minlength: [3, 'Typetoo short']},
    description: { type: String, required: [true, 'Please input description'], minlength: [3, 'Description too short']},
    skills:{
        skillone:{ type: String,  default: ''},
        skilltwo:{ type: String,  default: ''},
        skillthree:{ type: String,default: ''}
    }
});


module.exports = mongoose.model('Pet', PetSchema);


