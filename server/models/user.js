'use strict';
// const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {

    const user = sequelize.define('user', {
        _id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        email:{
            type: DataTypes.STRING, 
            isEmail: true ,
            notNull: true
        },
        password: {
            type: DataTypes.STRING
        }
    });
    return user;
};