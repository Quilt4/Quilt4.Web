"use strict";
var RegisterModel = (function () {
    function RegisterModel(username, email, fullname, password, confirmPassword) {
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