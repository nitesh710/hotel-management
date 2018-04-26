angular.module('roomFacilityController', [])
.controller('roomFacilityCtrl', ['$scope', '$http', "$location",'getHotelIdService', function($scope, $http, $location, getHotelIdService){

	var hotelId = getHotelIdService.getHotelId();
	console.log(hotelId);
	$scope.hotel_id = JSON.stringify(hotelId);

	console.log($scope.hotel_id);

	$scope.onlyNoPattern = /^[0-9]*$/;

	$scope.submit = function(){

		$scope.hotel._id = hotelId;
		console.log($scope.hotel);
		
		$http.post('/api/roomFacility/', $scope.hotel)
		.then(function onSuccess(response){
			console.log(response.data);
		}, function onError(response){

		});
	};
	


	// var hotelId = getHotelIdService.getHotelId();
	// console.log(JSON.stringify(hotelId));

	// $scope.addRoom = function(){

	// 	roomService.setRoomInfo($scope.rooms);

	// 	console.log($scope.rooms);

	// 	$scope.value1 = false;
	// 	$scope.value2 = false;
	// 	$scope.value3 = false;

	// 	var room1 = parseInt($scope.rooms.room1);
	// 	var room2 = parseInt($scope.rooms.room2);
	// 	var room3 = parseInt($scope.rooms.room3);
		
	// 	if (room1) {
	// 		$scope.value1 = true;
	// 	}

	// 	if (room2) {
	// 		$scope.value2 = true;
	// 	}

	// 	if (room3) {
	// 		$scope.value3 = true;
	// 	}

	// 	// $http.post('/api/roomFacility/', $scope.rooms)
	// 	// .then(function onSuccess(response){
	// 	// 	console.log(response);
	// 	// 	// $location.path('/addPrice');
	// 	// }, function onError(response){
	// 	// 	console.log(response);
	// 	// });
	// };

	// $scope.singleRoom = function(single){

	// 	var myRoomInfo = roomService.getRoomInfo();

	// 	var room1 = parseInt(myRoomInfo.room1);
	// 	console.log(room1);

	// 	single.roomTotal = JSON.stringify(room1);
	// 	single.hotelId = hotelId;

	// 	console.log(single);

	// 	$http.post('/api/single/', single)
	// 	.then(function onSuccess(response){
	// 		console.log(response.data);
	// 	}, function onError(response){
	// 		console.log(response.data);
	// 	});
	// };

	// $scope.twoRoom = function(two){

	// 	var myRoomInfo = roomService.getRoomInfo();

	// 	var room2 = parseInt(myRoomInfo.room2);
		
	// 	two.roomTotal = JSON.stringify(room2);
	// 	two.hotelId = hotelId;

	// 	console.log(two);

	// 	$http.post('/api/two/', two)
	// 	.then(function onSuccess(response){

	// 	}, function onError(response){

	// 	});
	// };

	// $scope.fourRoom = function(four){

	// 	var myRoomInfo = roomService.getRoomInfo();

	// 	var room3 = parseInt(myRoomInfo.room3);


	// 	four.roomTotal = JSON.stringify(room3);
	// 	four.hotelId = hotelId;

	// 	console.log(four);

	// 	$http.post('/api/four/', four)
	// 	.then(function onSuccess(response){

	// 	}, function onError(response){

	// 	});
	// };

}]);