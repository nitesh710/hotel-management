var express = require('express');
var router = express.Router();

var Reception = require('../models/reception');
var Hotel = require('../models/hotel');
var Admin = require('../models/admin');
var User = require('../models/user');

//=====================Admin Routes===============================

router.post('/loginAdmin', function(req, res){
	Admin
	.findOne({adminId: req.body.adminId})
	.exec( (err, admin) => {
		if (!admin) {
			return res.status(500).send({"message": "Admin Not Valid"});
		}
		else{
			if (admin.password === req.body.password) {
				return res.status(200).send(JSON.stringify(admin));
			}
			else{
				return res.send({"message": "Invalid Credential"});
			}
		}
	});
});

router.get('/getAllHotels/', function(req, res){
	Reception
	.find({})
	.exec( (err, receptions) => {
		if (!receptions) {
			return res.send({"message": "Error Occured!"});
		}
		else{
			return res.send(JSON.stringify(receptions));
		}
	})
});

router.delete('/deleteHotel/:id', function(req, res){
	Reception
	.findByIdAndRemove({_id: req.params.id})
	.exec( (err, reception) => {
		if (!reception) {
			return res.send({"message": "Hotel not deleted!"});
		}
		else{
			return res.send({"message": "Document Deleted!", "id": reception._id});
		}
	});
});

//=====================Hotel Routes===============================

// Register hotel
router.post('/registerHotel/', function(req, res){
	console.log('Gettin data in routes..');

	var myHotel = new Reception(req.body);

	myHotel.save()
	.then(item =>{
		res.send('item saved to database');
	})
	.catch(err =>{
		console.log(err);
		res.status(400).send('unable to save to database');
	});
});

// Login hotel
router.post('/loginHotel/', function(req, res){
	console.log('Logging In..');

	if (req.method == 'POST') {
		Reception
		.findOne({hotelId: req.body.hotelId})
		.exec( (err, reception) => {
			if (!reception) {
				return res.status(400).send({"message": "No hotel available!"});
			}
			else{
				if (reception.password === req.body.password) {
					return res.status(200).send(JSON.stringify(reception));
				}
				else{
					res.status(402).send({"message": "Invalid Credential!"});
				}
			}
		});
	}

});

// Room Facility
router.post('/roomFacility/', function(req, res){
	console.log('Room Facility..');
	console.log(req.body);

	var hotel = new Hotel(req.body);

	hotel.save()
	.then( item => {
		res.send("item saved to datebase");
	})
	.catch( err => {
		console.log(err);
		res.send("unable to save databse");
	});
});

router.get('/getHotels/:id', function(req, res){
	console.log('Hotels..');
	console.log(req.params.id);
	Hotel
	.findOne({_id: req.params.id})
	.exec( (err, hotel) => {
		if (!hotel) {
			return res.send("Haven't Found!");
		}
		else{
			return res.send(JSON.stringify(hotel));
		}
	})
});

router.put('/updateRoomInfo/:id', function(req, res){

	console.log("/updateRoomInfo/");
	console.log(req.params.id);
	console.log(req.body);

	Hotel
	.findByIdAndUpdate({_id: req.params.id}, {roomAvail: req.body.roomAvail, rentAdult: req.body.rentAdult, rentChild: req.body.rentChild, laundary: req.body.laundary, food: req.body.food}, {new: true})
	.exec( (err, hotel) =>{
		if (!hotel) {
			res.status(402).send({"message": "Error Occured!"});
		}
		else{
			return res.status(200).send(JSON.stringify(hotel));
		}
	})
});

router.delete('/deleteRoomInfo/:id', function(req, res){
	Hotel
	.findByIdAndRemove({_id: req.params.id})
	.exec( (err, hotel) => {
		if (err) {
			return res.status(500).send({"meassage": "Can't Deleted!"});
		}
		else{
			return res.status(200).send({"message": "Document Deleted!", "id": hotel._id});
		}
	});
})

//=====================User Routes================================

// User Sign Up
router.post('/userSignUp/', function(req, res){
	var user = new User(req.body);

	user.save()
	.then( item => {
		res.send("User is saved to database.");
	})
	.catch( err => {
		res.send("User is not saved to database.");
	});
});

// User Sign In
router.post('/userSignIn/', function(req, res){
	User
	.findOne({email: req.body.email})
	.exec((err, user) => {
		if (!user) {
			return res.status(402).send({'message': 'No User!'});
		}
		else{
			if (user.password === req.body.password) {
				return res.status(200).send({'message': 'User is valid!'});
			}
			else{
				return res.status(404).send({'message': 'Invalid Incredential!'});
			}
		}
	});
});

router.get('/searchHotel/', function(req, res){
	Reception
	.find({})
	.exec((err, receptions) => {
		if (err) throw err;
		res.send(JSON.stringify(receptions));
	});
});

router.post('/hotel/', function(req, res){
	console.log("Entering in hotel..");
	console.log(req.body.hotelName);
	Reception
	.findOne({hotelName: req.body.hotelName})
	.exec((err, hotel) => {
		if (!hotel) {
			return res.status(402).send({"message": "Not A Hotel!"});
		}
		else{
			return res.status(200).send(JSON.stringify(hotel));
		}
	});
});

router.post('/getHotel/', function(req, res){
	console.log("Get Hotel");
	console.log(req.body);
	Hotel
	.findOne({_id: req.body.id})
	.exec( (err, hotel) => {
		if (!hotel) {
			return res.status(402).send({"message": "unable to find"});
		}
		else{
			return res.status(200).send(JSON.stringify(hotel));
		}
	});
});

router.put('/updateRoom/:id', function(req, res){

	console.log(req.body.diff);
	console.log(req.params.id);

	Hotel
	.findByIdAndUpdate({_id: req.params.id}, {roomAvail: req.body.diff})
	.exec( (err, hotel) =>{
		if (!hotel) {
			res.status(402).send({"message": "Error Occured!"});
		}
		else{
			return res.status(200).send(JSON.stringify(hotel));
		}
	})
});

router.post('/getReception/', function(req, res){
	Reception
	.findOne({_id: req.body.id})
	.exec( (err, hotel) => {
		if (!hotel) {
			return res.status(402).send({"message": "Hotel Not Found!"});
		}
		else{
			return res.status(200).send(JSON.stringify(hotel));
		}
	});
});

router.post('/getUser/', function(req, res){
	User
	.findOne({email: req.body.email})
	.exec( (err, user) => {
		if (!user) {
			return res.status(4024).send({"message": "User Not Found!"});
		}
		else{
			return res.status(200).send(JSON.stringify(user));
		}
	});
});

module.exports = router;