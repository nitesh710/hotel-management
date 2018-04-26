angular.module('userSignInController', [])
.controller('userSignInCtrl', ['$scope', '$http', '$location','myUserService', function($scope, $http, $location, myUserService){
	
	$scope.emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	$scope.passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

	$scope.signIn = function(){

		myUserService.setUser($scope.user.email);

		$http.post('/api/userSignIn/', $scope.user)
		.then(function onSuccess(response){
			console.log(response.data);
			$location.path('/searchHotel');
		}, function onError(response){
			console.log(response.data);
		});
	}
}])