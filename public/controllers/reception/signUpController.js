angular.module('signUpController', [])
.controller('signUpCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

	$scope.emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	$scope.mobilePattern = /^\+?\d{10}$/;
	$scope.pinPattern = /^\+?\d{6}$/;
	$scope.onlyTextPattern = /^[a-zA-Z]*$/;
	$scope.passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

	$scope.signUp = function(){
		$http.post('/api/registerHotel/', $scope.hotel)
		.then(function onSuccess(response){
			//handle on success
			console.log(response.data);
			$location.path('/loginHotel');
		}, function onError(response){
			//handle on error
			console.log(response.data);
		});
	};

}]);