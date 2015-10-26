var app = angular.module('quiltApp');

app.service('applicationService', function () {
	
	
	//Mock data
	//Replace with real data from server
	var applications = [
		{
			projectId: 1,
			id: 1,
			name: "Eplicta.MediaMapper.Web",
			versions: 3,
			sessions: 4302,
			exceptions: 31,
			errors: 343
		},
		{
			projectId: 1,
			id: 2,
			name: "Eplicat.Cruiser.Web",
			versions: 4,
			sessions: 302,
			exceptions: 12,
			errors: 1
		},
		{
			projectId: 1,
			id: 3,
			name: "Eplicta.MediaMapper.Console",
			versions: 1,
			sessions: 3,
			exceptions: 1,
			errors: 2
		}
	];

	this.getApplications = function(projectId) {

		//Fetch from server

		return applications;

	}

	this.getApplication = function(projectId, applicationId) {

		for(var i in applications){

		    if(applications[i].projectId == projectId && applications[i].id == applicationId) {

		        return applications[i];
		        
	        }
		}

		return null;

	}

});