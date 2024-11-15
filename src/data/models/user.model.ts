import { DataTypes } from 'sequelize'

import db from '../database';

const Users = db.define('users', {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name',
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name',
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roles: {
        type: DataTypes.STRING,
        defaultValue: ['USER'],
        values: ['USER', 'ADMIN']
    }


})


export default Users;


