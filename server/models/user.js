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
    }, {
        timestamps: false,
        classMethods: {
            generateHashPass: function (password, done) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(11), null);
            },
            associate: function(models) {
            }
        },
        instanceMethods: {
            authenticate: function (password, callback) {
                return bcrypt.compare(password, this.password, callback);
            }
        }
    });
    return user;
};