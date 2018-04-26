angular.module('userService', [])
.factory('myUserService', function(){
	var user = null;

	return{
		getUser: function(){
			return user;
		},
		setUser: function(userId){
			user = userId;
		}
	}
});