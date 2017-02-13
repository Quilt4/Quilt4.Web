//export interface User {
"use strict";
//    username: string; //Required
//    email: string; //Required, must be valid email format
//    fullname: string; //Required, must be 6-100 characters.
//    password: string; //Required, value must be equal to confirm password
//}
var User = (function () {
    function User(username, email, fullname, password) {
        this.username = username;
        this.email = email;
        this.fullname = fullname;
        this.password = password;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map