"use strict";
var http_1 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
exports.fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: http_1.Http,
    useFactory: function (backend, options) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // configure fake backend
        backend.connections.subscribe(function (connection) {
            // wrap in timeout to simulate server api call
            setTimeout(function () {
                // authenticate
                if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === http_1.RequestMethod.Post) {
                    // get parameters from post request
                    var params_1 = JSON.parse(connection.request.getBody());
                    // find if any user matches login credentials
                    var filteredUsers = users.filter(function (user) {
                        return user.username === params_1.username && user.password === params_1.password;
                    });
                    if (filteredUsers.length) {
                        // if login details are valid return 200 OK with user details and fake jwt token
                        var user = filteredUsers[0];
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            status: 200,
                            body: {
                                id: user.id,
                                username: user.username,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                token: 'fake-jwt-token'
                            }
                        })));
                    }
                    else {
                        // else return 400 bad request
                        connection.mockError(new Error('Username or password is incorrect'));
                    }
                }
                // get users
                if (connection.request.url.endsWith('/api/users') && connection.request.method === http_1.RequestMethod.Get) {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: users })));
                    }
                    else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                    }
                }
                // get user by id
                if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === http_1.RequestMethod.Get) {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        var urlParts = connection.request.url.split('/');
                        var id_1 = parseInt(urlParts[urlParts.length - 1]);
                        var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                        var user = matchedUsers.length ? matchedUsers[0] : null;
                        // respond 200 OK with user
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: user })));
                    }
                    else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                    }
                }
                // create user
                if (connection.request.url.endsWith('/api/users') && connection.request.method === http_1.RequestMethod.Post) {
                    // get new user object from post body
                    var newUser_1 = JSON.parse(connection.request.getBody());
                    // validation
                    var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                    if (duplicateUser) {
                        return connection.mockError(new Error('Username "' + newUser_1.username + '" is already taken'));
                    }
                    // save new user
                    newUser_1.id = users.length + 1;
                    users.push(newUser_1);
                    localStorage.setItem('users', JSON.stringify(users));
                    // respond 200 OK
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200 })));
                }
                // delete user
                if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === http_1.RequestMethod.Delete) {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        var urlParts = connection.request.url.split('/');
                        var id = parseInt(urlParts[urlParts.length - 1]);
                        for (var i = 0; i < users.length; i++) {
                            var user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }
                        // respond 200 OK
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200 })));
                    }
                    else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                    }
                }
            }, 500);
        });
        return new http_1.Http(backend, options);
    },
    deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
};
//# sourceMappingURL=fake-backend.js.map