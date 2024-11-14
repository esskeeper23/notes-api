import { Validators } from "../../../config";




export class RegisterUserDto {

    private constructor(
        public userName: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
    ) {}

    static create(object: {[key: string]: any; } ): [string?, RegisterUserDto?] {
        const {firstName, lastName, userName, email, password} = object;

        if ( !firstName) return['Missing name'];
        if ( !lastName) return['Missing Last Name'];
        if ( !userName) return['Missing User Name'];
        if ( !email) return['Missing email'];
        if (!Validators.email.test( email )) return['Invalid email'];
        if (!password) return['Missing password'];
        if (password.length < 6) return['Password too short'];
        if ( userName.length < 6 ) return['User name too short'];

        return [
            undefined,
            new RegisterUserDto( userName, lastName, firstName, email, password)
        ];
    }

}
