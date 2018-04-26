angular.module('searchHotelController', [])
.controller('searchHotelCtrl', ['$scope', '$http', '$location','myHotelService', function($scope, $http, $location, myHotelService){
	
	$scope.onClickHotel = function(x){
		$scope.hotel = JSON.stringify(x);
		myHotelService.setHotel(x);
		console.log("Inside onClickHotel()");
		console.log($scope.hotel);
	}

	$scope.search = function(){

		$scope.toggle = false;

		$http.get('/api/searchHotel/')
		.then(function onSuccess(response){

			$scope.toggle = true;

			var hotels = response.data;
			var i;
			var hotelNames = [];
			
			for(i = 0; i < hotels.length; i++){
				hotelNames.push(hotels[i].hotelName);
			}

			$scope.hotelList = hotelNames;

			console.log($scope.hotelList);
			console.log($scope.reception);


		}, function onError(response){

		});
	}
}]);