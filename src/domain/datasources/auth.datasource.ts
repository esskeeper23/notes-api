import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { User } from "../entities/user.entity";



export abstract class AuthDatasource {

    //TODO: abstract login

    abstract register( registerUserDto: RegisterUserDto ):Promise<User>

}
