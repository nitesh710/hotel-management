angular.module('hotelController', [])
.controller('hotelCtrl', ['$scope', '$http', '$location','myHotelService','myHotelRoomService', function($scope, $http, $location, myHotelService, myHotelRoomService){

    
    var hotelName = myHotelService.getHotel();
    $scope.hotel = {
    	hotelName: hotelName
    };

    myHotelRoomService.setHotel(hotelName);

    if (hotelName === "Radison Blue") {
    	var imgObj = {
	    	id: 1,
	    	name: "radison",
	    	path: "images/hotel1.jpg",
            description: "Radisson Blu Hotel Nagpur,is a 5 star property in Nagpur situated 4.2 Km from Dr. Babasaheb Ambedkar International Airport and 1.3 Km from Sai Mandir. Set in the city of oranges, this hotel offers 24 hours in-room dining facility.Housing a total of 214 rooms across 8 floors,this hotel in Nagpur provides in-room amenities like Wi-Fi connectivity,television, telephone, room service, attached bathroom and work desk."
	    };
    }

    if (hotelName === "Ashiyana") {
    	var imgObj = {
	    	id: 1,
	    	name: "radison",
	    	path: "images/hotel2.jpg",
            description: "Apart from budget accommodation in Nagpur, Hotel Ashiyana offers internet access to its patrons. This business property in Nagpur is 4 km away from Nagpur Railway Station and 1 km from Dhantoli Park. A total of 120 well-maintained rooms, spread over 7 floors are available for accommodation. The rooms offered are spacious and equipped with amenities such as premium bedding, television, tea-coffee maker, safe and mini bar. "	
	    };
    }

    $scope.book = function(){
    	$location.path('/hotelRooms');
    }

    $scope.dataHolder = imgObj;

    console.log("Inside Hotel");
    console.log($scope.hotel);

	$http.post('/api/hotel/', $scope.hotel)
	.then(function onSuccess(response){
		console.log(response.data);

        myHotelRoomService.setHotelId(response.data._id);
		$scope.hotelName = response.data.hotelName;
		$scope.city = response.data.city;
		$scope.state = response.data.state;

	}, function onError(response){

	});

}]);