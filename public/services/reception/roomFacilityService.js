angular.module('roomFacilityService', [])
.factory('roomService', function(){
	var roomInfo = null;
	return {
		getRoomInfo: function(){
			return roomInfo;
		},
		setRoomInfo: function(value){
			roomInfo = value;
		}
	}
});