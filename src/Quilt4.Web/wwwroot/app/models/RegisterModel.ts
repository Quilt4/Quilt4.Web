export class RegisterModel {

    constructor(
        public username: string, //Required
        public email: string, //Required, must be valid email format
        public fullname: string, //Required, must be 6-100 characters.
        public password: string, //Required, value must be equal to confirm password
        public confirmPassword: string
    ) {
        
    }
}
