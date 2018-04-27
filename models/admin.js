var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hoteldb');

var Schema = mongoose.Schema;

var adminSchema = new Schema({
	adminId: {type: String, required: true, unique: true},
	password: {type: String, required: true}
});

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;