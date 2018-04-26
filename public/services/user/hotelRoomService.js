angular.module('hotelRoomService', [])
.factory('myHotelRoomService', function(){
	var hotelName = null;
	var hotelId = null;

	return{
		getHotel: function(){
			return hotelName;
		},
		setHotel: function(hotel){
			hotelName = hotel;
		},
		getHotelId: function(){
			return hotelId;
		},
		setHotelId: function(id){
			hotelId = id;
		}
	}
});