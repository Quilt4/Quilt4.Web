var app = angular.module('quiltApp');

app.service('projectService', function () {
	
	//Mock data
	//Replace with real data from server
	var projects = [
		{
			id: 1,
			name: "Eplicta",
			versions: 4,
			sessions: 4302,
			exceptions: 31,
			errors: 342
		},
		{
			id: 2,
			name: "Florida",
			versions: 4,
			sessions: 302,
			exceptions: 12,
			errors: 1
		},
		{
			id: 3,
			name: "Tharga-Console",
			versions: 1,
			sessions: 3,
			exceptions: 1,
			errors: 2
		},
		{
			id: 4,
			name: "Tharga-Reporter",
			versions: 34,
			sessions: 32,
			exceptions: 122,
			errors: 311
		},
		{
			id: 5,
			name: "Tharga-Toolkit",
			versions: 43,
			sessions: 1312,
			exceptions: 132,
			errors: 1231
		}
	];

	this.getProjects = function() {

		return projects;

	}

	this.getProject = function(projectId) {

		for(var i in projects){


		    if(projects[i].id == projectId) {

		        return projects[i];
		        
	        }
		}

		return null;

	}

});