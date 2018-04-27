var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hoteldb');

var Schema = mongoose.Schema;

var receptionSchema = new Schema({
	hotelName: String,
	email: String,
	city: String,
	state: String,
	pinCode: String,
	mobile: String,
	hotelId: {type: String, required: true, unique: true},
	password: {type: String, required: true}
});

var Reception = mongoose.model('Reception', receptionSchema);

module.exports = Reception;