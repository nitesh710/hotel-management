angular.module('routes', [])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '../views/user/signUpForm.html',
		controller: 'userSignUpCtrl'
	})
	.when('/loginUser', {
		templateUrl: '../views/user/signInForm.html',
		controller: 'userSignInCtrl'
	})
	.when('/searchHotel', {
		templateUrl: '../views/user/searchHotel.html',
		controller: 'searchHotelCtrl'
	})
	.when('/hotel', {
		templateUrl: '../views/user/hotel.html',
		controller: 'hotelCtrl'
	})
	.when('/hotelRooms', {
		templateUrl: '../views/user/hotelCheckIn.html',
		controller: 'hotelRoomsCtrl'
	})
	.when('/roomInfo', {
		templateUrl: '../views/user/roomInfo.html',
		controller: 'roomInfoCtrl'
	})
	.when('/registerHotel', {
		templateUrl: '../views/reception/signUpForm.html',
		controller: 'signUpCtrl'
	})
	.when('/loginHotel', {
		templateUrl: '../views/reception/signInForm.html',
		controller: 'signInCtrl'
	})
	.when('/roomFacility', {
		templateUrl: '../views/reception/roomFacility.html',
		controller: 'roomFacilityCtrl'
	})
	.when('/hotels', {
		templateUrl: '../views/reception/hotels.html',
		controller: 'hotelUpdateCtrl'
	})
	.when('/updateHotel', {
		templateUrl: '../views/reception/updateForm.html',
		controller: 'hotelUpdateCtrl'
	})
	.when('/loginAdmin', {
		templateUrl: '../views/admin/adminLogin.html',
		controller: 'adminLoginCtrl'
	})
	.when('/adminPanel', {
		templateUrl: '../views/admin/adminPanel.html',
		controller: 'adminPanelCtrl'
	})
}]);