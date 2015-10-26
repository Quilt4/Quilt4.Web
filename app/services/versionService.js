var app = angular.module('quiltApp');

app.service('versionService', function () {
	
	//Mock data
	//Replace with real data from server
	var versions = [
		{
			id: 1,
			applicationId: 1,
			version: "1.0.2",
			sessions: 4302,
			issueTypes: 31,
			issues: 342,
			last: "1 day ago",
			env: ["prod", "dev", "ci"]
		},
		{
			id: 2,
			applicationId: 1,
			version: "2.0.1",
			sessions: 302,
			issueTypes: 12,
			issues: 1313,
			last: "2 day ago",
			env: ["prod", "dev"]
		},
		{
			id: 3,
			applicationId: 1,
			version: "3.1.1",
			sessions: 3,
			issueTypes: 1,
			issues: 23322,
			last: "5 day ago",
			env: ["prod", "ci"]
		},
		{
			id: 1,
			applicationId: 2,
			version: "1.0.1",
			sessions: 302,
			issueTypes: 12,
			issues: 1313,
			last: "2 hours ago",
			env: ["prod", "dev", "ci"]
		},
		{
			id: 2,
			applicationId: 2,
			version: "1.3.1",
			sessions: 3,
			issueTypes: 1,
			issues: 23322,
			last: "5 hours ago",
			env: ["dev", "ci"]
		},
		{
			id: 3,
			applicationId: 2,
			version: "1.4.1",
			sessions: 302,
			issueTypes: 12,
			issues: 1313,
			last: "2 hours ago",
			env: ["prod", "dev"]
		},
		{
			id: 4,
			applicationId: 2,
			version: "1.5.1",
			sessions: 3,
			issueTypes: 1,
			issues: 23322,
			last: "2 hours ago",
			env: ["prod"]
		},
		{
			id: 1,
			applicationId: 3,
			version: "1.0.1",
			sessions: 302,
			issueTypes: 12,
			issues: 1313,
			last: "2 hours ago",
			env: ["prod", "dev", "ci"]
		},
		{
			id: 2,
			applicationId: 3,
			version: "3.2.1",
			sessions: 3,
			issueTypes: 1,
			issues: 23322,
			last: "2 hours ago",
			env: ["prod", "dev", "ci"]
		},
		{
			id: 3,
			applicationId: 3,
			version: "12.0.1",
			sessions: 302,
			issueTypes: 12,
			issues: 1313,
			last: "2 hours ago",
			env: ["prod", "dev", "ci"]
		},
		{
			id: 4,
			applicationId: 3,
			version: "13.0.1",
			sessions: 3,
			issueTypes: 1,
			issues: 23322,
			last: "2 hours ago",
			env: ["prod", "dev", "ci"]
		},
		{
			id: 5,
			applicationId: 3,
			version: "14.0.1",
			sessions: 302,
			issueTypes: 12,
			issues: 1313,
			last: "2 hours ago",
			env: ["prod", "dev", "ci"]
		},
		{
			id: 6,
			applicationId: 3,
			version: "1.0.0",
			sessions: 3,
			issueTypes: 1,
			issues: 23322,
			last: "2 hours ago",
			env: ["prod", "dev", "ci"]
		},
	];

	this.getVersions = function(applicationId) {

		var result = [];

		for(var i in versions){

		    if(versions[i].applicationId == applicationId) {

		        result.push(versions[i]);
		        
	        }
		}

		return result;

	}

	this.getVersion = function(applicationId, versionId) {

		for(var i in versions){

		    if(versions[i].applicationId == applicationId && versions[i].id == versionId) {

		        return versions[i];
		        
	        }
		}

		return null;

	}

});