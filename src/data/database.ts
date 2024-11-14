import { Sequelize, Dialect } from 'sequelize'
import { envs } from '../config'


const db = new Sequelize({
    dialect: 'postgres' as Dialect ,
    host: envs.db.host, 
    username: envs.db.username, 
    password: envs.db.password, 
    database: envs.db.dbName,
})

export default db;