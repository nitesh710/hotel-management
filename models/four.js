const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hoteldb');

const Schema = mongoose.Schema;

var fourSchema = new Schema({
	hotelId: Schema.Types.ObjectId,
	roomTotal: Number,
	rent: Number,
	laundary: Number,
	food: Number
});

var Four = mongoose.model('Four', fourSchema);

module.exports = Four;