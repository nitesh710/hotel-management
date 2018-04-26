const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hoteldb');

const Schema = mongoose.Schema;

var singleSchema = new Schema({
	hotelId: Schema.Types.ObjectId,
	roomTotal: Number,
	rent: Number,
	laundary: Number,
	food: Number
});

var Single = mongoose.model('Single', singleSchema);

module.exports = Single;