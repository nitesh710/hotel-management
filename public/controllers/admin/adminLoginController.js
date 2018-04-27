angular.module('adminLoginController', [])
.controller('adminLoginCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.login = function(){
		$http.post('/api/loginAdmin/', $scope.admin)
		.then(function onSuccess(response){
			console.log(response.data);
			$location.path('/adminPanel');
		}, function onError(response){
			console.log(response.data);
		});
	}
}]);