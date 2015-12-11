var app = angular.module('quiltApp');

app.controller('mainController', ['$rootScope', '$state', 'accountService', function($rootScope, $state, accountService) {
	

    $rootScope.$on('authTokenChanged', function(event, mass) { 
      
      accountService.isLoggedIn(function(isLoggedIn){
          if(!isLoggedIn)
          {
                $state.transitionTo('login');              
          }
      })
      
    });
	
}]);