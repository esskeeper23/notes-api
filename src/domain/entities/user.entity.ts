


export class User {

    constructor(
        public id: string,
        public firstName: string,
        public userName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public role: string[],
    ) {}
}