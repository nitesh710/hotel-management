const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hoteldb');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	full_name: String,
	country: String,
	mobile: Number,
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true}
});

var User = mongoose.model('User', userSchema);

module.exports = User;