var app = angular.module('quiltApp');

app.factory('apiFactory', function ($http, quilt4Config, $rootScope, $window) {
	
	var authToken = "";
	
	function apiGet(methodName, success, error) {
				
		var token = getToken();
		
		if(token == null || token == undefined || token.length == 0)
		{
			setToken(null);
			error("Not logged in!");
			return;
		}
				
		var config = {headers: {'Authorization': token}};
		
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
					
		var token = getToken();
		
		if(token == null || token == undefined || token.length == 0)
		{
			setToken(null);
			error("Not logged in!");
			return;
		}
				
		var config = {headers: {'Authorization': token}};
		
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
	
	function apiLogout() {
				
		var token = getToken();
				
		var config = {headers: {'Authorization': token}};
				
		$http.post(quilt4Config.apiBaseUrl + 'account/logout', null, config)
		
		.success(function(response)	{
			
			setToken(null);
				
		})
		.error(function(response, status)
		{
			
			if(status == 401)
			{
				setToken(null);
				
			} else {
				
				console.log("Failed to logout");
			}			
			
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
			callback(false);
			
		});
		
	};
	
	function setToken(token){
		
		authToken = token;		
		
  		$window.sessionStorage.setItem('authToken', token);
		  
    	$rootScope.$broadcast('authTokenChanged');
	}
	
	function getToken(){
		
		if(authToken != null && authToken != undefined && authToken.length > 0)
		{
			return authToken;
		}
		
		var sessionToken = $window.sessionStorage.getItem('authToken');
		
		if(sessionToken != null && sessionToken != undefined && sessionToken.length > 0)
		{
			authToken = sessionToken;
			return authToken;
		}
		
		return null;
	}
	
	function apiGetToken(callback)
	{
		callback(authToken);
	}
	
	return {
		
		apiGet: apiGet,
		apiPost: apiPost,
		login: apiLogin,
		logout: apiLogout,
		register: apiRegister,
		getToken: apiGetToken
		
	};
	
});