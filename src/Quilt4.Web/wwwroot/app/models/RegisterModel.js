"use strict";
var RegisterModel = (function () {
    function RegisterModel(username, //Required
        email, //Required, must be valid email format
        fullname, //Required, must be 6-100 characters.
        password, //Required, value must be equal to confirm password
        confirmPassword) {
        this.username = username;
        this.email = email;
        this.fullname = fullname;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    return RegisterModel;
}());
exports.RegisterModel = RegisterModel;
//# sourceMappingURL=RegisterModel.js.map