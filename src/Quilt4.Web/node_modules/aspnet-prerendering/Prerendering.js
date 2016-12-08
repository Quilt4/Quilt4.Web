"use strict";
require('es6-promise');
var url = require('url');
var path = require('path');
var domain = require('domain');
var main_1 = require('domain-task/main');
var fetch_1 = require('domain-task/fetch');
var defaultTimeoutMilliseconds = 30 * 1000;
function renderToString(callback, applicationBasePath, bootModule, absoluteRequestUrl, requestPathAndQuery, customDataParameter, overrideTimeoutMilliseconds) {
    findBootFunc(applicationBasePath, bootModule, function (findBootFuncError, bootFunc) {
        if (findBootFuncError) {
            callback(findBootFuncError, null);
            return;
        }
        // Prepare a promise that will represent the completion of all domain tasks in this execution context.
        // The boot code will wait for this before performing its final render.
        var domainTaskCompletionPromiseResolve;
        var domainTaskCompletionPromise = new Promise(function (resolve, reject) {
            domainTaskCompletionPromiseResolve = resolve;
        });
        var parsedAbsoluteRequestUrl = url.parse(absoluteRequestUrl);
        var params = {
            location: url.parse(requestPathAndQuery),
            origin: parsedAbsoluteRequestUrl.protocol + '//' + parsedAbsoluteRequestUrl.host,
            url: requestPathAndQuery,
            absoluteUrl: absoluteRequestUrl,
            domainTasks: domainTaskCompletionPromise,
            data: customDataParameter
        };
        // Open a new domain that can track all the async tasks involved in the app's execution
        main_1.run(/* code to run */ function () {
            // Workaround for Node bug where native Promise continuations lose their domain context
            // (https://github.com/nodejs/node-v0.x-archive/issues/8648)
            // The domain.active property is set by the domain-context module
            bindPromiseContinuationsToDomain(domainTaskCompletionPromise, domain['active']);
            // Make the base URL available to the 'domain-tasks/fetch' helper within this execution context
            fetch_1.baseUrl(absoluteRequestUrl);
            // Begin rendering, and apply a timeout
            var bootFuncPromise = bootFunc(params);
            if (!bootFuncPromise || typeof bootFuncPromise.then !== 'function') {
                callback("Prerendering failed because the boot function in " + bootModule.moduleName + " did not return a promise.", null);
                return;
            }
            var timeoutMilliseconds = overrideTimeoutMilliseconds || defaultTimeoutMilliseconds; // e.g., pass -1 to override as 'never time out'
            var bootFuncPromiseWithTimeout = timeoutMilliseconds > 0
                ? wrapWithTimeout(bootFuncPromise, timeoutMilliseconds, ("Prerendering timed out after " + timeoutMilliseconds + "ms because the boot function in '" + bootModule.moduleName + "' ")
                    + 'returned a promise that did not resolve or reject. Make sure that your boot function always resolves or '
                    + 'rejects its promise. You can change the timeout value using the \'asp-prerender-timeout\' tag helper.')
                : bootFuncPromise;
            // Actually perform the rendering
            bootFuncPromiseWithTimeout.then(function (successResult) {
                callback(null, successResult);
            }, function (error) {
                callback(error, null);
            });
        }, /* completion callback */ function (/* completion callback */ errorOrNothing) {
            if (errorOrNothing) {
                callback(errorOrNothing, null);
            }
            else {
                // There are no more ongoing domain tasks (typically data access operations), so we can resolve
                // the domain tasks promise which notifies the boot code that it can do its final render.
                domainTaskCompletionPromiseResolve();
            }
        });
    });
}
exports.renderToString = renderToString;
function wrapWithTimeout(promise, timeoutMilliseconds, timeoutRejectionValue) {
    return new Promise(function (resolve, reject) {
        var timeoutTimer = setTimeout(function () {
            reject(timeoutRejectionValue);
        }, timeoutMilliseconds);
        promise.then(function (resolvedValue) {
            clearTimeout(timeoutTimer);
            resolve(resolvedValue);
        }, function (rejectedValue) {
            clearTimeout(timeoutTimer);
            reject(rejectedValue);
        });
    });
}
function findBootModule(applicationBasePath, bootModule, callback) {
    var bootModuleNameFullPath = path.resolve(applicationBasePath, bootModule.moduleName);
    if (bootModule.webpackConfig) {
        var webpackConfigFullPath = path.resolve(applicationBasePath, bootModule.webpackConfig);
        var aspNetWebpackModule = void 0;
        try {
            aspNetWebpackModule = require('aspnet-webpack');
        }
        catch (ex) {
            callback('To load your boot module via webpack (i.e., if you specify a \'webpackConfig\' option), you must install the \'aspnet-webpack\' NPM package. Error encountered while loading \'aspnet-webpack\': ' + ex.stack, null);
            return;
        }
        aspNetWebpackModule.loadViaWebpack(webpackConfigFullPath, bootModuleNameFullPath, callback);
    }
    else {
        callback(null, require(bootModuleNameFullPath));
    }
}
function findBootFunc(applicationBasePath, bootModule, callback) {
    // First try to load the module (possibly via Webpack)
    findBootModule(applicationBasePath, bootModule, function (findBootModuleError, foundBootModule) {
        if (findBootModuleError) {
            callback(findBootModuleError, null);
            return;
        }
        // Now try to pick out the function they want us to invoke
        var bootFunc;
        if (bootModule.exportName) {
            // Explicitly-named export
            bootFunc = foundBootModule[bootModule.exportName];
        }
        else if (typeof foundBootModule !== 'function') {
            // TypeScript-style default export
            bootFunc = foundBootModule.default;
        }
        else {
            // Native default export
            bootFunc = foundBootModule;
        }
        // Validate the result
        if (typeof bootFunc !== 'function') {
            if (bootModule.exportName) {
                callback("The module at " + bootModule.moduleName + " has no function export named " + bootModule.exportName + ".", null);
            }
            else {
                callback("The module at " + bootModule.moduleName + " does not export a default function, and you have not specified which export to invoke.", null);
            }
        }
        else {
            callback(null, bootFunc);
        }
    });
}
function bindPromiseContinuationsToDomain(promise, domainInstance) {
    var originalThen = promise.then;
    promise.then = function then(resolve, reject) {
        if (typeof resolve === 'function') {
            resolve = domainInstance.bind(resolve);
        }
        if (typeof reject === 'function') {
            reject = domainInstance.bind(reject);
        }
        return originalThen.call(this, resolve, reject);
    };
}
