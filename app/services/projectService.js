var app = angular.module('quiltApp');

app.service('projectService', ['apiFactory', function (apiFactory) {
	
	this.getProject = function(projectId, callback) {
		
		apiFactory.apiGet("project/" + projectId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}
	
	this.getVersions = function(projectId, applicationId, callback) {

		apiFactory.apiGet("project/" + projectId + "/application/" + applicationId + "/version", function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}
	
	this.createProject = function(project, callback) {
		
		apiFactory.apiPost("project/create", project, function(response){
			
			callback(response.projectId);
			
		}, function(response){
			
			callback(null);
		});
		
	}
	
	this.updateProject = function(project, callback) {
		
		apiFactory.apiPost("project/update", project, function(response){
			
			callback(true);
			
		}, function(response){
			
			callback(false);
		});
		
	}
    
    this.getMembers = function(projectId, callback) {
        
        apiFactory.apiGet("project/" + projectId + "/members", function(response){
            
            callback(response);
            
        }, function(response){
            
            callback(null);
            
        })
        
    }
    
    this.getUsers = function(email, callback) {
        
        apiFactory.apiPost("project/getUsers", {email:email}, function(response){
            
            callback(response);
            
        }, function(response){
            
            callback(null);
            
        })
        
    }

}]);