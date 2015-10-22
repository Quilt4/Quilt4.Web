var app = angular.module('quiltApp');

app.service('applicationService', function () {
	
	//Mock data
	//Replace with real data from server
	var applications = [
		{
			id: 1,
			name: "Eplicta.MediaMapper.Web",
			versions: 3,
			sessions: 4302,
			exceptions: 31,
			errors: 342
		},
		{
			id: 2,
			name: "Eplicat.Cruiser.Web",
			versions: 4,
			sessions: 302,
			exceptions: 12,
			errors: 1
		},
		{
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

});