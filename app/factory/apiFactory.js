var app = angular.module('quiltApp');

app.factory('apiFactory', function ($http, quilt4Config, $rootScope) {
	
	var authToken = "";
	
	function apiGet(methodName, success, error) {
				
		if(authToken == null || authToken == undefined || authToken.length == 0)
		{
			console.log("Not logged in!");
			setToken(null);
			error("Not logged in!");
			return;
		}
				
		var config = {headers: {'Authorization': authToken}};
		
		$http.get(quilt4Config.apiBaseUrl + methodName, config)
		
		.success(function(response)	{
			
			success(response);		
				
		})
		.error(function(response, status)
		{
			if(status == 401)
			{
				setToken(null);
			}
			error(response);
			
		});
		
	};
	
	function apiPost(methodName, data, success, error) {
					
		if(authToken == null || authToken == undefined || authToken.length == 0)
		{
			console.log("Not logged in!");
			setToken(null);
			error("Not logged in!");
			return;
		}
				
		var config = {headers: {'Authorization': authToken}};
		
		$http.post(quilt4Config.apiBaseUrl + methodName, data, config)
		
		.success(function(response)	{
			
			success(response);		
				
		})
		.error(function(response, status)
		{
			
			if(status == 401)
			{
				setToken(null);
			}
			error(response);
			
		});
		
	};
	
	function apiLogin(username, password, callback) {
				
		$http.post(quilt4Config.apiBaseUrl + 'account/login', {username:username, password:password})
		
		.success(function(response)	{
			
			setToken(response.token_type + " " + response.access_token);
			callback(true);		
				
		})
		.error(function(response)
		{
			setToken(null);
			callback(false);
			
		});
		
	};
		
	function apiRegister(username, email, password, confirmPassword, callback) {
				
		$http.post(quilt4Config.apiBaseUrl + 'account/register', {username:username, email:email, password:password, confirmPassword:confirmPassword})
		
		.success(function(response)	{
			
			console.log(response);
			callback(true);		
				
		})
		.error(function(response)
		{
			console.log(response);
			callback(false);
			
		});
		
	};
	
	function setToken(token){
		console.log("New token is set: " + token);
		authToken = token;		
    	$rootScope.$broadcast('authTokenChanged');
	}
	
	function getToken(callback)
	{
		callback(authToken);
	}
	
	return {
		
		apiGet: apiGet,
		apiPost: apiPost,
		login: apiLogin,
		register: apiRegister,
		getToken: getToken
		
	};
	
});