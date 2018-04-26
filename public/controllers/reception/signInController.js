angular.module('signInController', [])
.controller('signInCtrl', ['$scope', '$http', '$location','getHotelIdService', function($scope, $http, $location, getHotelIdService){
	
	$scope.passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

	$scope.signIn = function(){

		$http.post('/api/loginHotel/', $scope.hotel)
		.then(function onSuccess(response){
		//handle on success
		$location.path('/roomFacility');
		console.log("Id is " + response.data._id);
		getHotelIdService.setHotelId(response.data._id);

		console.log(response);
		}, function onError(response){
		//handle on error
		});
	}
}]);