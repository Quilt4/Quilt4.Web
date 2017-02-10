export class RegisterModel {
    constructor(
        public username: string,
        public email: string,
        public fullname: string,
        public password: string,
        public confirmPassword: string
    ) {
    }
}