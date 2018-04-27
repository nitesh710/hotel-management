angular.module('adminPanelController', [])
.controller('adminPanelCtrl', ['$scope', '$http', '$location','$route', function($scope, $http, $location, $route){
	$http.get('/api/getAllHotels/')
	.then(function onSuccess(response){
		console.log(response.data);
		$scope.hotels = response.data;
	}, function onError(response){
		console.log(response.data);
	});

	$scope.removeHotel = function(hotel){
		$http.delete('/api/deleteHotel/' + hotel._id)
		.then(function onSuccess(response){
			$route.reload();
			console.log(response.data);

		}, function onError(response){
			console.log(response.data);
		});
	}

}]);