angular.module('userSignUpController', [])
.controller('userSignUpCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	$scope.emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	$scope.mobilePattern = /^\+?\d{10}$/;
	$scope.onlyTextPattern = /^[a-zA-Z]*$/;
	$scope.passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

	$scope.signUp = function(){
		$http.post('/api/userSignUp/', $scope.user)
		.then(function onSuccess(response){
			console.log(response.data);
		}, function onError(response){
			console.log(response.data);
		});
	}
}]);