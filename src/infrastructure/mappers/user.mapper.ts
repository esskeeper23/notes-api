import { CustomError, User } from "../../domain";



export class UserMapper {

    static userEntityFromObject(object: {[key: string]: any}) {

        const { id, userName, lastName, firstName, email, password, roles} = object;

        if (!userName) throw CustomError.badRequest('Missing user name')
        if (!firstName) throw CustomError.badRequest('Missing first name')
        if (!lastName) throw CustomError.badRequest('Missing last name')
        if (!email) throw CustomError.badRequest('Missing email')
        if (!password) throw CustomError.badRequest('Missing password')
        if (!roles) throw CustomError.badRequest('Missing roles')

        return new User(
            id,
            userName,
            firstName,
            lastName,
            email,
            password,
            roles
        )
    }

}