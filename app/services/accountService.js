var app = angular.module('quiltApp');

app.service('accountService', ['apiFactory', function (apiFactory) {
	
	this.register = function(username, firstName, lastName, email, password, confirmPassword, callback) {
		
		apiFactory.register(username, firstName, lastName, email, password, confirmPassword, callback);

	}	
	
	this.login = function(username, password, callback) {
		
		apiFactory.login(username, password, callback);

	}
	
	this.logout = function(){
		
		this.isLoggedIn(function(result)
		{
			if(result)
			{
				apiFactory.logout();				
			}
		})
		
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
	
	this.getUser = function(callback){
		apiFactory.apiGet("Account/UserInfo", function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})
	}

}]);