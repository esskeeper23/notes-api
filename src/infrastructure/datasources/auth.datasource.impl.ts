import { BcryptAdapter } from "../../config";
import Users from "../../data/models/user.model";
import { AuthDatasource, CustomError, RegisterUserDto, User } from "../../domain";
import { UserMapper } from "../mappers/user.mapper";
const uuid = require('uuid');



type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string)=> boolean;

export class AuthDatasourceImpl implements AuthDatasource {


    constructor(
        private readonly hashPassword: HashFunction = BcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = BcryptAdapter.compare,
    ) {}

    async register(registerUserDto: RegisterUserDto): Promise<User> {
        const {userName, lastName, firstName, email, password } = registerUserDto;

        try {

            //? 1. Verify if the user already exists
            const exist = await Users.findOne({having: {email: email}}); 
            if (exist) throw CustomError.badRequest('User already registered');

            //? 2. hash the password

            const user = await Users.create({
                id: uuid.v4(),
                userName: userName,
                lastName: lastName,
                firstName: firstName,
                email:  email,
                password: this.hashPassword( password ),

            });

            await user.save();


            return UserMapper.userEntityFromObject(user);

        }catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }

    }

}