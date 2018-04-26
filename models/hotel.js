var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hoteldb');

var Schema = mongoose.Schema;

var hotelSchema = new Schema({
	_id: Schema.Types.ObjectId,
	roomAvail: Number,
	rentAdult: Number,
	rentChild: Number,
	laundary: Number,
	food: Number
});

var Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;