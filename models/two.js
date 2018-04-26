const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hoteldb');

const Schema = mongoose.Schema;

var twoSchema = new Schema({
	hotelId: Schema.Types.ObjectId,
	roomTotal: Number,
	rent: Number,
	laundary: Number,
	food: Number
});

var Two = mongoose.model('Two', twoSchema);

module.exports = Two;