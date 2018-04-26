angular.module('roomInfoController', [])
.controller('roomInfoCtrl', ['$scope', '$http', '$location','myHotelRoomService','myUserService', function($scope, $http, $location, myHotelRoomService, myUserService){

	var hotelId = myHotelRoomService.getHotelId();
	var hotelName = myHotelRoomService.getHotel();
	var userEmailId = myUserService.getUser();

	$scope.id = {
		id: hotelId
	}

	$scope.email = {
		email: userEmailId
	}

	var min = 101;
	var max = 112;

	$scope.roomNo = getRandomRoomNo(101, 112);

	function getRandomRoomNo(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$http.post('/api/getReception/', $scope.id)
	.then(function onSuccess(response){
		console.log(response.data);
		$scope.city = response.data.city;
		$scope.state = response.data.state;
		$scope.pinCode = response.data.pinCode;

		$scope.address = $scope.city + ", " + $scope.state + "-" + $scope.pinCode;
	}, function onError(response){
		console.log(response.data);
	});

	$http.post('/api/getUser/', $scope.email)
	.then(function onSuccess(response){
		console.log(response.data);

		$scope.name = response.data.full_name;
		$scope.mobile = response.data.mobile;
	}, function onError(response){
		console.log(response.data);
	});

	$scope.printPage = function(div){
		var innerContents = document.getElementById(div).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=1024,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
	}

}]);