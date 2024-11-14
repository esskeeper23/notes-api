import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { User } from "../entities/user.entity";



export abstract class AuthRepository {

    //TODO: abstract login

    abstract register( registerUserDto: RegisterUserDto ):Promise<User>

}


