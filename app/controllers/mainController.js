var app = angular.module('quiltApp');

app.controller('mainController', ['$rootScope', '$state', 'accountService', '$scope', function($rootScope, $state, accountService, $scope) {

    $rootScope.$on('authTokenChanged', function(event, mass) { 
      
      accountService.isLoggedIn(function(isLoggedIn){
          if(!isLoggedIn)
          {
                $state.transitionTo('login');              
          }
      })
      
    });
    
    $scope.toggleSidebar = function(){
        $rootScope.collapsed = !$rootScope.collapsed;
        
    	$rootScope.$broadcast('collapsedChanged');
    }
    
    $scope.logout = function(){
        accountService.logout();
    }
	
}]);