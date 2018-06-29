// Create mongoose schema in here
// Create MOngoose schemas
const mongoose = require('mongoose'),
User = require('../models/user')
auctionShema =new mongoose.Schema({
    title:{ type: String, required: [true, 'Please input title'], minlength: [3, 'Title too short']},
    description:{ type: String, required: [true, 'Please input description'], minlength: [3, 'description too short']},
    price: { type: Number, required: [true, 'Please input price']},
    picture: String,
    auctionEnd: Date,
    brand: String,
    model:String,
    updated_at: Date,
    created_at: Date,
});


module.exports = mongoose.model('auction', auctionShema);


