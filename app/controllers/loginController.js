var app = angular.module('quiltApp');

app.controller('loginController', ['$scope', '$stateParams', 'accountService', '$state', '$rootScope', function($scope, $stateParams, accountService, $state, $rootScope) {
	
	
	accountService.isLoggedIn(function(isLoggedIn)
	{
		if(isLoggedIn)
		{
			$state.transitionTo('main.dashboard');              
		}
	});
	  
	$scope.login = function()
	{
		$scope.message = null;
		
		accountService.login($scope.username, $scope.password, function(result){
			if(result)
			{			
				$scope.message = null;
				$state.transitionTo('main.dashboard');
			} else {
				
				$scope.message = "Username and password didn't match.";
			}
		})
	}
	

}]);