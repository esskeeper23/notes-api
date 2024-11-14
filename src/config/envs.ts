import 'dotenv/config'
import { get } from 'env-var';


export const envs = {

    PORT: get('PORT').required().asPortNumber(),
    JWT_SECRET: get('JWT_SECRET').required().asString(),
    db: {
        host: get('DB_HOST').required().asString(),
        username: get('DB_USER').required().asString(),
        password: get('DB_PASS').required().asString(),
        dbName: get('DB_NAME').required().asString(),
    }

}