angular.module('hotelRoomsController', [])
.controller('hotelRoomsCtrl', ['$scope', '$http', '$location','myHotelRoomService', function($scope, $http, $location, myHotelRoomService){

	$scope.hotel = myHotelRoomService.getHotel();
	$scope.hotelId = myHotelRoomService.getHotelId();

	 $scope.noOfAdults = ('0 1 2 3 4').split(' ').map(function(adult) {
        return {abbrev: adult};
      });

	 $scope.noOfChilds = ('0 1 2 3 4').split(' ').map(function(child) {
        return {abbrev: child};
      });


	$scope.hotelName = {
		hotelName: $scope.hotel
	};

	$scope.id = {
		id: $scope.hotelId
	};

	console.log($scope.hotelName);

	$scope.toggle = false;
	var room;

	//=================== submit() ==========================

	$scope.submit = function(user){

		var userDetails = user;
		console.log($scope.user);

		var foodToggle = false;
		var laundaryToggle = false;

		console.log($scope.rooms);

		$scope.toggle = true;

		$http.post('/api/getHotel/', $scope.id)
		.then(function onSuccess(response){
			console.log(response.data);

			room = response.data.roomAvail;

			$scope.roomAvail = response.data.roomAvail;
			$scope.rentAdult = response.data.rentAdult;
			$scope.rentChild = response.data.rentChild;
			$scope.laundary = response.data.laundary;
			$scope.food = response.data.food;

			var checkIn = userDetails.checkIn;
			var dateCheckIn = new Date(checkIn);
			$scope.checkInDate = dateCheckIn.toLocaleDateString();

			var checkOut = userDetails.checkOut;
			var dateCheckOut = new Date(checkOut);
			$scope.checkOutDate = dateCheckOut.toLocaleDateString();

			var dChIn = dateCheckIn.getDate();
			var dChOut = dateCheckOut.getDate();

			var diff = dChOut - dChIn;

			if (userDetails.laundary) {
				laundaryToggle = true;
				if (!userDetails.food) {
					foodToggle = false;
					console.log(Number(foodToggle));
					$scope.food = 0;
				}
				console.log(Number(userDetails.laundary));
			}

			if (userDetails.food) {
				foodToggle = true;
				if (!userDetails.laundary) {
					laundaryToggle = false;
					console.log(Number(laundaryToggle));
					$scope.laundary = 0;
				}
				console.log(Number(userDetails.food));
			}

			if (!userDetails.laundary && !userDetails.food) {
				laundaryToggle = false;
				foodToggle = false;
				console.log(Number(laundaryToggle));
				console.log(Number(foodToggle));
				$scope.laundary = 0;
		        $scope.food = 0;
			}


			$scope.rentTotal = diff * ( userDetails.adults * $scope.rentAdult + userDetails.child * $scope.rentChild );

			$scope.laundaryToatal = diff * ( userDetails.adults * $scope.laundary + userDetails.child * $scope.laundary );

			$scope.foodTotal = diff * ( userDetails.adults * $scope.food + userDetails.child * $scope.food );

			$scope.total =  ( $scope.rentTotal + $scope.laundaryToatal + $scope.foodTotal );
			
		}, function onError(response){
			console.log(response.data);
		});

	};

	//=================== book() ==============================

	$scope.book = function(){

		room = room - 1;
		$scope.roomAvail = room;

		console.log(room);

		$scope.difference = {
			diff: room
		};

		$http.put('/api/updateRoom/' + $scope.hotelId , $scope.difference)
		.then(function onSuccess(response){
			console.log(response.data);
			$location.path('/roomInfo');
		}, function onError(response){
			console.log(response.data);
		});
	};

}]);