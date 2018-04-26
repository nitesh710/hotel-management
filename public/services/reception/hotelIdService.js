angular.module('hotelIdService', [])
.factory('getHotelIdService', function(){
	var id = null;
	return{
		getHotelId: function(){
			return id;
		},
		setHotelId: function(hotelId){
			id = hotelId; 
		}
	}
});