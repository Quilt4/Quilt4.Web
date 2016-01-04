var app = angular.module('quiltApp');

app.controller('registerController', ['$scope', '$stateParams', 'accountService', '$state', '$rootScope', function($scope, $stateParams, accountService, $state, $rootScope) {
	
	$scope.register = function()
	{
		$scope.loading = true;
		$scope.message = null;
		
		accountService.register($scope.username, $scope.firstName, $scope.lastName, $scope.email, $scope.password, $scope.confirmPassword, function(result){
			if(result)
			{			
				$scope.message = null;
				
				accountService.logout(function(){
										
				});
								
				$state.transitionTo('login');
				
			} else {
				
				$scope.message = "Failed to register new account.";
			}
			
			$scope.loading = false;
		})
	}
	

}]);