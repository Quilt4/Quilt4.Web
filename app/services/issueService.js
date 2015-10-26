var app = angular.module('quiltApp');

app.service('issueService', function () {
	
	//Mock data
	//Replace with real data from server
	var issues = [
		{
			projectId: 1,
			applicationId: 1,
			versionId: 1,
			issueTypeId: 1,
			id: 1,
			enviroment: "prod",
			user: "Daniel-PC",
			time: "2 days ago",
			data: "Message: Error code 130",
		},
		{
			projectId: 1,
			applicationId: 1,
			versionId: 1,
			issueTypeId: 1,
			id: 2,
			enviroment: "prod",
			user: "Pelle-PC",
			time: "3 days ago",
			data: "Message: Error code 130"
		},
		{
			projectId: 1,
			applicationId: 1,
			versionId: 1,
			issueTypeId: 1,
			id: 3,
			user: "Pelle-PC",
			enviroment: "dev",
			time: "4 days ago",
			data: "Message: Error code 130"
		},
	];

	this.getIssues = function(projectId, applicationId, versionId, issueTypeId) {

		var filteredIssueTypes = [];

		for(var i in issues){

		    if(issues[i].projectId == projectId && issues[i].applicationId == applicationId && issues[i].versionId == versionId && issues[i].issueTypeId == issueTypeId) {

		        filteredIssueTypes.push(issues[i]);
		        
	        }
		}

		return filteredIssueTypes;

	}

});