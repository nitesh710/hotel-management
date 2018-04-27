angular.module('hotelUpdateController', [])
.controller('hotelUpdateCtrl', ['$scope', '$http', "$location",'getHotelIdService', function($scope, $http, $location, getHotelIdService){

	var hotelId = getHotelIdService.getHotelId();
	console.log(hotelId);

	$scope.onlyNoPattern = /^[0-9]*$/;

	var hotels;

	$http.get('/api/getHotels/' + hotelId).
	then(function onSuccess(response){
		console.log("/getHotel : ");
		console.log(response.data);
		hotels = response.data;
		$scope.hotel = hotels;
		$scope.roomAvail = response.data.roomAvail;
		$scope.adult = response.data.rentAdult;
		$scope.child = response.data.rentChild;
		$scope.laundary = response.data.laundary;
		$scope.food = response.data.food;
	}, function onError(response){
		console.log(response.data);
	});

	$scope.editForm = function(){
		$location.path('/updateHotel');
		console.log("EditForm Data");
	};

	$scope.removeHotelInfo = function(){
		alert("Are you sure to delete this entry..");
		$http.delete('/api/deleteRoomInfo/'+ hotelId)
		.then(function onSuccess(response){
			console.log(response.data);
		}, function onError(response){
			console.log(response.data);
		});
	};

	$scope.update = function(){

		$http.put('/api/updateRoomInfo/' + hotelId , $scope.hotel)
		.then(function onSuccess(response){
			console.log("update hotel..")
			console.log(response.data);
		}, function onError(response){
			console.log(response.data);
		});

	};

}]);