var app = angular.module('quiltApp');

app.service('issueTypeService', function () {
	
		//Mock data
	//Replace with real data from server
	var issueTypes = [
		{
			projectId: 1,
			applicationId: 1,
			versionId: 1,
			id: 1,
			type: "System.Web.HttpException",
			level: "error",
			issues: 324,
			enviroment: "prod",
			last: "2 days ago",
			message: "The remote server returned an error: (404) Not Found.",
			stackTrace: "at HTK.Friskvardsofferten.Business.QuotnationBusiness.SaveSendQuotation(Int32 companyId, String getUserId, Int32 quotationRequestId, String description) in C:\\Dev\\Friskvårdsofferten\\HTK.Friskvardsofferten.Business\\QuotationBusiness.cs:line 337 \nat HTK.Friskvardsofferten.Controllers.CustomerController.SendQuotation() in C:\\Dev\\Friskvårdsofferten\\HTK.Friskvardsofferten\\Controllers\\CustomerController.cs:line 273 \nat lambda_method(Closure , ControllerBase , Object[] ) \nat System.Web.Mvc.ActionMethodDispatcher.Execute(ControllerBase controller, Object[] parameters) \nat System.Web.Mvc.ReflectedActionDescriptor.Execute(ControllerContext controllerContext, IDictionary`2 parameters) \nat System.Web.Mvc.ControllerActionInvoker.InvokeActionMethod(ControllerContext controllerContext, ActionDescriptor actionDescriptor, IDictionary`2 parameters) \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.b__39(IAsyncResult asyncResult, ActionInvocation innerInvokeState) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResult`2.CallEndDelegate(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResultBase`1.End() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.EndInvokeActionMethod(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.AsyncInvocationWithFilters.b__3d() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.AsyncInvocationWithFilters.<>c__DisplayClass46.b__3f() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.<>c__DisplayClass33.b__32(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResult`1.CallEndDelegate(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResultBase`1.End() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.EndInvokeActionMethodWithFilters(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.<>c__DisplayClass21.<>c__DisplayClass2b.b__1c() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.<>c__DisplayClass21.b__1e(IAsyncResult asyncResult)"
		},
		{
			projectId: 1,
			applicationId: 1,
			versionId: 1,
			id: 2,
			type: "System.Net.WebException",
			level: "error",
			issues: 3024,
			enviroment: "prod",
			last: "2 days ago",
			message: "The remote server returned an error: (404) Not Found.",
			stackTrace: "at HTK.Friskvardsofferten.Business.QuotnationBusiness.SaveSendQuotation(Int32 companyId, String getUserId, Int32 quotationRequestId, String description) in C:\\Dev\\Friskvårdsofferten\\HTK.Friskvardsofferten.Business\\QuotationBusiness.cs:line 337 \nat HTK.Friskvardsofferten.Controllers.CustomerController.SendQuotation() in C:\\Dev\\Friskvårdsofferten\\HTK.Friskvardsofferten\\Controllers\\CustomerController.cs:line 273 \nat lambda_method(Closure , ControllerBase , Object[] ) \nat System.Web.Mvc.ActionMethodDispatcher.Execute(ControllerBase controller, Object[] parameters) \nat System.Web.Mvc.ReflectedActionDescriptor.Execute(ControllerContext controllerContext, IDictionary`2 parameters) \nat System.Web.Mvc.ControllerActionInvoker.InvokeActionMethod(ControllerContext controllerContext, ActionDescriptor actionDescriptor, IDictionary`2 parameters) \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.b__39(IAsyncResult asyncResult, ActionInvocation innerInvokeState) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResult`2.CallEndDelegate(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResultBase`1.End() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.EndInvokeActionMethod(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.AsyncInvocationWithFilters.b__3d() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.AsyncInvocationWithFilters.<>c__DisplayClass46.b__3f() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.<>c__DisplayClass33.b__32(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResult`1.CallEndDelegate(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResultBase`1.End() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.EndInvokeActionMethodWithFilters(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.<>c__DisplayClass21.<>c__DisplayClass2b.b__1c() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.<>c__DisplayClass21.b__1e(IAsyncResult asyncResult)"
		},
		{
			projectId: 1,
			applicationId: 1,
			versionId: 1,
			id: 3,
			type: "Message",
			level: "Information",
			issues: 23,
			enviroment: "dev",
			last: "3 days ago",
			message: "Email sent to customer",
			stackTrace: "at HTK.Friskvardsofferten.Business.QuotnationBusiness.SaveSendQuotation(Int32 companyId, String getUserId, Int32 quotationRequestId, String description) in C:\\Dev\\Friskvårdsofferten\\HTK.Friskvardsofferten.Business\\QuotationBusiness.cs:line 337 \nat HTK.Friskvardsofferten.Controllers.CustomerController.SendQuotation() in C:\\Dev\\Friskvårdsofferten\\HTK.Friskvardsofferten\\Controllers\\CustomerController.cs:line 273 \nat lambda_method(Closure , ControllerBase , Object[] ) \nat System.Web.Mvc.ActionMethodDispatcher.Execute(ControllerBase controller, Object[] parameters) \nat System.Web.Mvc.ReflectedActionDescriptor.Execute(ControllerContext controllerContext, IDictionary`2 parameters) \nat System.Web.Mvc.ControllerActionInvoker.InvokeActionMethod(ControllerContext controllerContext, ActionDescriptor actionDescriptor, IDictionary`2 parameters) \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.b__39(IAsyncResult asyncResult, ActionInvocation innerInvokeState) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResult`2.CallEndDelegate(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResultBase`1.End() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.EndInvokeActionMethod(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.AsyncInvocationWithFilters.b__3d() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.AsyncInvocationWithFilters.<>c__DisplayClass46.b__3f() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.<>c__DisplayClass33.b__32(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResult`1.CallEndDelegate(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncResultWrapper.WrappedAsyncResultBase`1.End() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.EndInvokeActionMethodWithFilters(IAsyncResult asyncResult) \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.<>c__DisplayClass21.<>c__DisplayClass2b.b__1c() \nat System.Web.Mvc.Async.AsyncControllerActionInvoker.<>c__DisplayClass21.b__1e(IAsyncResult asyncResult)"
		},
	];

	this.getIssueTypes = function(projectId, applicationId, versionId) {

		var filteredIssueTypes = [];

		for(var i in issueTypes){

		    if(issueTypes[i].projectId == projectId && issueTypes[i].applicationId == applicationId && issueTypes[i].versionId == versionId) {

		        filteredIssueTypes.push(issueTypes[i]);
		        
	        }
		}

		return filteredIssueTypes;

	}
	
	this.getIssueType = function(projectId, applicationId, versionId, issueTypeId) {

		for(var i in issueTypes){

		    if(issueTypes[i].projectId == projectId && issueTypes[i].applicationId == applicationId && issueTypes[i].versionId == versionId && issueTypes[i].id == issueTypeId) {

		        return issueTypes[i];
		        
	        }
		}
		
		return null;
		
	}

});