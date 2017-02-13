//export interface User {

//    username: string; //Required
//    email: string; //Required, must be valid email format
//    fullname: string; //Required, must be 6-100 characters.
//    password: string; //Required, value must be equal to confirm password

//}

export class User {

    constructor(
        public username: string,
        public email: string,
        public fullname: string,
        public password: string
    ) { 
    }
}