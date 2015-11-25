var app = angular.module('quiltApp');

app.factory('apiFactory', function ($http, quilt4Config) {
	
	function apiGet(methodName, success, error) {
				
		
		//TODO: Handle auth
		$http.get(quilt4Config.apiBaseUrl + methodName)
		
		.success(function(response)	{
			
			success(response);		
				
		})
		.error(function(response)
		{
			
			error(response);
			
		});
		
	};
	
	function apiPost(methodName, data, success, error) {
				
				
		//TODO: Handle auth
		$http.post(quilt4Config.apiBaseUrl + methodName, data)
		
		.success(function(response)	{
			
			success(response);		
				
		})
		.error(function(response)
		{
			
			error(response);
			
		});
		
	};
	
	return {
		
		apiGet: apiGet,
		apiPost: apiPost
		
	};
	
});