var app = angular.module('quiltApp');

app.service('accountService', ['apiFactory', function (apiFactory) {
	
	//Use cache?

	this.register = function(username, email, password, confirmPassword) {
		
		apiFactory.register(username, email, password, confirmPassword, function(result){
			console.log(result);
		});

	}
	
	
	this.login = function(username, password, callback) {
		
		apiFactory.login(username, password, callback);

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