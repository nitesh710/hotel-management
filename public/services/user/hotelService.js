angular.module('hotelService', [])
.factory('myHotelService', function(){
	var hotel = null;

	return{
		getHotel: function(){
			return hotel;
		},
		setHotel: function(hotelName){
			hotel = hotelName;
		}
	}
});