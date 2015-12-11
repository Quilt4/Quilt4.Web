var app = angular.module('quiltApp');

app.service('accountService', ['apiFactory', function (apiFactory) {
	
	this.register = function(username, email, password, confirmPassword, callback) {
		
		apiFactory.register(username, email, password, confirmPassword, callback);

	}	
	
	this.login = function(username, password, callback) {
		
		apiFactory.login(username, password, callback);

	}
	
	this.logout = function(){
		
		console.log("Logging out");
		apiFactory.logout();
		
	}
	
	this.isLoggedIn = function(callback){
		apiFactory.getToken(function(token)
		{
			if(token == null || token == undefined || token.length == 0)
			{
				callback(false);
				return;
			}
			
			callback(true);
		})
	}

}]);