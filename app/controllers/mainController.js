var app = angular.module('quiltApp');

app.controller('mainController', ['$rootScope', '$state', 'accountService', '$scope', function($rootScope, $state, accountService, $scope) {
 
    accountService.getUser(function(user){
        $scope.user = user; 
        console.log("Updating user");
    });

    $rootScope.$on('authTokenChanged', function(event, mass) { 
      
      accountService.isLoggedIn(function(isLoggedIn){
          if(!isLoggedIn)
          {
                $state.transitionTo('login');              
          } else {
              accountService.getUser(function(user){
                 $scope.user = user; 
                 console.log("Updating user");
              });
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